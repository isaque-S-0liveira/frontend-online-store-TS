import './Header.css';
import HeaderElementsMD from './HeaderElementsMD';
import HeaderElementsSM from './HeaderElementsSM';

function Header() {
  return (
    <header id="main-header">
      <HeaderElementsSM />
      <HeaderElementsMD />
    </header>
  );
}

export default Header;
