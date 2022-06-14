import { createSlice } from "@reduxjs/toolkit";

const initialState = { store_id: 1, store_name: "Carrefour" };

const storeSlice = createSlice({
  name: "storeState",
  initialState,
  reducers: {
    setStore(state, { payload }) {
      state.store_id = payload.store_id;
      state.store_name = payload.store_name;
    },
  },
});

export default storeSlice;
export const { setStore } = storeSlice.actions;
