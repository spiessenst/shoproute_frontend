import { createSlice } from "@reduxjs/toolkit";

const initialState = { shoppinglist_id: null };

const shoppinglistSlice = createSlice({
  name: "shoppinglistState",
  initialState,
  reducers: {
    setShoppinglist(state, { payload }) {
      state.shoppinglist_id = payload;
    },
  },
});

export default shoppinglistSlice;
export const { setShoppinglist } = shoppinglistSlice.actions;
