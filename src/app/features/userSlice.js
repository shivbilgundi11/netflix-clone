import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    emailPlaceholder: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    getEmail: (state, action) => {
      state.emailPlaceholder = action.payload;
    },
  },
});

export const { login, logout, getEmail } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
