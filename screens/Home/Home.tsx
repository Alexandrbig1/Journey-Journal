import { View, Text, Image } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "@/screens/CreatePosts/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import PressableIcon from "@/components/PressableIcon/pressableIcon";
import { Screens, ScreensTitles } from "@/utils/enums/routes";
import { useEffect } from "react";
import { RouteParams } from "@/utils/interfaces/routeParams";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "@/redux/auth/authReducer";
import styles from "./stylesHome";
import { User } from "@/utils/types/user";
import { updateUserData } from "@/utils/firestore";
import { logoutDB } from "@/utils/auth";
import PlusIcon from "@/icons/PlusIcon";
import LogoutIcon from "@/icons/LogoutIcon";
import ProfileIcon from "@/icons/ProfileIcon";
import MenuIcon from "@/icons/MenuIcons";

type RegistrationScreenRouteProp = RouteProp<
  RouteParams,
  Screens.RegistrationScreen
>;
export default function Home() {
  const Tabs = createBottomTabNavigator();
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: any) => state.auth.currentUser
  ) as User;
  const route = useRoute<RegistrationScreenRouteProp>();
  const photoUri = route.params?.photoUri;

  useEffect(() => {
    if (photoUri) {
      updateUserData(currentUser.userId, photoUri);
      dispatch(setCurrentUser({ image: photoUri }));
    }
  }, [photoUri]);

  const handleLogout = () => {
    logoutDB(dispatch);
  };

  if (!currentUser) {
    return (
      <SafeAreaView style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerLeft: () =>
            route.name === Screens.CreatePosts ? (
              <PressableIcon icon={PlusIcon} />
            ) : undefined,
          headerRight: () =>
            route.name === Screens.Posts ? (
              <PressableIcon
                icon={LogoutIcon}
                iconStyle={styles.logout}
                buttonStyle={styles.logoutButton}
                onPress={handleLogout}
              />
            ) : undefined,
          headerStyle: {
            height: 98,
            borderBottomColor: "rgba(0, 0, 0, 0.30)",
            borderBottomWidth: 1,
          },
          tabBarStyle: {
            borderTopColor: "rgba(0, 0, 0, 0.30)",
            borderTopWidth: 1,
            height: 93,
          },
          tabBarShowLabel: false,
          tabBarIcon: () => {
            let iconSource;
            const postsTab = route.name === Screens.Posts;
            const createPostTab = route.name === Screens.CreatePosts;
            const profileTab = route.name === Screens.Profile;
            if (postsTab) {
              iconSource = MenuIcon;
            } else if (createPostTab) {
              iconSource = PlusIcon;
            } else if (profileTab) {
              iconSource = ProfileIcon;
            }

            return (
              <View
                style={{
                  width: createPostTab ? 70 : 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: createPostTab ? "#FF6C00" : "#fff",
                }}
              >
                <Image
                  source={iconSource}
                  style={{
                    width: createPostTab ? 13 : 24,
                    height: createPostTab ? 13 : 24,
                    tintColor: createPostTab ? "#fff" : undefined,
                  }}
                />
              </View>
            );
          },
        })}
      >
        <Tabs.Screen
          name={Screens.Posts}
          component={PostsScreen}
          options={{ headerTitle: ScreensTitles.Posts }}
        />
        <Tabs.Screen
          name={Screens.CreatePosts}
          component={CreatePostsScreen}
          options={{
            tabBarStyle: { display: "none" },
            headerTitle: ScreensTitles.CreatePosts,
          }}
        />
        <Tabs.Screen
          name={Screens.Profile}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tabs.Navigator>
    </View>
  );
}
