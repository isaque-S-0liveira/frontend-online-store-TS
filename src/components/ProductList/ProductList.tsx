import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchTermContext from '../../context/SearchProductsContext';
import './ProductList.css';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { Product } from '../../types/ProductTypes';
import Loading from '../Loading/Loading';
import AddCartButton from '../AddCartButton/AddCartButton';

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
            <div className="product-card">
              <Link
                className="product-datails-link"
                to={ `/product-details/${product.id}` }
              >
                Ver detalhes
              </Link>
              <img src={ product.thumbnail } alt={ product.title } />
              <p className="product-name">{product.title}</p>
              <p className="product-price">
                R$
                {' '}
                {product.price}
              </p>
              <AddCartButton />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductList;
