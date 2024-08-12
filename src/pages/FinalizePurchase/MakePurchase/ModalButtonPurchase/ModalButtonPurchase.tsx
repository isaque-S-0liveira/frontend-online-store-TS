/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';
import './ModalButtonPurchase.css';
import { useNavigate } from 'react-router-dom';
import confia from './confia.jpeg';
import { clearStorageProducts } from '../../../../utils/storage';

function ModalButtonPurchase() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleShowModal = () => {
    setLoading(true);
    setShowSuccess(false);

    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setDisabled(false);
    }, 2000);
  };

  const handleClick = () => {
    navigate('/');
    clearStorageProducts();
  };

  return (
    <div id="purchase-made-modal-contianer">
      <button
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        type="button"
        className="primary-button"
        onClick={ handleShowModal }
      >
        Comprar
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={ -1 }
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-body">
              {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              {showSuccess && (
                <div className="text-center text-success">
                  <i className="bi bi-check-circle-fill" style={ { fontSize: '2rem' } } />
                  <p className="modal-text">Compra realizada com sucesso!</p>
                  <p className="modal-text">Seu produto chegará em breve.</p>
                  <img src={ confia } alt="confia" className="grow-animation" />
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                disabled={ disabled }
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={ handleClick }
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalButtonPurchase;
