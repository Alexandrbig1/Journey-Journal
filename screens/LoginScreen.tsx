import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import loginStyles from "../styles/stylesLogin";
import styles from "../styles/stylesRegistration";
import { PasswordIconBtn } from "@/components/passwordIconBtn";
import { RegistrationButton } from "@/components/mainButton";
import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TextInput,
} from "react-native";

const bgImg = require("../assets/images/registration.png");

export default function LoginScreen({ togglePage }: { togglePage: Function }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [focusedInput, setFocusedInput] = useState("");

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    if (password) {
      setSecureTextEntry(!secureTextEntry);
    }
  };

  const login = () => {
    if (!email || !password) {
      Alert.alert("Fill in all fields");
      return;
    }

    // Assuming cookies is a state or prop, you need to define it properly
    const cookies = {}; // Replace with actual cookies logic
    const user = cookies[email];
    if (!user) {
      Alert.alert("User not found");
      return;
    }

    if (user.password !== password) {
      Alert.alert("Incorrect password");
      return;
    }
    navigation.navigate("Home");
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
                  <RegistrationButton text="Login" onPress={login} />
                  <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => navigation.navigate("Registration")}
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
