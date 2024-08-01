import { useContext, useState } from 'react';
import './HeaderInput.css';
import { useNavigate } from 'react-router-dom';
import SearchTermContext from '../../context/SearchProductsContext';

function HeaderInput() {
  const [search, setSearch] = useState('');
  const { setSearchTermCT, setSearchCategoryCT } = useContext(SearchTermContext);
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchCategoryCT('');
    setSearchTermCT(search);
    setSearch('');
    navigate('/');
  };

  return (
    <form onSubmit={ handleSubmit } id="main-header-input">
      <input
        id="search-input"
        className="form-control"
        type="text"
        placeholder="Digite o que você busca"
        onChange={ handleSearch }
        value={ search }
      />
      <button
        id="header-search-button"
        type="submit"
        aria-label="Search"
      >
        <i className="bi bi-search" />
      </button>
    </form>
  );
}

export default HeaderInput;
