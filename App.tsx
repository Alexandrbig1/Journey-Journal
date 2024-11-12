import "react-native-gesture-handler";
import { useState } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/Registration/RegistrationScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import Home from "./screens/Home/Home";
import { User, Post } from "./types/types";

SplashScreen.preventAutoHideAsync();

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
  });

  const [users, setUsers] = useState<User>({});
  const [posts, setPosts] = useState<Post[]>([]);

  const dataHandler = (key: string, value: object) => {
    if (key === "users") {
      setUsers((prevState) => ({ ...prevState, ...value }));
    } else if (key === "posts") {
      setPosts((prevState) => [...prevState, value]);
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          initialParams={{ users, dataHandler }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={{ users }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          initialParams={{ users, posts, dataHandler }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
