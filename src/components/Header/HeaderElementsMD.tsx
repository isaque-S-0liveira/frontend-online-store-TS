import logo from '../../../public/full-logo-online-store.png';
import HeaderInput from './HeaderInput';

function HeaderElementsMD() {
  return (
    <>
      <div className="ps-5 d-none d-md-block">
        <HeaderInput />
      </div>

      <div className="d-none d-md-block">
        <img id="full-logo-img" src={ logo } alt="logo" />
      </div>

      <div className="pe-5 d-none d-md-block">
        <i id="shopping-cart-icon" className="bi bi-cart-fill" />
      </div>
    </>
  );
}

export default HeaderElementsMD;
