import { useContext, useEffect, useState } from 'react';
import SearchTermContext from '../../context/SearchProductsContext';
import './ProductList.css';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { Product } from '../../types/ProductTypes';
import Loading from '../Loading/Loading';
import ProductListCard from './ProductListCard/ProductListCard';

function ProductList() {
  const { searchTermCT, searchCategoryCT } = useContext(SearchTermContext);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsStatus, setProductStatus] = useState(
    'Você ainda não realizou nenhuma busca',
  );
  const [productStatusAUX, setProductStatusAUX] = useState(
    'Digite algum termo de pesquisa ou escolha uma categoria',
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await getProductsFromCategoryAndQuery(
          searchCategoryCT,
          searchTermCT,
        );
        setProducts(response);
        if (searchTermCT !== '' && response.length === 0) {
          setProductStatus(`Nenhum produto com o nome ${searchTermCT}  encontrado`);
          setProductStatusAUX('Por favor, tente novamente');
        }
      } catch (error) {
        console.log(error);

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
