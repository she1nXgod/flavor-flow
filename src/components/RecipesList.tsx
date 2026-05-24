import { Row, Col } from 'react-bootstrap';
import RecipeItem from './RecipeItem';
import type { Recipe } from '../types/index';

type RecipesListProps = {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
};

const RecipesList = ({ recipes, onRecipeSelect }: RecipesListProps) => {
  return (
    <div className='px-3 h-100' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      {recipes.length === 0 ? (
        <div className='text-center mt-5 text-muted'>
          <h4>No recipes found in this category</h4>
        </div>
      ) : (
        <Row className='g-4'>
          {recipes.map((recipe) => (
            <Col key={recipe.id} xs={12} sm={6} md={6} lg={4} xl={3}>
              <RecipeItem recipe={recipe} onView={() => onRecipeSelect(recipe)} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default RecipesList;
