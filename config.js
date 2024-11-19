import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, listAll } from "firebase/storage";
import {
  FIREBASE_KEY,
  FIREBASE_DOMAIN,
  FIREBASE_DB,
  FIREBASE_ID,
  FIREBASE_BUCKET,
  FIREBASE_SENDER_ID,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_DOMAIN,
  databaseURL: FIREBASE_DB,
  projectId: FIREBASE_ID,
  storageBucket: FIREBASE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore();
export const storage = getStorage();

const checkStorageConnection = async () => {
  try {
    const storageRef = ref(storage, "/");
    const listResult = await listAll(storageRef);
    console.log(
      "Connected to Firebase Storage. Found items:",
      listResult.items
    );
  } catch (error) {
    console.error("Error connecting to Firebase Storage:", error.message);
  }
};
checkStorageConnection();
