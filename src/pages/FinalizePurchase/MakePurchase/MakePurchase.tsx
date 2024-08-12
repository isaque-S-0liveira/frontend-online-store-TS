import BuyerInformation from './BuyerInformation/BuyerInformation';
import './MakePurchase.css';
import ModalButtonPurchase from './ModalButtonPurchase/ModalButtonPurchase';
import PaymentMethod from './PaymentMethod/PaymentMethod';

function MakePurchase() {
  return (
    <form id="make-purchase-main">
      <div id="make-purchase-form-body">
        <BuyerInformation />
        <PaymentMethod />
      </div>
      <div id="make-purchase-footer">
        <ModalButtonPurchase />
      </div>
    </form>
  );
}

export default MakePurchase;
