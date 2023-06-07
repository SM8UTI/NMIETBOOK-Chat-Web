import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Slice/MainSlice";

const Store = configureStore({
  reducer: {
    Main: MainSlice,
  },
});

export default Store;
