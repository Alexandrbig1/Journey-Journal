import {
  arrayUnion,
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db, storage } from "../config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { User } from "./types/user";
import { PostComment, PostType } from "./types/post";
import { getImage } from "@/components/pickImage";
import { setPosts } from "../redux/posts/postsReducer";
import { AppDispatch } from "../redux/store";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const uploadImage = async (
  userId: string,
  file: Blob,
  fileName: string
) => {
  try {
    const imageRef = ref(
      storage,
      `images/${userId}/${new Date().getTime()}-${fileName}`
    );
    const result = await uploadBytes(imageRef, file);
    return imageRef;
  } catch (error: any) {
    console.error(
      "Error details:",
      " message: ",
      error.message,
      " code: ",
      error.code,
      " payload: ",
      error.payload
    );
    if (error.serverResponse) {
      console.error("Server Response:", error.serverResponse);
    }
  }
};

export const getImageUrl = async (imageRef: any): Promise<string> => {
  const url = await getDownloadURL(imageRef);
  return url;
};

export const addUser = async (userId: string, userData: User) => {
  try {
    const { imageBlob, fileName } = await getImage(userData.image);
    if (imageBlob) {
      const imageRef = await uploadImage(userId, imageBlob, fileName);
      const imageUrl = await getImageUrl(imageRef);

      const user = { ...userData, image: imageUrl } as User;
      await setDoc(doc(db, "users", userId), user, { merge: true });
    } else {
      console.error("Error getting image blob data");
    }
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const addPost = async (userId: string, post: PostType) => {
  try {
    const { imageBlob, fileName } = await getImage(post.image);
    if (imageBlob) {
      const imageRef = await uploadImage(userId, imageBlob, fileName);
      const imageUrl = await getImageUrl(imageRef);

      const newPost = { ...post, image: imageUrl } as PostType;
      await setDoc(doc(db, "posts", userId, "postsId", post.id), newPost, {
        merge: true,
      });
    }
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const updateComments = async (
  userId: string,
  postId: string,
  updateData: PostComment
) => {
  try {
    if (
      typeof userId !== "string" ||
      typeof postId !== "string" ||
      !updateData.id
    ) {
      console.error("Invalid comment data.");
      return;
    }
    const postRef = doc(db, "posts", userId, "postsId", postId);
    const postSnapshot = await getDoc(postRef);
    if (postSnapshot.exists()) {
      await updateDoc(postRef, {
        comments: arrayUnion(updateData),
      });
    } else {
      throw new Error("No post found for the given ID.");
    }
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};

export const getPostById = async (
  userId: string,
  postId: string
): Promise<PostType | null> => {
  try {
    if (!userId || !postId) {
      console.error("Invalid user ID or post ID.");
      return null;
    }
    const postRef = doc(db, "posts", userId, "postsId", postId);
    const postSnapshot = await getDoc(postRef);
    if (postSnapshot.exists()) {
      const post = postSnapshot.data() as PostType;
      return post;
    } else {
      throw new Error("No post found for the given ID.");
    }
  } catch (error) {
    console.error("Error getting post:", error);
    return null;
  }
};

export const getPostsForUser = async (userId: string) => {
  try {
    if (!userId) {
      return null;
    }
    const userDocRef = doc(db, "posts", userId);
    const q = query(collection(userDocRef, "postsId"));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return [];
    }
    const posts = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.error("Error getting posts for user:", error);
    return null;
  }
};

export const getPosts = async () => {
  try {
    const postsRef = collectionGroup(db, "postsId");

    const snapshot = await getDocs(postsRef);
    const posts = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.error("Error getting all posts:", error);
    return null;
  }
};

export const getUser = async (userId: string): Promise<User | null> => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as User;
  } else {
    return null;
  }
};

export const subscribeToPosts = (dispatch: AppDispatch) => {
  const postsRef = collection(db, "posts");

  onSnapshot(postsRef, (snapshot) => {
    const postsData = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    dispatch(setPosts(postsData));
  });
};

export const updateUserData = async (userId: string, image: string) => {
  try {
    const { imageBlob, fileName } = await getImage(image);
    if (imageBlob) {
      const imageRef = await uploadImage(userId, imageBlob, fileName);
      const imageUrl = await getImageUrl(imageRef);

      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, { image: imageUrl });
    } else {
      console.error("Error getting image blob data");
    }
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};
