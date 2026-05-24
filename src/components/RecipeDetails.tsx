import type { Recipe } from '../mocks/data';
import { Row, Col } from 'react-bootstrap';

type RecipeDetailsProps = {
  recipe: Recipe;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
};

const RecipeDetails = ({ recipe, onBack, onToggleFavorite }: RecipeDetailsProps) => {
  return (
    <div className='p-4 w-100 h-100' style={{ overflowY: 'auto' }}>
      <div className='d-flex align-items-center justify-content-between glass-card p-3 mb-4 text-center position-relative'>
        <button
          onClick={onBack}
          className='btn text-white px-3 py-2'
          style={{ backgroundColor: '#5c636a', borderRadius: '10px' }}
        >
          ← Back to Dashboard
        </button>
        <h2 className='m-0 mx-auto fw-bold text-dark'>{recipe.title}</h2>
        <div style={{ width: '160px' }} className='d-none d-md-block'></div>
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

          <div className='glass-card p-3 d-flex justify-content-around align-items-center text-center'>
            <div>
              <small className='text-muted d-block'>Cooking time</small>
              <strong className='fs-5'>{recipe.cookingTime}</strong>
            </div>
            <div
              style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', height: '40px' }}
            ></div>
            <div>
              <small className='text-muted d-block'>Difficulty</small>
              <strong className='fs-5'>{recipe.difficulty}</strong>
            </div>
            <div
              style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', height: '40px' }}
            ></div>
            <div>
              <small className='text-muted d-block'>Servings</small>
              <strong className='fs-5'>{recipe.servings}</strong>
            </div>
            <div
              style={{ borderLeft: '1px solid rgba(0,0,0,0.1)', height: '40px' }}
            ></div>
            <div className='d-flex align-items-center gap-2'>
              <span className='text-danger fs-4'>❤️</span>
              <div className='text-start'>
                <small className='text-muted d-block'>Like</small>
                <strong>1.2k likes</strong>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div className='glass-card p-4 d-flex flex-column h-100 justify-content-between'>
            <div>
              <h4 className='fw-bold mb-3 text-dark'>Ingredients</h4>
              <Row className='mb-4'>
                {recipe.ingredients?.map((ing, index) => (
                  <Col
                    xs={6}
                    key={index}
                    className='mb-2 d-flex align-items-center gap-2'
                  >
                    <input
                      type='checkbox'
                      className='form-check-input'
                      id={`ing-${index}`}
                    />
                    <label
                      className='form-check-label text-dark'
                      htmlFor={`ing-${index}`}
                    >
                      {ing}
                    </label>
                  </Col>
                ))}
              </Row>

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
              className={`btn w-100 d-flex justify-content-center align-items-center gap-2 fw-bold custom-fav-btn ${recipe.isLiked ? 'is-fav' : ''}`}
              style={{
                backgroundColor: recipe.isLiked ? '#4A6B53' : '#769781',
                color: '#fff',
                borderRadius: '20px',
                padding: '12px',
              }}
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
