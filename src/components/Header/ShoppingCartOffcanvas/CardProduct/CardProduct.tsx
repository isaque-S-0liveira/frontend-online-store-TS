/* eslint-disable max-len */
import { ProductCart } from '../../../../types/ProductTypes';
import { removeStoredProduct } from '../../../../utils/storage';
import AddRemoveTotalProducts from '../../../AddRemoveTotalProducts/AddRemoveTotalProducts';
import './CardProduct.css';

function CardProduct({ product }: { product: ProductCart }) {
  return (
    <li
      id="product-cart-card"
      key={ product.id }
      className="list-group-item"
    >
      <span className="" id="product-cart-title">{ product.title }</span>
      <div id="btnClose-img-buttons-container">
        <button
          id="btn-close-product-card-item"
          type="button"
          className="btn-close"
          aria-label="remove-product"
          onClick={ () => removeStoredProduct(product.id) }
        />
        <img id="product-cart-img" src={ product.thumbnail } alt={ product.title } />
        <AddRemoveTotalProducts
          inCart
          productId={ product.id }
          totalValue={ product.totalPrice }
          productQuantity={ product.quantity }
          price={ product.price }
        />
      </div>
    </li>
  );
}

export default CardProduct;
