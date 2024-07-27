import { Category, Product } from '../types/ProductTypes';

export async function getCategories(): Promise<Category[]> {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return response.json();
}

export async function getProductsFromCategoryAndQuery(
  categoryId: string,
  query: string,
): Promise<Product[]> {
  let url = 'https://api.mercadolibre.com/sites/MLB/search?';

  if (categoryId && query) {
    url += `category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    url += `category=${categoryId}`;
  } else if (query) {
    url += `q=${query}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.results as Product[];
}
