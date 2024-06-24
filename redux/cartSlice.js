import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart", //name of state
  initialState: {
    cartItems: [],
  },
  reducers: {
    // reducer method 1
    // add product to cart
    addToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item?.id === action.payload.id
      );
      //   if product already exists then only increase its quantity.do not add the entire product again in the cart.
      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.attributes.price =
          existingProduct.oneQuantityPrice * existingProduct.quantity;
      }
      //   if it is new product then push the product in the productData array.
      else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      //
    },
    // reducer method 2

    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            product.attributes.price =
              product.oneQuantityPrice * action.payload.value;
          }
          return { ...product, [action.payload.key]: action.payload.value };
        }
        return product;
      });
    },
    // reducer method 3
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeProductFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
