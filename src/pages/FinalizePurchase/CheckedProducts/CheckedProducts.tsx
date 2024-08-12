import { useState } from 'react';
import { getStoredProducts } from '../../../utils/storage';
import useStorageUpdate from '../../../hooks/useStorageUpdate';
import CardProduct from '../../../components/CardProduct/CardProduct';
import { ProductCart } from '../../../types/ProductTypes';
import './CheckedProducts.css';
import TotalPrice from '../../../components/TotalPriceOfProducts/TotalPrice';

function CheckedProducts() {
  const [products, setProducts] = useState<ProductCart[]>([]);
  useStorageUpdate(() => setProducts(getStoredProducts()));
  return (
    <div id="checked-products-main">
      <div className="checkedProducts-finalizePurchase-header">
        <h2>Revise seus Produtos</h2>
      </div>
      <ul id="checked-products-body">
        {products.map((product) => (
          <CardProduct key={ product.id } product={ product } />
        ))}
      </ul>
      <div id="checked-products-footer">
        <TotalPrice products={ products } />
      </div>
    </div>
  );
}

export default CheckedProducts;
