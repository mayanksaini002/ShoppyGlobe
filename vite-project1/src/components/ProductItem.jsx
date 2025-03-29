// ProductItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PropTypes from 'prop-types';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="image-container">
          <img src={product.thumbnail} alt={product.title} />
        </div>
      </Link>
      <div className="info">
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button className="btn-add" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
