import { getPosts, getPostsForUser } from "../../utils/firestore";
import { PostType } from "../../utils/types/post";
import { setPosts } from "../posts/postsReducer";
import { AppDispatch } from "../store";
import { setUserPosts } from "../userPosts/userPostsReducer";

export const fetchPosts = async (dispatch: AppDispatch) => {
  const data = await getPosts();
  if (data) dispatch(setPosts(data as PostType[]));
};

export const fetchUserPosts = async (userId: string, dispatch: AppDispatch) => {
  const data = await getPostsForUser(userId);
  if (data) {
    dispatch(setUserPosts(data as PostType[]));
  }
};
