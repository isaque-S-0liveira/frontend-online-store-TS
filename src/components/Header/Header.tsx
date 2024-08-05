/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import logo from '/full-logo-online-store.png';
import './Header.css';
import HeaderInput from './HeaderInput/HeaderInput';
import ShoppingCartOffcanvas from './ShoppingCartOffcanvas/ShoppingCartOffcanvas';

function Header() {
  return (
    <header className="fixed-top" id="main-header">
      <img id="full-logo-img" className="d-block d-md-none" src={ logo } alt="logo" />
      <div id="header-itens-md-img">
        <HeaderInput />
        <img id="full-logo-img" className="d-none d-md-block" src={ logo } alt="logo" />
        <ShoppingCartOffcanvas />
      </div>
    </header>
  );
}

export default Header;
