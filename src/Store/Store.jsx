import { configureStore } from "@reduxjs/toolkit";
import MainSlice from "./Slice/MainSlice";
import ChatSlice from "./Slice/ChatSlice";

const Store = configureStore({
  reducer: {
    Main: MainSlice,
    chat: ChatSlice,
  },
});

export default Store;
