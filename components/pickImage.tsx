import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { Alert } from "react-native";

const pickImage = async (): Promise<string | undefined> => {
  const permissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permissionResult.granted) {
    Alert.alert(
      "Permission Denied",
      "You need to enable permission to access photos."
    );
    return;
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled && result.assets.length > 0) {
    const resizedUri = await resizeImageString(result.assets[0].uri);
    if (!resizedUri) {
      throw Error("Could not resize image");
    }
    return resizedUri;
  }
};

const resizeImageString = async (uri: string) => {
  try {
    const manipResult = await ImageManipulator.manipulateAsync(
      uri,
      [{ resize: { width: 300, height: 300 } }],
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );
    return manipResult.uri;
  } catch (error) {
    console.error("Error resizing image:", error);
    return null;
  }
};

const getImage = async (
  uri: string
): Promise<{ imageBlob: Blob; fileName: string }> => {
  try {
    const response = await fetch(uri);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const blob = await response.blob();
    const fileName = uri.split("/").pop() || "image.jpg";
    return { imageBlob: blob, fileName };
  } catch (error) {
    console.error("Error converting image to Blob:", error);
    return { imageBlob: new Blob(), fileName: "" };
  }
};

export { pickImage, getImage };
