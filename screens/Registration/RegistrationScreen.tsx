import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Cookie } from "universal-cookie/cjs/types";
import * as ImagePicker from "expo-image-picker";
import { RegistrationButton } from "@/components/mainButton";
import styles from "./stylesRegistration";
import loginStyles from "../Login/stylesLogin";
import {
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Pressable,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

const bgImg = require("../../assets/images/registration.png");

export default function RegistrationScreen({
  togglePage,
}: {
  togglePage: Function;
}) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [focusedInput, setFocusedInput] = useState("");

  const navigation = useNavigation();
  const cookies = route.params.cookies;

  const pickImageHandler = () => {
    if (selectedImage) {
      setSelectedImage(undefined);
    } else {
      pickImage();
    }
  };

  const pickImage = async () => {
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
    }
  };

  const registration = () => {
    if (!login || !email || !password || !selectedImage) {
      Alert.alert("Fill in all fields");
      return;
    }
    const cookie: Cookie = {
      name: login,
      email: email,
      password: password,
      image: selectedImage,
      loggedIn: true,
    };
    cookies.set(email, cookie);
    navigation.navigate("Home", { user: cookie });
  };

  const togglePasswordVisibility = () => {
    if (password) {
      setSecureTextEntry(!secureTextEntry);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={bgImg} resizeMode="cover" style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.select({
              ios: -200,
              android: 0,
            })}
            style={styles.keyboardContainer}
          >
            <View style={styles.formContainer}>
              <View style={styles.avatarWrapper}>
                <Image
                  key={selectedImage ? selectedImage : "default"}
                  source={{ uri: selectedImage }}
                  style={styles.downloadedImage}
                />
                <Pressable
                  style={selectedImage ? styles.deleteButton : styles.addButton}
                  onPress={pickImageHandler}
                >
                  <Text
                    style={selectedImage ? styles.deleteIcon : styles.addIcon}
                  >
                    &#43;
                  </Text>
                </Pressable>
              </View>
              <Text style={styles.header2}>Register</Text>
              <View style={loginStyles.formWrapper}>
                <View style={loginStyles.innerWrapper}>
                  <TextInput
                    placeholder="Enter Your Name"
                    textContentType="nickname"
                    value={login}
                    onChangeText={setLogin}
                    style={[
                      styles.textInput,
                      focusedInput === "login" && styles.focusedInput,
                    ]}
                    onFocus={() => setFocusedInput("login")}
                    onBlur={() => setFocusedInput("")}
                  />
                  <TextInput
                    placeholder="Enter Your Email"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                    style={[
                      styles.textInput,
                      focusedInput === "email" && styles.focusedInput,
                    ]}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput("")}
                  />
                  <View style={styles.passwordWrapper}>
                    <TextInput
                      placeholder="Enter Your Password"
                      textContentType="password"
                      secureTextEntry={secureTextEntry}
                      value={password}
                      onChangeText={setPassword}
                      style={[
                        styles.textInput,
                        focusedInput === "password" && styles.focusedInput,
                      ]}
                      onFocus={() => setFocusedInput("password")}
                      onBlur={() => setFocusedInput("")}
                    />
                    <TouchableOpacity
                      onPress={togglePasswordVisibility}
                      style={styles.toggleButton}
                    >
                      <Text style={styles.toggleText}>
                        {secureTextEntry ? "show" : "hide"}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={loginStyles.innerWrapper}>
                  <RegistrationButton text="Register" onPress={registration} />
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.buttonTextLogin}>
                      Already have an account? Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
