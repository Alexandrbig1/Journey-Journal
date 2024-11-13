import { useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import styles from "./stylesCameraScreen";

enum CameraFacing {
  BACK = "back",
  FRONT = "front",
}

enum CameraAction {
  TAKE_PHOTO = "Capture",
  FLIP = "Flip camera",
}
export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>(CameraFacing.BACK);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const navigator = useNavigation();
  const navigationState = useNavigationState((state) => state);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) =>
      current === CameraFacing.BACK ? CameraFacing.FRONT : CameraFacing.BACK
    );
  }

  async function takePhoto() {
    if (!cameraRef) return;
    const photo = await cameraRef?.current?.takePictureAsync();
    if (photo) {
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      const prevRoute = navigationState.routes[navigationState.index - 1];
      (navigator as any).navigate(prevRoute.name, {
        merge: true,
        photoUri: photo.uri,
      });
    }
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>{CameraAction.FLIP}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>{CameraAction.TAKE_PHOTO}</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
