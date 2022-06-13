import { createSlice } from "@reduxjs/toolkit";

const initialState = { newproduct: null };

const productsSlice = createSlice({
  name: "productState",
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.newproduct = payload;
    },
  },
});

export default productsSlice;
export const { setProducts } = productsSlice.actions;
