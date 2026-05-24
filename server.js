import Fastify from 'fastify';
import cors from '@fastify/cors';
import Database from 'better-sqlite3';

const fastify = Fastify();
await fastify.register(cors, { origin: '*' });

const db = new Database('flavorflow.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  );

  CREATE TABLE IF NOT EXISTS recipes (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    imageUrl TEXT,
    category TEXT,
    cookingTime TEXT,
    difficulty TEXT,
    servings INTEGER,
    ingredients TEXT,
    instructions TEXT
  );

  CREATE TABLE IF NOT EXISTS favorites (
    user_id INTEGER,
    recipe_id TEXT,
    PRIMARY KEY (user_id, recipe_id)
  );
`);

const insertRecipe = db.prepare(`
  INSERT OR IGNORE INTO recipes (id, title, description, imageUrl, category, cookingTime, difficulty, servings, ingredients, instructions)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`);

const initialRecipes = [
  [
    '1',
    'Margherita Pizza',
    'Pizza with mozzarella cheese, tomato sauce, and fresh basil.',
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80',
    'Pizza',
    '45 mins',
    'Easy',
    2,
    JSON.stringify(['1 cup Flour', '200g Mozzarella', 'Fresh Tomatoes', 'Basil']),
    JSON.stringify([
      'Prepare the dough',
      'Add tomato sauce',
      'Bake at 220°C',
      'Garnish with fresh basil',
    ]),
  ],
  [
    '2',
    'Avocado Toast',
    'Crispy toast with mashed avocado.',
    'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=80',
    'Breakfast',
    '10 mins',
    'Easy',
    1,
    JSON.stringify(['Bread', 'Avocado', 'Cherry Tomatoes']),
    JSON.stringify([
      'Toast bread',
      'Mash avocado',
      'Spread avocado',
      'Top with tomatoes',
    ]),
  ],
  [
    '3',
    'Fresh Pancakes',
    'Fluffy pancakes topped with fresh berries.',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80',
    'Breakfast',
    '20 mins',
    'Easy',
    3,
    JSON.stringify(['1 cup Flour', '1 Egg', 'Milk', 'Berries']),
    JSON.stringify([
      'Whisk ingredients',
      'Melt butter',
      'Cook until bubbles form',
      'Serve hot',
    ]),
  ],
  [
    '4',
    'Salad Sara',
    'Healthy green salad with fresh vegetables.',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
    'Lunch',
    '15 mins',
    'Easy',
    2,
    JSON.stringify(['Cucumbers', 'Tomatoes', 'Salad Greens', 'Feta']),
    JSON.stringify([
      'Wash vegetables',
      'Chop vegetables',
      'Toss greens',
      'Drizzle with oil',
    ]),
  ],
  [
    '5',
    'Berry Smoothie',
    'Refreshing mix of wild berries.',
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
    'Desserts',
    '5 mins',
    'Easy',
    1,
    JSON.stringify(['Berries', 'Banana', 'Almond Milk']),
    JSON.stringify(['Peel banana', 'Put ingredients in blender', 'Pour milk', 'Blend']),
  ],
  [
    '6',
    'Cheesy Pasta',
    'Creamy pasta with three types of cheese.',
    'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
    'Dinner',
    '25 mins',
    'Easy',
    2,
    JSON.stringify(['Pasta', 'Parmesan', 'Cheddar', 'Heavy Cream']),
    JSON.stringify([
      'Boil pasta',
      'Warm heavy cream',
      'Stir in cheese',
      'Mix with pasta',
    ]),
  ],
];

initialRecipes.forEach((r) => insertRecipe.run(...r));

fastify.post('/register', async (request, reply) => {
  const { username, password } = request.body;
  try {
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    const info = stmt.run(username, password);
    return { id: info.lastInsertRowid, username };
  } catch (err) {
    reply.status(400).send({ error: 'Username already exists' });
  }
});

fastify.post('/login', async (request, reply) => {
  const { username, password } = request.body;
  const stmt = db.prepare(
    'SELECT id, username FROM users WHERE username = ? AND password = ?',
  );
  const user = stmt.get(username, password);
  if (user) {
    return user;
  }
  reply.status(401).send({ error: 'Invalid username or password' });
});

fastify.get('/recipes', async (request) => {
  const { userId } = request.query;
  const recipesStmt = db.prepare('SELECT * FROM recipes');
  const favoritesStmt = db.prepare('SELECT recipe_id FROM favorites WHERE user_id = ?');

  const recipes = recipesStmt.all();
  const favoriteIds = new Set(favoritesStmt.all(userId).map((f) => f.recipe_id));

  return recipes.map((r) => ({
    ...r,
    ingredients: JSON.parse(r.ingredients),
    instructions: JSON.parse(r.instructions),
    isLiked: favoriteIds.has(r.id),
  }));
});

fastify.post('/toggle-favorite', async (request) => {
  const { userId, recipeId } = request.body;
  const checkStmt = db.prepare(
    'SELECT 1 FROM favorites WHERE user_id = ? AND recipe_id = ?',
  );
  const exists = checkStmt.get(userId, recipeId);

  if (exists) {
    db.prepare('DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?').run(
      userId,
      recipeId,
    );
    return { isLiked: false };
  } else {
    db.prepare('INSERT INTO favorites (user_id, recipe_id) VALUES (?, ?)').run(
      userId,
      recipeId,
    );
    return { isLiked: true };
  }
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server running on http://localhost:3000');
});
