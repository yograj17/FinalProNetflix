import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      success: false,
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo.success = action.payload;
    },
    removeUser: (state, action) => {
      state.userInfo.success = action.payload;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
