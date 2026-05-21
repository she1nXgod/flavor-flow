import { Row, Col } from 'react-bootstrap';
import RecipeItem from './RecipeItem';
import { mockRecipes } from '../mocks/data';

const RecipesList = () => {
  return (
    <div className='h-100' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <Row className='g-4'>
        {mockRecipes.map((recipe) => (
          <Col key={recipe.id} xs={12} sm={6} md={6} lg={4} xl={3}>
            <RecipeItem recipe={recipe} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecipesList;
