// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product to the cart. Increase quantity if it already exists.
    addToCart: (state, action) => {
      const product = action.payload;
      const existingIndex = state.cartItems.findIndex((item) => item.id === product.id);
      if (existingIndex !== -1) {
        state.cartItems[existingIndex].quantity += product.quantity;
      } else {
        state.cartItems.push(product);
      }
    },
    // Remove a product from the cart
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    // Update the quantity of a product in the cart
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((itm) => itm.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
