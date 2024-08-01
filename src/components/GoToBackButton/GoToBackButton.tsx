import { useNavigate } from 'react-router-dom';
import arrowBack from './icon-arrow-back.png';
import './GoToBackButton.css';

function GoToBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega para a página anterior no histórico
  };

  return (
    <div className="back-button-container col-12 position-fixed">
      <button className="back-button" onClick={ handleGoBack }>
        <img src={ arrowBack } alt="Voltar" />
        {'  '}
        {'  '}
        <span>
          Voltar
        </span>
      </button>
    </div>
  );
}

export default GoToBackButton;
