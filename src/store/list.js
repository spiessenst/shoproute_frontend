import { createSlice } from "@reduxjs/toolkit";

const initialState = { shoppinglist_id: null, shoppinglist_name: null };

const shoppinglistSlice = createSlice({
  name: "shoppinglistState",
  initialState,
  reducers: {
    setShoppinglist(state, { payload }) {
      state.shoppinglist_id = payload.shoppinglist_id;
      state.shoppinglist_name = payload.shoppinglist_name;
    },
  },
});

export default shoppinglistSlice;
export const { setShoppinglist } = shoppinglistSlice.actions;
