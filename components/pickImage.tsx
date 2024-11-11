import { useState } from "react";
import { View, Image, Pressable, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function PickedImage(props: any) {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const pickImage = async () => {
    if (selectedImage) {
      setSelectedImage(undefined);
      props.handleSelectedImage(undefined);
      return;
    }

    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Denied",
        "You need to enable permission to access photos."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      props.handleSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={props.stylesImageWrapper}>
      <Image
        key={selectedImage ? selectedImage : "default"}
        source={{ uri: selectedImage }}
        style={props.stylesImage}
      />
      <Pressable style={props.stylesButton} onPress={pickImage}>
        <Image style={props.stylesButtonIcon} source={props.buttonIcon} />
      </Pressable>
    </View>
  );
}
