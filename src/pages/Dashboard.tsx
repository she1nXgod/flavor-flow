import { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RecipesList from '../components/RecipesList';
import RecipeDetails from '../components/RecipeDetails';
import { Row, Col } from 'react-bootstrap';
import type { Recipe } from '../mocks/data';
import { mockRecipes } from '../mocks/data';

const Dashboard = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All Recipes');

  const handleToggleFavorite = (id: string) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isLiked: !recipe.isLiked } : recipe,
      ),
    );

    if (selectedRecipe && selectedRecipe.id === id) {
      setSelectedRecipe((prev) => (prev ? { ...prev, isLiked: !prev.isLiked } : null));
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (activeCategory === 'Favorites') {
      return recipe.isLiked;
    }
    if (activeCategory === 'All Recipes') {
      return true;
    }
    return recipe.category === activeCategory;
  });

  return (
    <Layout background='dashboard-bg'>
      <Header />

      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <Row className='d-flex h-100 w-100 m-0'>
          <Col xs={12} md={2} className='glass-sidebar p-3'>
            <Sidebar
              activeCategory={activeCategory}
              onCategorySelect={setActiveCategory}
            />
          </Col>

          <Col xs={12} md={10} className='p-0'>
            <RecipesList recipes={filteredRecipes} onRecipeSelect={setSelectedRecipe} />
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Dashboard;
