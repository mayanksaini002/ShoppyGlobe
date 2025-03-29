// CartItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import './CartItem.css';

const CartItem = ({ itemData }) => {
  const dispatch = useDispatch();

  // Remove the product from cart
  const handleRemove = () => {
    dispatch(removeFromCart(itemData.id));
  };

  // Update quantity when user changes the input
  const handleQuantityChange = (e) => {
    const newQty = parseInt(e.target.value, 10);
    if (newQty >= 1) {
      dispatch(updateQuantity({ id: itemData.id, quantity: newQty }));
    }
  };

  return (
    <div className="cart-item">
      <img src={itemData.thumbnail} alt={itemData.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{itemData.title}</h4>
        <p>Price: ${itemData.price}</p>
        <div className="quantity-control">
          <label htmlFor={`qty-${itemData.id}`}>Qty:</label>
          <input
            type="number"
            id={`qty-${itemData.id}`}
            value={itemData.quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button onClick={handleRemove} className="btn-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  itemData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
