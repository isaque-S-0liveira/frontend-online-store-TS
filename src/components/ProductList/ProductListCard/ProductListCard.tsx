/* eslint-disable no-return-assign */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStorageUpdate from '../../../hooks/useStorageUpdate';
import { Product, ProductCart } from '../../../types/ProductTypes';
import { getStoredProducts } from '../../../utils/storage';
import AddCartButton from '../../AddCartButton/AddCartButton';
import ValueFormatter from '../../../services/ValueFormatter';
import './ProductListCard.css';

function ProductListCard(product: Product) {
  const [productsInCart, setProductsInCart] = useState<ProductCart[]>([]);
  const { id, title, thumbnail, price, available_quantity, shipping } = product;

  useStorageUpdate(() => setProductsInCart(getStoredProducts()));
  return (
    <div className="product-card">
      {productsInCart.some((productInCart) => (
        productInCart.id === id
      )) && (
        <div className="productInCart-icon-container">
          <i className="bi bi-cart-check-fill" />
        </div>
      )}
      {shipping.free_shipping && (
        <div className="free-shipping-container d-sm-none d-md-block">
          <div className="free-shipping-text-container">
            <p className="product-shipping-text">Frete Grátis!</p>
          </div>
        </div>
      )}
      <Link
        className="product-datails-link"
        to={ `/product-details/${id}` }
        state={ { productStock: { available_quantity } } }
      >
        <img src={ thumbnail } alt={ title } />
        <p className="product-name">{title}</p>
        <p className="product-shipping-text d-none d-sm-block d-md-none">
          {shipping.free_shipping && 'Frete Grátis'}
        </p>
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
