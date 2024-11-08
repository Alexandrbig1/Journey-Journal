import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
  });

  const [page, setPage] = useState("registration");
  const handlePage = (value: string) => {
    setPage(value);
  };

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <>
      {page === "registration" ? (
        <RegistrationScreen togglePage={handlePage} />
      ) : (
        <LoginScreen togglePage={handlePage} />
      )}
    </>
  );
}
