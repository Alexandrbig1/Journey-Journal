import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/screens/Home/Home";
import CommentsScreen from "@/screens/Comments/CommentsScreen";
import MapScreen from "@/screens/MapScreen/MapScreen";
import CameraScreen from "@/screens/CameraScreen/CameraScreen";
import PressableIcon from "@/components/PressableIcon/pressableIcon";
import { Screens, ScreensTitles } from "@/utils/enums/routes";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.Home}>
      <Stack.Screen
        name={Screens.Home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.Comments}
        component={CommentsScreen}
        options={({ route }) => ({
          headerTitle: ScreensTitles.Comments,
          headerLeft: () =>
            route.name === Screens.Comments ? <PressableIcon /> : undefined,
          headerStyle: {
            height: 98,
            borderBottomColor: "rgba(0, 0, 0, 0.30)",
            borderBottomWidth: 1,
          },
        })}
      />
      <Stack.Screen
        name={Screens.Camera}
        component={CameraScreen}
        options={({ route }) => ({
          headerTitle: "",
          headerLeft: () =>
            route.name === Screens.Camera ? <PressableIcon /> : undefined,
          headerStyle: {
            height: 98,
            borderBottomColor: "rgba(255, 255, 255, 0.30)",
            borderBottomWidth: 1,
          },
        })}
      />
      <Stack.Screen name={Screens.Map} component={MapScreen} />
    </Stack.Navigator>
  );
}
