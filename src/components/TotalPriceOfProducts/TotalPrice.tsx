import ValueFormatter from '../../services/ValueFormatter';
import { ProductCart } from '../../types/ProductTypes';
import './TotalPrice.css';

function TotalPrice({ products }: { products: ProductCart[] }) {
  const total = products.reduce((acc, product) => acc + product.totalPrice, 0);

  return (
    <span id="total-price-all-products">
      Valor total da compra: R$
      {' '}
      {ValueFormatter({ valor: total })}
    </span>
  );
}

export default TotalPrice;
