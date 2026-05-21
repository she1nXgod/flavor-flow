import type { User } from '../types';

export const mockUser: User[] = [
  {
    username: 'admin',
    password: 'admin',
  },
];

if (typeof window !== 'undefined' && !localStorage.getItem('users_db')) {
  localStorage.setItem('users_db', JSON.stringify(mockUser));
}

export const getUsersFromStorage = (): User[] => {
  const localData = localStorage.getItem('users_db');
  return localData ? JSON.parse(localData) : mockUser;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLiked: boolean;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  difficulty: string;
  servings: number;
};

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Margherita Pizza',
    description: 'Pizza with mozzarella cheese, tomato sauce, and fresh basil.',
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80',
    isLiked: true,
    ingredients: [
      '1 cup Flour',
      '200g Mozzarella',
      'Fresh Tomatoes',
      'Basil',
      'Olive Oil',
      'Salt',
    ],
    instructions: [
      'Prepare the dough and let it rest for 30 minutes.',
      'Add tomato sauce and spread evenly.',
      'Bake at 220°C for 10 minutes. Add mozzarella and bake for another 5 minutes.',
      'Garnish with fresh basil.',
    ],
    cookingTime: '45 mins',
    difficulty: 'Easy',
    servings: 2,
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Crispy toast with mashed avocado, cherry tomatoes and seeds.',
    imageUrl:
      'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '2 slices of Bread',
      '1 Ripe Avocado',
      '5 Cherry Tomatoes',
      '1 tsp Sesame Seeds',
      'Salt & Pepper',
      '1 tsp Lemon Juice',
    ],
    instructions: [
      'Toast the slices of bread until golden brown and crispy.',
      'Mash the avocado in a bowl with lemon juice, salt, and pepper.',
      'Spread the mashed avocado evenly onto the toasted bread.',
      'Top with halved cherry tomatoes and sprinkle with sesame seeds.',
    ],
    cookingTime: '10 mins',
    difficulty: 'Easy',
    servings: 1,
  },
  {
    id: '3',
    title: 'Fresh Pancakes',
    description: 'Fluffy pancakes topped with fresh berries and maple syrup.',
    imageUrl:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '1 cup Flour',
      '1 Egg',
      '3/4 cup Milk',
      '2 tbsp Butter',
      '1 tbsp Sugar',
      'Fresh Berries',
      'Maple Syrup',
    ],
    instructions: [
      'Whisk flour, sugar, egg, and milk together in a bowl until smooth.',
      'Melt a small amount of butter in a skillet over medium heat.',
      'Pour batter onto the skillet and cook until bubbles form on top, then flip.',
      'Cook the other side until golden and serve hot with berries and syrup.',
    ],
    cookingTime: '20 mins',
    difficulty: 'Easy',
    servings: 3,
  },
  {
    id: '4',
    title: 'Salad Sara',
    description: 'Healthy green salad with fresh vegetables and olive oil.',
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '2 Cucumbers',
      '3 Tomatoes',
      '2 cups Mixed Salad Greens',
      '50g Feta Cheese',
      '2 tbsp Olive Oil',
      '1 tbsp Lemon Juice',
    ],
    instructions: [
      'Wash all the vegetables and salad greens thoroughly.',
      'Chop the cucumbers and tomatoes into bite-sized pieces.',
      'Toss greens, tomatoes, and cucumbers in a large salad bowl.',
      'Drizzle with olive oil, lemon juice, and top with crumbled feta cheese.',
    ],
    cookingTime: '15 mins',
    difficulty: 'Easy',
    servings: 2,
  },
  {
    id: '5',
    title: 'Berry Smoothie',
    description: 'Refreshing mix of wild berries, banana, and almond milk.',
    imageUrl:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '1 cup Frozen Wild Berries',
      '1 Ripe Banana',
      '1 cup Almond Milk',
      '1 tbsp Honey',
      '3-4 Ice Cubes',
    ],
    instructions: [
      'Peel the banana and break it into smaller chunks.',
      'Put the berries, banana chunks, and ice cubes into a blender.',
      'Pour in the almond milk and add a tablespoon of honey.',
      'Blend on high speed until completely smooth and creamy.',
    ],
    cookingTime: '5 mins',
    difficulty: 'Easy',
    servings: 1,
  },
  {
    id: '6',
    title: 'Cheesy Pasta',
    description: 'Creamy pasta with three types of cheese and herbs.',
    imageUrl:
      'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '200g Pasta',
      '50g Parmesan Cheese',
      '50g Cheddar Cheese',
      '50g Mozzarella Cheese',
      '1/2 cup Heavy Cream',
      '1 tsp Italian Herbs',
    ],
    instructions: [
      'Boil the pasta in salted water according to the package instructions.',
      'In a separate pan, gently warm the heavy cream over low heat.',
      'Gradually stir in all three types of shredded cheese until melted and smooth.',
      'Drain the pasta, mix it thoroughly with the cheese sauce, and add herbs.',
    ],
    cookingTime: '25 mins',
    difficulty: 'Easy',
    servings: 2,
  },
  {
    id: '7',
    title: 'Classic Burger',
    description:
      'Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce.',
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '1 Beef Patty',
      '1 Burger Bun',
      '1 slice Cheddar Cheese',
      '2 Leaves of Lettuce',
      '1 slice of Tomato',
      '2 tbsp Burger Sauce',
    ],
    instructions: [
      'Grill or pan-fry the beef patty for 4-5 minutes on each side.',
      'Place the cheddar cheese slice on top of the patty during the last minute to melt.',
      'Toast the burger bun faces on a hot skillet until lightly golden.',
      'Spread sauce on the buns, then assemble with lettuce, tomato, and the patty.',
    ],
    cookingTime: '20 mins',
    difficulty: 'Medium',
    servings: 1,
  },
  {
    id: '8',
    title: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake layered with chocolate ganache.',
    imageUrl:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
    ingredients: [
      '2 cups Flour',
      '1.5 cups Sugar',
      '3/4 cup Cocoa Powder',
      '2 Eggs',
      '1 cup Milk',
      '1/2 cup Vegetable Oil',
      '200g Chocolate Ganache',
    ],
    instructions: [
      'Preheat your oven to 180°C and lightly grease a cake pan.',
      'Mix all dry ingredients in a large bowl, then whisk in eggs, milk, and oil.',
      'Pour the smooth batter into the pan and bake for 30-35 minutes.',
      'Let the cake cool completely before coating it with chocolate ganache.',
    ],
    cookingTime: '50 mins',
    difficulty: 'Medium',
    servings: 8,
  },
];
