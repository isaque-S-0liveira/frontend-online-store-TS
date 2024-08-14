import { ProductCart } from '../../types/ProductTypes';
import {
  getStoredProducts,
  setStoredProducts } from '../../utils/storage';
import './AddCartButton.css';

function AddCartButton(product: ProductCart) {
  const handleClick = () => {
    let products = [] as ProductCart[];

    const storedProducts = getStoredProducts();

    if (storedProducts) {
      products = storedProducts;
    }

    if (products.length > 0) {
      const { id, quantity } = product;
      const productStorage = products.find((
        p: ProductCart,
      ) => p.id === id);

      if (productStorage) {
        productStorage.quantity += quantity;
        productStorage.totalPrice = productStorage.quantity * productStorage.price;
        if (productStorage.quantity + quantity > productStorage.productStock) {
          productStorage.quantity = productStorage.productStock;
        }
        setStoredProducts(products);
        return;
      }
    }

    products.push(product);

    setStoredProducts(products);
  };
  return (
    <button
      id="add-cart-button"
      className="primary-button"
      onClick={ handleClick }
      type="button"
    >
      Adicionar ao carrinho
    </button>
  );
}

export default AddCartButton;
