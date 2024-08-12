import './FinalizePurchase.css';
import GoToBackButton from '../../components/GoToBackButton/GoToBackButton';
import CheckedProducts from './CheckedProducts/CheckedProducts';
import MakePurchase from './MakePurchase/MakePurchase';

function FinalizePurchase() {
  return (
    <div className="main-content">
      <GoToBackButton />
      <div id="checkedProducts-finalizePurchase-container" className="row">
        <div id="checked-products-container" className="col-12 col-md-6 col-lg-5">
          <CheckedProducts />
        </div>
        <div id="make-purchase-container" className="col-12 col-md-6 col-lg-7 h-100">
          <MakePurchase />
        </div>
      </div>
    </div>
  );
}

export default FinalizePurchase;
