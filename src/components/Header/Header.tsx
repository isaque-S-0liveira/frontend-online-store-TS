import './Header.css';
import HeaderElementsMD from './HeaderElementsMD';
import HeaderElementsSM from './HeaderElementsSM';

function Header() {
  return (
    <header className="fixed-top" id="main-header">
      <HeaderElementsSM />
      <HeaderElementsMD />
    </header>
  );
}

export default Header;
