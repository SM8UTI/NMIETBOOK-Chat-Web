import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    chatId: "null",
    user: {},
  },
  reducers: {
    updateChatId: (state, action) => {
      state.chatId = action.payload;
    },
    updateChatUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateChatId, updateChatUser } = ChatSlice.actions;
export default ChatSlice.reducer;
