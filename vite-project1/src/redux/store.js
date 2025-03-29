// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Configure Redux store with cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
