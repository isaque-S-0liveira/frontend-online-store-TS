import { Product } from '../../../types/ProductTypes';

function ProductPictures({ productDetail }: { productDetail: Product }) {
  if (!productDetail || !productDetail.pictures) {
    return null;
  }

  const hasMultiplePictures = productDetail.pictures.length > 1;

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {productDetail.pictures.map((_, index) => (
          <button
            key={ index }
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={ index }
            className={ index === 0 ? 'active' : '' }
            aria-current={ index === 0 ? 'true' : 'false' }
            aria-label={ `Slide ${index + 1}` }
          />
        ))}
      </div>
      <div className="carousel-inner">
        {productDetail.pictures.map((picture, index) => (
          <div
            key={ picture.id }
            data-bs-interval="4000"
            className={ `carousel-item ${index === 0 ? 'active' : ''}` }
          >
            <img
              src={ picture.url }
              alt={ productDetail.title }
              className="d-block w-100" /* Adicione a classe d-block para garantir que a imagem seja exibida como um bloco */
            />
          </div>
        ))}
      </div>
      {hasMultiplePictures && (
        <>
          <button
            className="carousel-control-prev custom-control"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next custom-control"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default ProductPictures;
