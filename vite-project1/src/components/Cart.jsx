// Cart.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} itemData={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
        <Link to="/checkout" className="btn-checkout">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
