import { useEffect } from 'react';
import { Product } from '../../../types/ProductTypes';
import ProductPictures from './ProductPictures';
import './ProductSelected.css';

function ProductSelected({ productDetail }: { productDetail: Product }) {
  useEffect(() => {
    console.log(productDetail.shipping.free_shipping);
  }, []);
  if (!productDetail || !productDetail.pictures) {
    return null;
  }

  return (
    <div id="product-selected">
      <div id="product-header">
        <div id="product-name-header">
          <span id="product-name-text">{productDetail.title}</span>
        </div>
        {productDetail.shipping.free_shipping && (
          <span id="free-shipping">Frete Grátis</span>
        )}
      </div>
      <ProductPictures productDetail={ productDetail } />
    </div>
  );
}

export default ProductSelected;
