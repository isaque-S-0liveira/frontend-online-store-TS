import './HeaderInput.css';

function HeaderInput() {
  return (
    <form id="main-header-input">
      <input className="form-control" type="text" placeholder="Digite o que você busca" />
      <i className="bi bi-search" />
    </form>
  );
}

export default HeaderInput;
