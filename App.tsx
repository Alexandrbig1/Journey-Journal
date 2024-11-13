import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";

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

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
}
