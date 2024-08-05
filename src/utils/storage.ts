import { ProductCart } from '../types/ProductTypes';

const PRODUCTS_KEY = 'products';

export const getStoredProducts = (): ProductCart[] => {
  const storedProducts = localStorage.getItem(PRODUCTS_KEY);
  return storedProducts ? JSON.parse(storedProducts) : [] as ProductCart[];
};

export const setStoredProducts = (products: ProductCart[]): void => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  dispatchStorageUpdate();
};

export const removeStoredProduct = (productId: ProductCart['id']): void => {
  const storedProducts = getStoredProducts();
  const newProducts = storedProducts.filter((product) => product.id !== productId);
  setStoredProducts(newProducts);
  dispatchStorageUpdate();
};

export const dispatchStorageUpdate = () => {
  window.dispatchEvent(new Event('storage-update'));
};
