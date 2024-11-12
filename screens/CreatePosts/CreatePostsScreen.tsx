import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import PickedImage from "@/components/pickImage";
import CameraIcon from "@/icons/CameraIcon";
import LocationIcon from "@/icons/LocationIcon";
import TrashIcon from "@/icons/TrashIcon";
import { RegistrationButton } from "@/components/mainButton";
import Inputs from "@/components/Inputs";
import styles from "./stylesCreatePosts";

export default function CreatePostsScreen() {
  const [title, setTitle] = useState<string>("");
  const [pinOnMap, setPinOnMap] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <PickedImage
          stylesImageWrapper={styles.imageWrapper}
          stylesImage={styles.image}
          stylesButton={styles.imageButton}
          stylesButtonIcon={styles.buttonIcon}
          buttonIcon={CameraIcon}
        />
        <Text style={styles.text}>Download a photo</Text>
      </View>
      <Input
        classNameInput={styles.textInput}
        classNameFocusedInput={styles.textInputFocused}
        textContentType="name"
        placeholder="Name..."
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.mapWrapper}>
        <Image source={LocationIcon} style={styles.mapIcon} />
        <Inputs
          classNameInput={[styles.textInput, styles.textInputMap]}
          classNameFocusedInput={styles.textInputFocused}
          textContentType="location"
          placeholder="Location..."
          value={pinOnMap}
          onChangeText={setPinOnMap}
        />
      </View>
      <RegistrationButton
        text="Publish"
        classNameButton={styles.buttonSubmit}
        classNameText={styles.buttonSubmitText}
        onPress={() => {}}
      />
      <TouchableOpacity style={styles.buttonDelete} onPress={() => {}}>
        <Image source={TrashIcon} style={styles.buttonDeleteIcon} />
      </TouchableOpacity>
    </View>
  );
}
