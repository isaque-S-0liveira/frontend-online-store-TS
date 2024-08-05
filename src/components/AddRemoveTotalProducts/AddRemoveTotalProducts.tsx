/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';
import { Product, ProductCart } from '../../types/ProductTypes';
import './AddRemoveTotalProducts.css';
import ValueFormatter from '../../services/ValueFormatter';
import useStorageUpdate from '../../hooks/useStorageUpdate';
import {
  dispatchStorageUpdate,
  getStoredProducts,
  setStoredProducts } from '../../utils/storage';

type AddRemoveTotalProductsProps = {
  productId?: Product['id'];
  inCart?: boolean;
  price: ProductCart['price'];
  totalValue?: ProductCart['totalPrice'];
  productQuantity?: ProductCart['quantity'];
  setQuantityAndValue?: React.Dispatch<React.SetStateAction<{
    totalValue: ProductCart['totalPrice'];
    quantity: ProductCart['quantity'];
  }>>;
};

function AddRemoveTotalProducts({
  totalValue = 0,
  productId,
  inCart = false,
  productQuantity = 1,
  price,
  setQuantityAndValue,
}: AddRemoveTotalProductsProps) {
  const [state, setState] = useState({
    totalProducts: productQuantity, amount: productQuantity * price });

  const updateState = (newTotalProducts: number, newAmount: number) => {
    setState({ totalProducts: newTotalProducts, amount: newAmount });
    if (setQuantityAndValue) {
      setQuantityAndValue({ quantity: newTotalProducts, totalValue: newAmount });
    }
  };

  // Foi feito com o intuito remover e adicionar na quantidade e valor total quando o produto já estiver no carrinho e o usuario interagr com os botões + ou -
  const updateLocalStorage = (quantity: number, totalPrice: number) => {
    const storedProducts = getStoredProducts();
    if (storedProducts) {
      const productStorage = storedProducts.find(
        (product) => product.id === productId,
      );
      if (productStorage) {
        productStorage.quantity = quantity;
        productStorage.totalPrice = totalPrice;
      }
      setStoredProducts(storedProducts);
    }
  };

  // Foi feito com o intuito acresentar na quantidade e valor total quando o produto já estiver no carrinho e o usuário adicionar mais produtos por meio do botão addCart

  const handleStorageUpdate = () => {
    const storedProducts = getStoredProducts();
    if (storedProducts) {
      const productStorage = storedProducts.find(
        (product) => product.id === productId,
      );
      if (productStorage) {
        updateState(productStorage.quantity, productStorage.totalPrice);
      }
    }
  };

  const handleAddProduct = () => {
    const newTotalProducts = state.totalProducts + 1;
    const newAmount = state.amount + price;
    updateState(newTotalProducts, newAmount);
    updateLocalStorage(newTotalProducts, newAmount);
  };

  const handleRemoveProduct = () => {
    if (state.totalProducts <= 1) return;
    const newTotalProducts = state.totalProducts - 1;
    const newAmount = state.amount - price;
    updateState(newTotalProducts, newAmount);
    updateLocalStorage(newTotalProducts, newAmount);
  };

  useEffect(() => {
    dispatchStorageUpdate();
  }, [state.totalProducts]);

  useStorageUpdate(handleStorageUpdate);

  return (
    <div id="add-remove-total-products-container">
      <div id="total-value-products-container">
        <span>R$</span>
        <span id="total-value-products">
          {ValueFormatter({ valor: inCart ? totalValue : state.amount })}
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
