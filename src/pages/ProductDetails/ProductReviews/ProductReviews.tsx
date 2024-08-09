import ReviewForm from './ReviewForm/ReviewForm';
import './ProductReviews.css';
import RenderReviews from './RenderReviews/RenderReviews';

function ProductReviews() {
  return (
    <div id="product-reviews-main">
      <h1 className="text-center">Avaliações</h1>
      <div id="container-form-layout">
        <ReviewForm />
      </div>
      <div id="container-reviews-layout">
        <RenderReviews />
      </div>
    </div>
  );
}

export default ProductReviews;
