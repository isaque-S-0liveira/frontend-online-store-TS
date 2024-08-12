import './PaymentMethod.css';
import masterCardIcon from './image/icon _MasterCard_.png';
import visaIcon from './image/icon _Visa_.png';
import eloIcon from './image/icon _elo_.png';
import barCodeIcon from './image/icon _barcode_.png';

function PaymentMethod() {
  return (
    <>
      <div className="checkedProducts-finalizePurchase-header">
        <h2>Método de pagamento</h2>
      </div>

      <div id="payment-method-main">
        <div className="payment-method-input-container">
          <input
            className="form-check-input"
            id="barCode"
            type="radio"
            name="payment-method-radio"
          />
          <label htmlFor="barCode"><img src={ barCodeIcon } /></label>
        </div>
        <div className="payment-method-input-container">
          <input
            className="form-check-input"
            id="masterCard"
            type="radio"
            name="payment-method-radio"
          />
          <label htmlFor="masterCard"><img src={ masterCardIcon } /></label>
        </div>
        <div className="payment-method-input-container">
          <input
            className="form-check-input"
            id="visa"
            type="radio"
            name="payment-method-radio"
          />
          <label htmlFor="visa"><img src={ visaIcon } /></label>
        </div>
        <div className="payment-method-input-container">
          <input
            className="form-check-input"
            id="elo"
            type="radio"
            name="payment-method-radio"
          />
          <label htmlFor="elo"><img src={ eloIcon } /></label>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
