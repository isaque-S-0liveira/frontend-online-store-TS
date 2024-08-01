import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/ProductTypes';
import { getProductById } from '../../services/api';
import ProductSelected from './ProductSelected/ProductSelected';
import TechnicalSpecifications from './TechnicalSpecifications/TechnicalSpecifications';
import GoToBackButton from '../../components/GoToBackButton/GoToBackButton';
import './ProductDetails.css';
import Loading from '../../components/Loading/Loading';

function ProductDetails() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState<Product>([] as unknown as Product);
  const [loading, setLoading] = useState(true);

  const alertMessageAndRedirect = () => {
    alert('Produto não encontrado, volte para a página inicial');
    navigate('/');
  };

  useEffect(() => {
    if (!productId) {
      return;
    }
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productList = await getProductById(productId) as Product;
        if (!productList) {
          alertMessageAndRedirect();
          return;
        }
        setLoading(false);
        setProductDetail(productList);
      } catch (error) {
        setLoading(false);
        alertMessageAndRedirect();
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="main-content">
        <Loading />
      </div>
    );
  }

  return (
    <div id="product-details-main" className="row main-content">
      <GoToBackButton />
      <div className="row product-details-content">
        <div className="col-12 col-md-6 product-selected-and-specifications">
          <ProductSelected productDetail={ productDetail } />
        </div>
        <div className="col-12 col-md-6 product-selected-and-specifications">
          <TechnicalSpecifications productDetail={ productDetail } />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
