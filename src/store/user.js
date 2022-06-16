import { createSlice } from "@reduxjs/toolkit";

const initialState = { user_id: null };

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user_id = payload.user;
    },
  },
});

export default userSlice;
export const { setUser } = userSlice.actions;
