import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../utils/types/post";

const userPostsReducer = createSlice({
  name: "userPosts",
  initialState: [] as PostType[],
  reducers: {
    setUserPosts(state, action) {
      return [...action.payload];
    },
  },
});

export const { setUserPosts } = userPostsReducer.actions;

export default userPostsReducer.reducer;
