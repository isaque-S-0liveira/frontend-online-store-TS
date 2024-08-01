import { useState } from 'react';
import { Product } from '../../types/ProductTypes';
import './AddRemoveTotalProducts.css';
import ValueFormatter from '../../services/ValueFormatter';

type AddRemoveTotalProductsProps = {
  price: Product['price'];
  setQuantityAndValue: React.Dispatch<React.SetStateAction<{
    quantity: number;
    value: number;
  }>>;
};

function AddRemoveTotalProducts({
  price,
  setQuantityAndValue }: AddRemoveTotalProductsProps) {
  const [state, setState] = useState({ totalProducts: 1, amount: price });

  const updateState = (newTotalProducts: number, newAmount: number) => {
    setState({ totalProducts: newTotalProducts, amount: newAmount });
    setQuantityAndValue({ quantity: newTotalProducts, value: newAmount });
  };

  const handleAddProduct = () => {
    const newTotalProducts = state.totalProducts + 1;
    const newAmount = state.amount + price;
    updateState(newTotalProducts, newAmount);
  };

  const handleRemoveProduct = () => {
    if (state.totalProducts <= 1) return;

    const newTotalProducts = state.totalProducts - 1;
    const newAmount = state.amount - price;
    updateState(newTotalProducts, newAmount);
  };

  return (
    <div id="add-remove-total-products-container">
      <div id="total-value-products-container">
        <span>R$</span>
        <span id="total-value-products">
          {ValueFormatter({ valor: state.amount })}
        </span>
      </div>
      <div id="remove-add-buttons-container">
        <button
          className="add-remove-product-button"
          onClick={ handleRemoveProduct }
        >
          -
        </button>
        <span id="quantity-of-products">{state.totalProducts}</span>
        <button
          className="add-remove-product-button"
          onClick={ handleAddProduct }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default AddRemoveTotalProducts;
