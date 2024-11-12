import { useEffect, useState } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import PickedImage from "@/components/pickImage";
import styles from "./stylesProfileScreen";
import { bgImg } from "@/utils/Images";
import PlusIcon from "@/icons/PlusIcon";

export default function ProfileScreen() {
  const {
    params: { cookies, user },
  } = useRoute();
  const [selectedImageValue, setSelectedImageValue] = useState<
    string | undefined
  >(user.image);
  useEffect(() => {
    if (!selectedImageValue) {
      cookies.set(user.email, { ...user, image: "" });
    } else {
      cookies.set(user.email, { ...user, image: selectedImageValue });
    }
  }, [selectedImageValue]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
        <View style={styles.regWrapper}>
          <PickedImage
            stylesImageWrapper={styles.avatarWrapper}
            stylesImage={styles.downloadedImage}
            stylesButton={
              selectedImageValue ? styles.deleteButton : styles.addButton
            }
            stylesButtonIcon={
              selectedImageValue ? styles.deleteIcon : styles.addIcon
            }
            buttonIcon={PlusIcon}
            handleSelectedImage={setSelectedImageValue}
          ></PickedImage>
          <Text style={styles.header2}>{user.name}</Text>
          <ScrollView style={styles.scrollView}></ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
