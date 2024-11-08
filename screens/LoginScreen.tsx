import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import loginStyles from "./stylesLogin";
import styles from "./stylesRegistration";
import { PasswordIconBtn } from "@/components/passwordIconBtn";
import { RegistrationButton } from "@/components/mainButton";

const bgImg = require("../assets/images/registration.png");

export default function LoginScreen({ togglePage }: { togglePage: Function }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [focusedInput, setFocusedInput] = useState("");

  const togglePasswordVisibility = () => {
    if (password) {
      setSecureTextEntry(!secureTextEntry);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={loginStyles.container}>
        <ImageBackground
          source={bgImg}
          resizeMode="cover"
          style={loginStyles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            keyboardVerticalOffset={Platform.select({
              ios: -100,
              android: 0,
            })}
            style={styles.keyboardContainer}
          >
            <View style={loginStyles.formContainer}>
              <Text style={loginStyles.title}>Login</Text>
              <View style={loginStyles.formWrapper}>
                <View style={loginStyles.innerWrapper}>
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
                    <PasswordIconBtn
                      secureTextEntry={secureTextEntry}
                      togglePasswordVisibility={togglePasswordVisibility}
                    />
                  </View>
                </View>
                <View style={loginStyles.innerWrapper}>
                  <RegistrationButton text="Login" />
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => togglePage("registration")}
                  >
                    <Text style={styles.buttonTextLogin}>
                      Don't have an account? Register
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
