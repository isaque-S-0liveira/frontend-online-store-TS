import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div id="not-found-main" className="main-content">
      <h4 id="not-found-title">A página que você buscou não existe ou está indisponível</h4>
      <Link
        id="not-found-link"
        to="/"
      >
        <i className="bi bi-arrow-return-left" />
        Retorne para página principal
      </Link>
    </div>
  );
}

export default NotFound;
