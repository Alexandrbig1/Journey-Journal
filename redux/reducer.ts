import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import postsReducer from "./posts/postsReducer";
import userPostsReducer from "./userPosts/userPostsReducer";

const reducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  userPosts: userPostsReducer,
});

export default reducer;
