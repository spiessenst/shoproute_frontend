import { createSlice } from "@reduxjs/toolkit";

const initialState = { store_id: null };

const storeSlice = createSlice({
  name: "storeState",
  initialState,
  reducers: {
    setStore(state, { payload }) {
      state.store_id = payload;
    },
  },
});

export default storeSlice;
export const { setStore } = storeSlice.actions;
