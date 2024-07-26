import './Home.css';
import SMCategories from './SMCategories/SMCategories';
import LGCategories from './LGCategories/LGCategories';

function Home() {
  return (
    <main className="main-content row" id="home-main">
      <SMCategories />
      <div className="col-4 h-100">
        <LGCategories />
      </div>
    </main>
  );
}
export default Home;
