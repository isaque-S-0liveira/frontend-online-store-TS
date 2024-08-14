import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import FinalizePurchase from './pages/FinalizePurchase/FinalizePurchase';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="product-details/:productId" element={ <ProductDetails /> } />
        <Route path="checkout" element={ <FinalizePurchase /> } />
        <Route path="*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
