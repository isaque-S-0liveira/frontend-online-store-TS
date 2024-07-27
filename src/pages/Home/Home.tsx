import './Home.css';
import SMCategories from './SMCategories/SMCategories';
import LGCategories from './LGCategories/LGCategories';
import ProductList from '../../components/ProductList/ProductList';

function Home() {
  return (
    <main className="main-content row " id="home-main">
      <SMCategories />
      <div className="col-lg-3 col-xxl-2 h-100 d-none d-lg-block p-0">
        <LGCategories />
      </div>
      <div className="col-12 col-lg-9 col-xxl-10 h-100">
        <ProductList />
      </div>
    </main>
  );
}
export default Home;
