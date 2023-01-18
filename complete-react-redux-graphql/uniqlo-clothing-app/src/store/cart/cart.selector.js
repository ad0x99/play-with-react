import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

/**
 * Creating a cartItems memoized selector that
 * returns the cartItems state
 */
const selectCartItems = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems;
});

/**
 * Creating a memoized selector that returns the isCartOpen state.
 */
const selectIsCartOpen = createSelector([selectCartReducer], (cart) => {
  return cart.isCartOpen;
});

/**
 * Creating a memoized selector that returns the total number of items in the cart.
 */
const selectCartCount = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);
});

/**
 * Creating a memoized selector that returns the total price of the cart.
 */
const selectCartTotal = createSelector([selectCartItems], (cartItems) => {
  return cartItems.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price;
  }, 0);
});

export { selectCartItems, selectIsCartOpen, selectCartCount, selectCartTotal };
