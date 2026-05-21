import { Row, Col, Button, Form } from 'react-bootstrap';
import { FaArrowLeft, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import type { Recipe } from '../mocks/data';
import { useState } from 'react';

type RecipeDetailsProps = {
  recipe: Recipe;
  onBack: () => void;
};

const RecipeDetails = ({ recipe, onBack }: RecipeDetailsProps) => {
  const [isLiked, setIsLiked] = useState(recipe.isLiked);

  return (
    <div className='p-3 w-100 h-100' style={{ overflowY: 'auto' }}>
      <div className='d-flex align-items-center mb-4 glass-card p-3'>
        <Button
          variant='outline-dark'
          className='rounded-pill d-flex align-items-center gap-2'
          onClick={onBack}
        >
          <FaArrowLeft /> Back to Dashboard
        </Button>
        <h3 className='mb-0 mx-auto fw-bold'>{recipe.title}</h3>
        <div style={{ width: '150px' }}></div>{' '}
      </div>

      <Row className='g-4'>
        <Col xs={12} lg={6}>
          <div className='glass-card p-3 mb-4'>
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className='w-100 rounded-3 object-fit-cover'
              style={{ height: '350px' }}
            />
          </div>

          <div className='glass-card p-3 px-5 d-flex justify-content-between align-items-center text-center'>
            <div>
              <div className='text-muted small'>Cooking time</div>
              <div className='fw-bold fs-5'>{recipe.cookingTime}</div>
            </div>
            <div>
              <div className='text-muted small'>Difficulty</div>
              <div className='fw-bold fs-5'>{recipe.difficulty}</div>
            </div>
            <div>
              <div className='text-muted small'>Servings</div>
              <div className='fw-bold fs-5'>{recipe.servings}</div>
            </div>
            <div className='cursor-pointer' onClick={() => setIsLiked(!isLiked)}>
              <div className='text-muted small mb-1'>Like</div>
              {isLiked ? <FaHeart size={24} color='#ff4d4f' /> : <FaRegHeart size={24} />}
            </div>
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div className='glass-card p-4 h-100 d-flex flex-column'>
            <h5 className='fw-bold mb-3'>Ingredients</h5>
            <Row className='mb-4'>
              {recipe.ingredients.map((item, index) => (
                <Col xs={6} key={index} className='mb-2'>
                  <Form.Check type='checkbox' label={item} id={`ingredient-${index}`} />
                </Col>
              ))}
            </Row>

            <h5 className='fw-bold mb-3'>Instructions</h5>
            <ol className='ps-3 mb-4 text-muted' style={{ lineHeight: '1.8' }}>
              {recipe.instructions.map((step, index) => (
                <li key={index} className='mb-2'>
                  {step}
                </li>
              ))}
            </ol>

            <Button
              variant='success'
              className='rounded-pill mt-auto py-2 d-flex justify-content-center align-items-center gap-2'
              style={{ backgroundColor: '#6b9071', border: 'none' }}
            >
              <FaStar /> Add to Favorites
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RecipeDetails;
