import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productsSlice = createSlice({
  name: "productState",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state = payload;
    },
  },
});

export default productsSlice;
export const { setProducts } = productsSlice.actions;
