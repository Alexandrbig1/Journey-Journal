import { getUser, updateUserData } from "../../utils/firestore";
import { setCurrentUser } from "../auth/authReducer";
import { AppDispatch } from "../store";

export const updateAvatar = async (
  image: string,
  userId: string,
  dispatch: AppDispatch
) => {
  updateUserData(userId, image);
  const userData = await getUser(userId);
  if (userData) {
    dispatch(setCurrentUser({ image: userData.image }));
  }
};
