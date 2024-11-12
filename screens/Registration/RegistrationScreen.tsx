import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Cookie } from "universal-cookie/cjs/types";
import PickedImage from "@/components/pickedImage";
import * as ImagePicker from "expo-image-picker";
import { RegistrationButton } from "@/components/mainButton";
import styles from "./stylesRegistration";
import loginStyles from "@/screens/Login/stylesLogin";
import { bgImg } from "@/utils/Images";

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
import AddImgIcon from "@/icons/AddImgIcon";
import Inputs from "@/components/Inputs";

export default function RegistrationScreen({
  togglePage,
}: {
  togglePage: Function;
}) {
  const { cookies } = useRoute().params;
  const [loginValue, setLoginValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [secureTextEntryValue, setSecureTextEntryValue] = useState(true);
  const [selectedImage, setSelectedImage] = useState(undefined);

  const navigation = useNavigation();
  const cookies = route.params.cookies;

  const togglePasswordVisibility = () => {
    setSecureTextEntryValue(!secureTextEntryValue);
  };

  const registration = () => {
    if (!loginValue || !emailValue || !passwordValue || !selectedImage) {
      Alert.alert("Fill in all fields");
      return;
    }
    const cookie: Cookie = {
      name: loginValue,
      email: emailValue,
      password: passwordValue,
      image: selectedImage,
      loggedIn: true,
    };
    cookies.set(emailValue, cookie);
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
              <PickedImage
                stylesImageWrapper={styles.avatarWrapper}
                stylesImage={styles.downloadedImage}
                stylesButton={
                  selectedImage ? styles.deleteButton : styles.addButton
                }
                stylesButtonIcon={
                  selectedImage ? styles.deleteIcon : styles.addIcon
                }
                buttonIcon={AddImgIcon}
                handleSelectedImage={setSelectedImage}
              ></PickedImage>
              <Text style={styles.header2}>Register</Text>
              <View style={loginStyles.formWrapper}>
                <View style={loginStyles.innerWrapper}>
                  <Inputs
                    placeholder="Enter Your Name"
                    textContentType="nickname"
                    value={loginValue}
                    classNameInput={styles.textInput}
                    classNameFocusedInput={styles.textInputFocused}
                    onChangeText={setLoginValue}
                  />
                  <Inputs
                    placeholder="Enter Your Email"
                    textContentType="emailAddress"
                    value={emailValue}
                    classNameInput={styles.textInput}
                    classNameFocusedInput={styles.textInputFocused}
                    onChangeText={setEmailValue}
                  />
                  <View style={styles.passwordWrapper}>
                    <Inputs
                      placeholder="Enter Your Password"
                      textContentType="password"
                      secureTextEntry={secureTextEntryValue}
                      value={passwordValue}
                      classNameInput={styles.textInput}
                      classNameFocusedInput={styles.textInputFocused}
                      onChangeText={setPasswordValue}
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
