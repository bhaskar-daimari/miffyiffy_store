
import "./Navbar.css";
import pink_cart from "../../assets/pink-cart.jpg";
import pink_pfp from "../../assets/pink-pfp.jpg";
import menu_icon from "../../assets/menuicon.png";

export default function NavBar() {
  return (
    <nav className="container">
      <div id="menuicon"><img src={menu_icon} alt="menu" /></div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="cart-profile">
        <img src={pink_pfp} alt="profile" />
        <img src={pink_cart} alt="cart" />
      </div>
    </nav>
  );
}
