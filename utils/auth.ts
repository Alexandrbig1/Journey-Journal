import { auth } from "../config";
import { addUser, getUser, updateUserData } from "./firestore";
import { AppDispatch } from "../redux/store";
import { resetUser, setCurrentUser } from "../redux/auth/authReducer";
import { Alert } from "react-native";
import {
  AuthCredentials,
  RegistrationCredentials,
  User,
} from "@/utils/types/user";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

export const registrationDB = async (
  { email, image, name, password }: RegistrationCredentials,
  dispatch: AppDispatch
) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userData = await addUser(user.uid, {
      userId: user.uid,
      email: email || "",
      name: name || "",
      image: image || "",
    });
    dispatch(setCurrentUser(userData));
    return userData;
  } catch (error: any) {
    Alert.alert("Помилка", error.message);
    throw error;
  }
};

export const loginDB = async (
  { email, password }: AuthCredentials,
  dispatch: AppDispatch
) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    const user = credentials.user;
    const userData: User = {
      userId: user.uid,
      email: user.email || "",
      name: user.displayName || "",
      image: user.photoURL || "",
    };
    dispatch(setCurrentUser(userData));
    return userData;
  } catch (error: any) {
    Alert.alert("Помилка", error.message);
    throw error;
  }
};

//Update user data
export const updateUser = async (update: {
  displayName?: string;
  photoURL?: string;
}) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await updateProfile(user, update);
    } catch (error) {
      throw error;
    }
  }
};

// Check user state
export const authStateChanged = (dispatch: AppDispatch) => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userData = await getUser(user.uid);

      dispatch(
        setCurrentUser({
          userId: userData?.userId || "",
          email: userData?.email || "",
          name: userData?.name || "",
          image: userData?.image || "",
        } as User)
      );
    } else {
      dispatch(resetUser());
    }
  });
};

export const logoutDB = async (dispatch: AppDispatch) => {
  try {
    await signOut(auth);
    dispatch(resetUser());
  } catch (error) {
    console.error("Logout error:", error);
  }
};
