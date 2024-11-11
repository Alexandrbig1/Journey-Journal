import { Text, View } from "react-native";
import styles from "./stylesProfileScreen";

export default function ProfileScreen({ route }: any) {
  const { user } = route.params;
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
}
