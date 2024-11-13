import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authStateChanged } from "../../utils/auth";
import MainStack from "../navigation/MainStack";
import { subscribeToPosts } from "../../utils/firestore";

export default function AuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);

  useEffect(() => {
    subscribeToPosts(dispatch);
  }, [dispatch]);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
