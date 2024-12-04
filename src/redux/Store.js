import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import formTypeSlice from "./slices/formTypeSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formTypeSlice,
  },
});

export default store;
