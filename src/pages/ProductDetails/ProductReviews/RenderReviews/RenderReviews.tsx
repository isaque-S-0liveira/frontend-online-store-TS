import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from '../../../../types/ReviewTypes';
import useStorageUpdate from '../../../../hooks/useStorageUpdate';
import { getStoredReviews } from '../../../../utils/storage';
import CheckedStars from '../ReviewForm/StarRating/CheckedStars';
import CommentExamples from '../../../../data/CommentExamples';
import './RenderReviews.css';

function RenderReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { productId } = useParams();

  const commentsByProduct = () => {
    const reviewsStorage = getStoredReviews();
    const comments = reviewsStorage.filter((review) => review.productId === productId);
    if (comments.length === 0) {
      setReviews(CommentExamples);
      return;
    }
    setReviews(comments);
  };

  useStorageUpdate(commentsByProduct);

  useEffect(() => {
    commentsByProduct();
  }, []);

  return (
    <div id="reviews-main">
      { reviews.map((review) => (
        <div key={ review.email } className="review-container">
          <div className="email-and-stars-container">
            <p className="review-email">{ review.email }</p>
            <CheckedStars email={ review.email } rating={ review.rating } />
          </div>
          <p className="description">{ review.description }</p>
        </div>
      )) }
    </div>
  );
}

export default RenderReviews;
