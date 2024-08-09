/* eslint-disable sonarjs/no-duplicate-string */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ProductCart } from '../../../types/ProductTypes';
import './ShoppingCartOffcanvas.css';
import useStorageUpdate from '../../../hooks/useStorageUpdate';
import { getStoredProducts } from '../../../utils/storage';
import ValueFormatter from '../../../services/ValueFormatter';
import CardProduct from './CardProduct/CardProduct';
import TotalPrice from '../../TotalPriceOfProducts/TotalPrice';

function ShoppingCartOffcanvas() {
  const [products, setProducts] = useState<ProductCart[]>([]);
  const { productId } = useParams();

  const totalValueAllProducts = () => {
    const total = products.reduce((acc, product) => acc + product.totalPrice, 0);
    return ValueFormatter({ valor: total });
  };

  useEffect(() => {
    totalValueAllProducts();
  }, [products]);

  useEffect(() => {
    // fecha o offcanvas ao ser redirecionado para a página de detalhes do produto
    const offcanvasElement = document.getElementById('offcanvasShoppingCart');
    if (offcanvasElement) {
      const offcanvasInstance = (window as any).bootstrap.Offcanvas
        .getInstance(offcanvasElement);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  }, [productId]);

  useStorageUpdate(() => { setProducts(getStoredProducts()); });

  return (
    <div id="shopping-cart-offcanvas">
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
          className={ `badge rounded-pill ${products.length === 0 && 'visually-hidden'}` }
        >
          { products.length > 0 && products.length <= 99 ? products.length : '99+' }
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>

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
          <button type="button" className="primary-button">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartOffcanvas;
