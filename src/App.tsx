import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="product-details/:productId" element={ <ProductDetails /> } />
        <Route path="shopping-cart" element={ <ShoppingCart /> } />
        <Route path="*" element={ <h1>Not Found</h1> } />
      </Route>
    </Routes>
  );
}

export default App;
