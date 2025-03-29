import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
import logo from '../assets/hero/logo.png'; // Ensure correct path

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="site-header">
      {/* Left: Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="ShoppyGlobe Logo" className="logo-image" />
        </Link>
      </div>

      {/* Center: ShoppyGlobe Text */}
      <div className="site-title">
        <h1>ShoppyGlobe</h1>
      </div>

      {/* Right: Navigation */}
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/cart">
              Cart {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </Link>
          </li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
