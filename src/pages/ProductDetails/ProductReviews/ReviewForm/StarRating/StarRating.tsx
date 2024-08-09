/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import './StarRating.css';
import { Review } from '../../../../../types/ReviewTypes';
import useStorageUpdate from '../../../../../hooks/useStorageUpdate';

type StarRatingProps = {
  review: Review;
  setReview: React.Dispatch<React.SetStateAction<Review>>;
};

function StarRating({ review, setReview }: StarRatingProps) {
  const [rating, setRating] = useState(review.rating);
  const [hover, setHover] = useState(0);

  useStorageUpdate(() => {
    setRating(0);
    setHover(0);
  });

  const handleMouseEnter = (ratingValue: number) => {
    setHover(ratingValue);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRating(Number(value));
    setReview({ ...review, rating: Number(value) });
  };

  return (
    <div className="star-rating-container">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ index } htmlFor={ `rating-${ratingValue}` }>
            <input
              id={ `rating-${ratingValue}` }
              type="radio"
              name="rating"
              value={ ratingValue }
              checked={ rating === ratingValue }
              onChange={ (e) => handleClick(e) }
            />
            <i
              onMouseEnter={ () => handleMouseEnter(ratingValue) }
              onMouseLeave={ handleMouseLeave }
              className={ ratingValue <= (hover || rating)
                ? 'bi bi-star-fill star rating-star' : 'bi bi-star' }
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
