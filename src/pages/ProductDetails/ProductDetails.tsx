import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Product } from '../../types/ProductTypes';
import { getProductById } from '../../services/api';
import ProductSelected from './ProductSelected/ProductSelected';
import TechnicalSpecifications from './TechnicalSpecifications/TechnicalSpecifications';
import GoToBackButton from '../../components/GoToBackButton/GoToBackButton';
import './ProductDetails.css';
import Loading from '../../components/Loading/Loading';
import ProductReviews from './ProductReviews/ProductReviews';

function ProductDetails() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState<Product>([] as unknown as Product);
  const [loading, setLoading] = useState(true);

  const alertMessageAndRedirect = () => {
    alert('Produto não encontrado, volte para a página inicial');
    navigate('/');
  };

  const fetchProducts = async () => {
    if (!productId) {
      return;
    }
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

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [productId]);

  if (loading) {
    return (
      <div className="main-content">
        <Loading />
      </div>
    );
  }

  return (
    <div id="product-details-main" className="main-content">
      <GoToBackButton />
      <div className="row product-details-content">
        <div
          id="product-selected-layout-contianer"
          className="col-12 col-md-6"
        >
          <ProductSelected productDetail={ productDetail } />
        </div>
        <div
          id="technical-specifications-layout-contianer"
          className="col-12 col-md-6"
        >
          <TechnicalSpecifications productDetail={ productDetail } />
        </div>
        <div>
          <ProductReviews />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
