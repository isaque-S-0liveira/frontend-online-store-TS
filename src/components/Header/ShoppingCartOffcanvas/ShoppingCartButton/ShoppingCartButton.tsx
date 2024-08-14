import { useState, useEffect } from 'react';
import { ProductCart } from '../../../../types/ProductTypes';
import './ShoppingCartButton.css';

function ShoppingCartButton({ products }: { products: ProductCart[] }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setIsAnimating(true);
      const timeout = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [products.length]);

  return (
    <button
      id="shopping-cart-button"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasShoppingCart"
      aria-controls="offcanvasShoppingCart"
      aria-label="Shopping Cart"
    >
      <i className="bi bi-cart-fill" />
      <span
        id="shopping-cart-badge"
        className={ `badge rounded-pill 
            ${isAnimating ? 'animate-badge' : ''} 
            ${products.length === 0 && 'visually-hidden'}` }
      >
        { products.length > 0 && products.length <= 99 ? products.length : '99+' }
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  );
}

export default ShoppingCartButton;
