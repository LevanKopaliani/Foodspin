import "../styles/Menu.css";
import Logo from "../img/foodspin-logo.png";
import Cart from "../img/cart.png";

const Menu = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-menu">
          <div className="nav-menu__logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav-menu-list">
            <li className="nav-menu-list__item">Breakfast</li>
            <li className="nav-menu-list__item">lunch</li>
            <li className="nav-menu-list__item">Dinner</li>
          </ul>
          <div className="cart">
            <img src={Cart} alt="Cart" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
