import { Card, Button } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import type { Recipe } from '../mocks/data';
import { useState } from 'react';

type RecipeItemProps = {
  recipe: Recipe;
  onView: () => void;
};

const RecipeItem = ({ recipe, onView }: RecipeItemProps) => {
  const [isLiked, setIsLiked] = useState(recipe.isLiked);

  const handleLikeClick = (): void => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className='glass-card h-100 border-0 p-2 text-start'>
      <div className='position-relative'>
        <Card.Img
          variant='top'
          src={recipe.imageUrl}
          className='rounded-3 object-fit-cover recipe-img'
        />

        <div
          className='position-absolute top-0 end-0 m-2 z-2 cursor-pointer'
          onClick={handleLikeClick}
        >
          {isLiked ? (
            <FaHeart size={20} color='#ff4d4f' />
          ) : (
            <FaRegHeart size={20} color='#ffffff' />
          )}
        </div>
      </div>

      <Card.Body className='d-flex flex-column px-2 py-3'>
        <Card.Title className='fw-bold fs-6 mb-1'>{recipe.title}</Card.Title>
        <Card.Text className='text-muted small'>{recipe.description}</Card.Text>

        <Button
          variant='outline-dark'
          className='rounded-pill mt-auto w-100'
          onClick={onView}
        >
          View Recipe
        </Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
