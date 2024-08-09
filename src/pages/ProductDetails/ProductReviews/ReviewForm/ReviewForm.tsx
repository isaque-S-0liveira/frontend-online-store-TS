import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating/StarRating';
import './ReviewForm.css';
import { Review } from '../../../../types/ReviewTypes';
import { getStoredReviews, setStoredReviews } from '../../../../utils/storage';

function ReviewForm() {
  const { productId } = useParams();
  const emptyReview = {
    productId: productId as string,
    email: '',
    rating: 0,
    description: '',
  };
  const [review, setReview] = useState<Review>(emptyReview);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let reviews = [] as Review[];
    const reviewsStorage = getStoredReviews();
    if (reviewsStorage) {
      reviews = reviewsStorage;
    }
    if (reviews.length > 0) {
      const { email } = review;
      const reviewStorage = reviews.find((
        r: Review,
      ) => r.email === email);
      if (reviewStorage) {
        reviewStorage.rating = review.rating;
        reviewStorage.description = review.description;
        setStoredReviews(reviews);
        setReview(emptyReview);
        return;
      }
    }
    reviews.push(review);
    setStoredReviews(reviews);

    setReview(emptyReview);
  };
  return (
    <form onSubmit={ handleClick } id="review-form-container">
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <input
            className="form-control"
            type="email"
            name="email"
            value={ review.email }
            required
            placeholder="E-mail"
            onChange={ handleChange }
          />

        </div>
        <div className="col-6">
          <StarRating review={ review } setReview={ setReview } />
        </div>
      </div>
      <div className="col-12">
        <textarea
          className="form-control"
          placeholder="Descrição(opcional)"
          name="description"
          rows={ 7 }
          value={ review.description }
          onChange={ handleChange }
        />
      </div>
      <div className="mt-4 col-12 d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="primary-button"
        >
          Avaliar
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
