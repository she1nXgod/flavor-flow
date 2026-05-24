import type { Recipe } from '../types';
import { Row, Col } from 'react-bootstrap';

type RecipeDetailsProps = {
  recipe: Recipe;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
};

const RecipeDetails = ({ recipe, onBack, onToggleFavorite }: RecipeDetailsProps) => {
  return (
    <div className='p-4 w-100 h-100' style={{ overflowY: 'auto' }}>
      <div className='d-flex align-items-center justify-content-between glass-card p-3 mb-4'>
        <button onClick={onBack} className='btn btn-secondary px-3 py-2'>
          ← Back to Dashboard
        </button>
        <h2 className='m-0 fw-bold text-dark'>{recipe.title}</h2>
        <div style={{ width: '170px' }}></div>
      </div>

      <Row className='g-4'>
        <Col xs={12} lg={6}>
          <div className='glass-card p-3 mb-3 text-center'>
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className='img-fluid w-100 rounded-4'
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>

          <div className='glass-card p-3 d-flex justify-content-around text-center'>
            <div>
              <small className='text-muted'>Cooking time</small>
              <br />
              <strong>{recipe.cookingTime}</strong>
            </div>
            <div>
              <small className='text-muted'>Difficulty</small>
              <br />
              <strong>{recipe.difficulty}</strong>
            </div>
            <div>
              <small className='text-muted'>Servings</small>
              <br />
              <strong>{recipe.servings}</strong>
            </div>
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div className='glass-card p-4 d-flex flex-column h-100 justify-content-between'>
            <div>
              <h4 className='fw-bold mb-3 text-dark'>Ingredients</h4>
              <ul className='mb-4 text-dark'>
                {recipe.ingredients?.map((ing, index) => (
                  <li key={index} className='mb-1'>
                    {ing}
                  </li>
                ))}
              </ul>

              <h4 className='fw-bold mb-3 text-dark'>Instructions</h4>
              <ol className='text-dark ps-3 mb-4'>
                {recipe.instructions?.map((step, index) => (
                  <li key={index} className='mb-2'>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <button
              className={`btn w-100 fw-bold p-3 ${recipe.isLiked ? 'btn-success' : 'btn-outline-success'}`}
              style={{ borderRadius: '20px' }}
              onClick={() => onToggleFavorite(recipe.id)}
            >
              <span>★</span>{' '}
              {recipe.isLiked ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RecipeDetails;
