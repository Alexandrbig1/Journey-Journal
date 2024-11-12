import { useState } from "react";
import { Alert, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import PickedImage from "@/components/pickImage";
import CameraIcon from "@/icons/CameraIcon";
import LocationIcon from "@/icons/LocationIcon";
import TrashIcon from "@/icons/TrashIcon";
import { RegistrationButton } from "@/components/mainButton";
import styles from "./stylesCreatePosts";
import IconInput from "@/components/iconInut";
import ButtonIcon from "@/components/buttonIcon";

export default function CreatePostsScreen() {
  const navigation = useNavigation();
  const {
    params: { cookies, user },
  } = useRoute();
  const [title, setTitle] = useState<string>("");
  const [pinOnMap, setPinOnMap] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const createPost = () => {
    if (!title || !pinOnMap || !selectedImage) {
      Alert.alert("Please fill in all fields");
      return;
    }
    const newPost = {
      id: Date.now().toString(),
      owner: user.email,
      title,
      location: pinOnMap,
      image: selectedImage,
      comments: [],
    };
    const updatedPosts = cookies.posts
      ? [...cookies.posts, newPost]
      : [newPost];
    cookies.set("posts", { posts: updatedPosts });
    setSelectedImage(undefined);
    setTitle("");
    setPinOnMap("");
    navigation.navigate("Publications", { cookies, user });
  };
  const deletePost = () => {
    setSelectedImage(undefined);
    setTitle("");
    setPinOnMap("");
    navigation.navigate("Publications", { cookies, user });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <PickedImage
          stylesImageWrapper={styles.imageWrapper}
          stylesImage={styles.image}
          stylesButton={[
            styles.imageButton,
            selectedImage && styles.imageButtonReady,
          ]}
          stylesButtonIcon={[
            styles.buttonIcon,
            selectedImage && styles.buttonIconReady,
          ]}
          deleteImageFunc={false}
          image={selectedImage}
          handleSelectedImage={setSelectedImage}
          buttonIcon={CameraIcon}
        />
        <Text style={styles.text}>
          {selectedImage ? "Edit photo" : "Download a photo"}
        </Text>
      </View>
      <Input
        classNameInput={styles.textInput}
        classNameFocusedInput={styles.textInputFocused}
        textContentType="name"
        placeholder="Name..."
        value={title}
        onChangeText={setTitle}
      />
      <IconInput
        iconSource={LocationIcon}
        placeholder="Location..."
        textContentType="location"
        value={pinOnMap}
        onChangeText={setPinOnMap}
        classNameWrapper={styles.mapWrapper}
        classNameInput={[styles.textInput, styles.textInputMap]}
        classNameFocusedInput={styles.textInputFocused}
        classNameIcon={styles.mapIcon}
      />
      <RegistrationButton
        text="Publish"
        classNameButton={[
          styles.buttonSubmit,
          selectedImage && title && pinOnMap && styles.buttonSubmitReady,
        ]}
        classNameText={[
          styles.buttonSubmitText,
          selectedImage && title && pinOnMap && styles.buttonSubmitTextReady,
        ]}
        onPress={createPost}
      />
      <ButtonIcon
        classNameButton={styles.buttonDelete}
        classNameIcon={styles.buttonDeleteIcon}
        icon={TrashIcon}
        onPress={deletePost}
      />
      <TouchableOpacity style={styles.buttonDelete} onPress={() => {}}>
        <Image source={TrashIcon} style={styles.buttonDeleteIcon} />
      </TouchableOpacity>
    </View>
  );
}
