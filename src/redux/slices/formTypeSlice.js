import { createSlice } from "@reduxjs/toolkit";

const formTypeSlice = createSlice({
  name: "form",
  initialState: {
    formType: true,
  },
  reducers: {
    changeForm: (state, action) => {
      state.formType = !state.formType;
    },
  },
});

export const { changeForm } = formTypeSlice.actions;
export default formTypeSlice.reducer;
