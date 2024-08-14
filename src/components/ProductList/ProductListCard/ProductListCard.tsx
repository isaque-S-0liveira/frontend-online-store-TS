/* eslint-disable no-return-assign */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useStorageUpdate from '../../../hooks/useStorageUpdate';
import { Product, ProductCart } from '../../../types/ProductTypes';
import { getStoredProducts } from '../../../utils/storage';
import AddCartButton from '../../AddCartButton/AddCartButton';
import ValueFormatter from '../../../services/ValueFormatter';
import './ProductListCard.css';

function ProductListCard(product: Product) {
  const [productsInCart, setProductsInCart] = useState<ProductCart[]>([]);
  const { id, title, thumbnail, price, available_quantity } = product;

  useStorageUpdate(() => setProductsInCart(getStoredProducts()));
  return (
    <div className="product-card">
      {productsInCart.some((productInCart) => (
        productInCart.id === id
      )) && (
        <div id="productInCart-icon-container">
          <i className="bi bi-cart-check-fill" />
        </div>
      )}
      <Link
        className="product-datails-link"
        to={ `/product-details/${id}` }
        state={ { productStock: { available_quantity } } }
      >
        <img src={ thumbnail } alt={ title } />
        <p className="product-name">{title}</p>
        <p className="product-price">
          R$
          {' '}
          {ValueFormatter({ valor: price })}
        </p>
      </Link>
      <AddCartButton
        id={ id }
        title={ title }
        thumbnail={ thumbnail }
        price={ price }
        totalPrice={ price }
        productStock={ available_quantity }
        quantity={ 1 }
      />
    </div>
  );
}

export default ProductListCard;
