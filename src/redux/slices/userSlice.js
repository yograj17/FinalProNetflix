import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      // state = action.payload;
      Object.assign(state, action.payload);
    },
    removeUser: (state) => {},
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
