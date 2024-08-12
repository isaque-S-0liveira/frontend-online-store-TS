import CPFInput from './Inputs/CPFInput';
import SelectState from './SelectState';
import './BuyerInformation.css';
import CEPInput from './Inputs/CEPInput';
import PhoneInput from './Inputs/PhoneInput';

function BuyerInformation() {
  return (
    <>
      <div className="checkedProducts-finalizePurchase-header">
        <h2>Informações do comprador</h2>
      </div>

      <div id="make-purchase-buyer-information" className="row mt-4">

        <div id="container-name" className="mb-3 col-12 col-md-6 input-container">
          <input
            type="text"
            className="form-control"
            id="input-name"
            placeholder="Nome Completo"
          />
        </div>

        <div id="container-cpf" className="mb-3 col-6 input-container">
          <CPFInput />
        </div>

        <div id="container-email" className="mb-3 col-12 col-md-6 input-container">
          <input
            type="email"
            className="form-control"
            id="input-email"
            placeholder="E-mail"
          />
        </div>

        <div id="container-phone" className="mb-3 col-6 input-container">
          <PhoneInput />
        </div>

        <div id="container-cep" className="mb-3 col-4 input-container">
          <CEPInput />
        </div>

        <div id="container-address" className="mb-3 col-8 input-container">
          <input
            type="text"
            className="form-control"
            id="input-address"
            placeholder="Endereço"
          />
        </div>

        <div id="container-complement" className="mb-3 col-8 input-container">
          <input
            type="text"
            className="form-control"
            id="input-complement"
            placeholder="Complemento"
          />
        </div>

        <div id="container-number" className="mb-3 col-4 input-container">
          <input
            type="text"
            className="form-control"
            id="input-number"
            placeholder="Número"
          />
        </div>

        <div id="container-city" className="mb-3 col-8 input-container">
          <input
            type="text"
            className="form-control"
            id="input-city"
            placeholder="Cidade"
          />
        </div>

        <div id="container-state" className="mb-3 col-4 input-container">
          <SelectState />
        </div>
      </div>
    </>
  );
}

export default BuyerInformation;
