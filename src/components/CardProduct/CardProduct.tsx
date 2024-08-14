/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { ProductCart } from '../../types/ProductTypes';
import { removeStoredProduct } from '../../utils/storage';
import AddRemoveTotalProducts from '../AddRemoveTotalProducts/AddRemoveTotalProducts';
import './CardProduct.css';

function CardProduct({ product }: { product: ProductCart }) {
  return (
    <li
      id="product-cart-card"
      key={ product.id }
    >
      <span id="product-cart-title">{ product.title }</span>
      <div id="btnClose-img-buttons-container">
        <button
          id="btn-close-product-card-item"
          type="button"
          className="btn-close"
          aria-label="remove-product"
          onClick={ () => removeStoredProduct(product.id) }
        />
        <Link
          to={ `/product-details/${product.id}` }
          state={ { productStock: { available_quantity: product.productStock } } }
          id="product-cart-link"
          className="text-decoration-none"
        >
          <img id="product-cart-img" src={ product.thumbnail } alt={ product.title } />
        </Link>
        <AddRemoveTotalProducts
          inCart
          productId={ product.id }
          totalValue={ product.totalPrice }
          productQuantity={ product.quantity }
          price={ product.price }
          productStock={ product.productStock }
        />
      </div>
    </li>
  );
}

export default CardProduct;
