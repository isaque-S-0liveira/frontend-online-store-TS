import { useContext, useEffect, useState } from 'react';
import SearchTermContext from '../../context/SearchProductsContext';
import './ProductList.css';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { Product } from '../../types/ProductTypes';
import Loading from '../Loading/Loading';
import ProductListCard from './ProductListCard/ProductListCard';
import SelectOrderProducts from './SelectOrderProducts/SelectOrderProducts';

function ProductList() {
  const { searchTermCT, searchCategoryCT } = useContext(SearchTermContext);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [originalProducts, setOriginalProducts] = useState<Product[]>([]);
  const [productsStatus, setProductStatus] = useState(
    'Você ainda não realizou nenhuma busca',
  );
  const [productStatusAUX, setProductStatusAUX] = useState(
    'Digite algum termo de pesquisa ou escolha uma categoria',
  );
  const [orderProducts, setOrderProducts] = useState('select');

  useEffect(() => {
    const sortProducts = (order: string) => {
      const sortedProducts = [...products];
      if (order === 'select') {
        setProducts(originalProducts);
        return;
      }
      setProducts(() => {
        if (order === 'Maior') {
          return sortedProducts.sort((a, b) => b.price - a.price);
        }
        if (order === 'Menor') {
          return sortedProducts.sort((a, b) => a.price - b.price);
        }
        return sortedProducts;
      });
    };
    sortProducts(orderProducts);
  }, [orderProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await getProductsFromCategoryAndQuery(
          searchCategoryCT,
          searchTermCT,
        );
        setProducts(response);
        setOriginalProducts(response);
        if (searchTermCT !== '' && response.length === 0) {
          setProductStatus(`Nenhum produto com o nome ${searchTermCT}  encontrado`);
          setProductStatusAUX('Por favor, tente novamente');
        }
      } catch (error) {
        setProductStatus('Erro ao buscar produtos');
        setProductStatusAUX(
          'Por favor, revise sua conexão e termo procurado, depois tente novamente',
        );
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, [searchTermCT, searchCategoryCT]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (products.length === 0 || products === undefined) {
    return (
      <div id="product-status-main">
        <p id="product-status">{productsStatus}</p>
        <p id="product-status-aux">{productStatusAUX}</p>
      </div>
    );
  }
  if (products !== undefined && products.length > 0) {
    return (
      <div id="product-list-main" className="row g-3">
        <SelectOrderProducts setorderProducts={ setOrderProducts } />
        {products.map((product) => (
          <div key={ product.id } className="col-12 col-sm-4">
            <ProductListCard { ...product } />
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
