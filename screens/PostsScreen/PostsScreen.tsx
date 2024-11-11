import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, Image } from "react-native";
import styles from "./stylesPostsScreen";

export default function PostsScreen() {
  const {
    params: { cookies, user },
  } = useRoute();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={{
            uri: user.image,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textName}>{user.name}</Text>
          <Text style={styles.textEmail}>{user.email}</Text>
        </View>
      </View>
    </View>
  );
}
