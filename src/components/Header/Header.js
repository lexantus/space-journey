import './Header.scss';
import imgLogo from './logo.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="index.html"><img src={imgLogo} alt="Logo" /></a>
      </div>
      <input type="checkbox" id="burger-menu-toggle" />
      <label htmlFor="burger-menu-toggle" className="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav>
        <ul className="header-menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">Products</a></li>
          <li className="cart"><a href="cart.html">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
