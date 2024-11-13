import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../utils/types/post";

const postsReducer = createSlice({
  name: "posts",
  initialState: [] as PostType[],
  reducers: {
    setPosts(state, action) {
      return [...action.payload];
    },
    resetData(state) {
      return [];
    },
  },
});

export const { setPosts, resetData } = postsReducer.actions;

export default postsReducer.reducer;
