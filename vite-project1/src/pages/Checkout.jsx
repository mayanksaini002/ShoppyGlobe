// Checkout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p>Thank you for shopping with ShoppyGlobe! This is a demo checkout page.</p>
      <Link to="/">Continue Shopping</Link>
    </div>
  );
};

export default Checkout;
