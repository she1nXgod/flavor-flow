import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RecipesList from '../components/RecipesList';
import RecipeDetails from '../components/RecipeDetails';
import { Row, Col } from 'react-bootstrap';
import type { Recipe, User } from '../types';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All Recipes');

  const currentUserStr = localStorage.getItem('currentUser');
  const currentUser: User | null = currentUserStr ? JSON.parse(currentUserStr) : null;

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const fetchRecipes = async () => {
      const response = await fetch(`/api/recipes?userId=${currentUser.id}`);
      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      }
    };

    fetchRecipes();
  }, [currentUser, navigate]);

  const handleToggleFavorite = async (id: string) => {
    if (!currentUser) return;

    const response = await fetch('/api/toggle-favorite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: currentUser.id, recipeId: id }),
    });

    if (response.ok) {
      const { isLiked } = await response.json();

      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => (recipe.id === id ? { ...recipe, isLiked } : recipe)),
      );

      if (selectedRecipe && selectedRecipe.id === id) {
        setSelectedRecipe((prev) => (prev ? { ...prev, isLiked } : null));
      }
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    if (activeCategory === 'Favorites') return recipe.isLiked;
    if (activeCategory === 'All Recipes') return true;
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
