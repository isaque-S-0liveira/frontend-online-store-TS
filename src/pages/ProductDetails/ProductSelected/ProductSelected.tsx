import { Product } from '../../../types/ProductTypes';
import ProductPictures from './ProductPictures';
import './ProductSelected.css';

function ProductSelected({ productDetail }: { productDetail: Product }) {
  if (!productDetail || !productDetail.pictures) {
    return null;
  }
  return (
    <div id="product-selected">
      <div id="product-name-header">
        <span>{productDetail.title}</span>
      </div>
      <ProductPictures productDetail={ productDetail } />
    </div>
  );
}

export default ProductSelected;
