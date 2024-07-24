import logo from '../../../public/full-logo-online-store.png';
import HeaderInput from './HeaderInput';

function HeaderElementsSM() {
  return (
    <>
      <div className="d-md-none">
        <img id="full-logo-img" src={ logo } alt="logo" />
      </div>

      <div id="input-and-icon-div" className="d-md-none">
        <HeaderInput />
        <i id="shopping-cart-icon" className="bi bi-cart-fill" />
      </div>
    </>
  );
}

export default HeaderElementsSM;
