import { ProductCart } from '../types/ProductTypes';
import { Review } from '../types/ReviewTypes';

const PRODUCTS_KEY = 'products';
const REVIEWS_KEY = 'reviews';

export const getStoredProducts = (): ProductCart[] => {
  const storedProducts = localStorage.getItem(PRODUCTS_KEY);
  return storedProducts ? JSON.parse(storedProducts) : [] as ProductCart[];
};

export const getStoredReviews = (): Review[] => {
  const storedReviews = localStorage.getItem(REVIEWS_KEY);
  return storedReviews ? JSON.parse(storedReviews) : [] as Review[];
};

export const setStoredProducts = (products: ProductCart[]): void => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  dispatchStorageUpdate();
};

export const setStoredReviews = (reviews: Review[]): void => {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
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
