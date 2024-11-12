import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CreatePostsScreen from "@/screens/CreatePosts/CreatePostsScreen";
import PostsScreen from "@/screens/PostsScreen/PostsScreen";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";
import styles from "./stylesHome";

export default function Home({ route }: any) {
  const navigation = useNavigation();

  const {
    params: { user, cookies },
  } = useRoute();

  if (!user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Profile") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#bc4749",
          inactiveTintColor: "#adb5bd",
        }}
      >
        <Tabs.Screen
          name="Publications"
          component={PostsScreen}
          initialParams={{ user }}
        />
        <Tabs.Screen
          name="Create publication"
          component={CreatePostsScreen}
          options={{ tabBarStyle: { display: "none" } }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{ user, cookies }}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </View>
  );
}
