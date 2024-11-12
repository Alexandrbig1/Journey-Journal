import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CreatePostsScreen from "@/screens/CreatePosts/CreatePostsScreen";
import PostsScreen from "@/screens/PostsScreen/PostsScreen";
import ProfileScreen from "@/screens/ProfileScreen/ProfileScreen";
import styles from "./stylesHome";

export default function Home({ route }: any) {
  const { params } = useRoute();
  const { user, users, posts, dataHandler } = params;
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  if (!user) {
    return (
      <SafeAreaView style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tabs.Navigator
        screenOptions={() => ({
          headerRight: () => (
            <Button onPress={handleLogout} title="Logout" color="tomato" />
          ),
          activeTintColor: "#bc4749",
          inactiveTintColor: "#adb5bd",
        })}
      >
        <Tabs.Screen
          name="Publications"
          component={PostsScreen}
          initialParams={{ user, users, posts, dataHandler }}
        />
        <Tabs.Screen
          name="Create publication"
          component={CreatePostsScreen}
          options={{ tabBarStyle: { display: "none" } }}
          initialParams={{ user, users, posts, dataHandler }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{ user, users, posts, dataHandler }}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </View>
  );
}
