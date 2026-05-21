import { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import RecipesList from '../components/RecipesList';
import RecipeDetails from '../components/RecipeDetails';
import { Row, Col } from 'react-bootstrap';
import type { Recipe } from '../mocks/data';

const Dashboard = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <Layout background='dashboard-bg'>
      <Header />

      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <Row className='d-flex h-100 w-100 m-0'>
          <Col xs={12} md={2} className='glass-sidebar p-3'>
            <Sidebar />
          </Col>

          <Col xs={12} md={10} className='p-0'>
            <RecipesList onRecipeSelect={setSelectedRecipe} />
          </Col>
        </Row>
      )}
    </Layout>
  );
};

export default Dashboard;
