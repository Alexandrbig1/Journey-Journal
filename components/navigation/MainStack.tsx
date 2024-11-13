import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import RegistrationScreen from "@/screens/Registration/RegistrationScreen";
import LoginScreen from "@/screens/Login/LoginScreen";
import HomeStack from "./HomeStack";
import { Screens } from "../../utils/enums/routes";

const Stack = createStackNavigator();

export default function MainStack() {
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  return (
    <Stack.Navigator
      initialRouteName={
        currentUser?.email ? Screens.HomeStack : Screens.RegistrationScreen
      }
    >
      {currentUser?.email ? (
        <Stack.Screen
          name={Screens.HomeStack}
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <>
          <Stack.Screen
            name={Screens.RegistrationScreen}
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={Screens.LoginScreen}
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
