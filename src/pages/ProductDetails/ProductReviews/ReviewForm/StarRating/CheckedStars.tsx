/* eslint-disable jsx-a11y/label-has-associated-control */
import './StarRating.css';

type Props = {
  rating: number;
  email: string;
};

function CheckedStars({ rating, email }: Props) {
  return (
    <div className="star-rating-container">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ index } htmlFor={ `checked-rating-${email}-${index}` }>
            <input
              id={ `checked-rating-${email}-${index}` }
              type="radio"
              name="rating"
              value={ ratingValue }
              checked={ rating === ratingValue }
              readOnly
            />
            <i
              id="rating-storage"
              className={ ratingValue <= rating
                ? 'bi bi-star-fill star checked-star rating-star ' : 'bi bi-star star' }
            />
          </label>
        );
      })}
    </div>
  );
}

export default CheckedStars;
