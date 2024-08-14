/* eslint-disable sonarjs/no-duplicate-string */
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductCart } from '../../../types/ProductTypes';
import './ShoppingCartOffcanvas.css';
import useStorageUpdate from '../../../hooks/useStorageUpdate';
import { getStoredProducts } from '../../../utils/storage';
import ValueFormatter from '../../../services/ValueFormatter';
import CardProduct from '../../CardProduct/CardProduct';
import TotalPrice from '../../TotalPriceOfProducts/TotalPrice';
import ShoppingCartButton from './ShoppingCartButton/ShoppingCartButton';

function ShoppingCartOffcanvas() {
  const [products, setProducts] = useState<ProductCart[]>([]);
  const location = useLocation();

  const totalValueAllProducts = () => {
    const total = products.reduce((acc, product) => acc + product.totalPrice, 0);
    return ValueFormatter({ valor: total });
  };

  useEffect(() => {
    totalValueAllProducts();
  }, [products]);

  useEffect(() => {
    // fecha o offcanvas quando muda de rota
    const offcanvasElement = document.getElementById('offcanvasShoppingCart');
    if (offcanvasElement) {
      const offcanvasInstance = (window as any).bootstrap.Offcanvas
        .getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  }, [location]);

  useEffect(() => {
    const adjustOffcanvasHeight = () => {
      const offcanvasElement = document.getElementById('offcanvasShoppingCart');
      if (offcanvasElement) {
        const viewportHeight = window.innerHeight;
        offcanvasElement.style.height = `${viewportHeight - 148}px`;
      }
    };

    adjustOffcanvasHeight();

    // Ajusta a altura quando a janela for redimensionada
    window.addEventListener('resize', adjustOffcanvasHeight);

    return () => {
      window.removeEventListener('resize', adjustOffcanvasHeight);
    };
  }, []);

  useStorageUpdate(() => { setProducts(getStoredProducts()); });

  return (
    <div id="shopping-cart-offcanvas">
      <ShoppingCartButton products={ products } />

      <div
        className="offcanvas offcanvas-end offcanvas-custom"
        data-bs-backdrop="false"
        data-bs-scroll="true"
        tabIndex={ -1 }
        id="offcanvasShoppingCart"
        aria-labelledby="offcanvasShoppingCartLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          { products.length === 0 && (<h2 id="empty-cart">Seu carrinho está vazio</h2>) }
          <ul className="list-group">
            { products.map((product) => (
              <CardProduct key={ product.id } product={ product } />
            )) }
          </ul>
        </div>
        <div className={ products.length === 0 ? 'd-none' : 'offcanvas-footer' }>
          <TotalPrice products={ products } />
          <Link to="/checkout">
            <button type="button" className="primary-button">
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartOffcanvas;
