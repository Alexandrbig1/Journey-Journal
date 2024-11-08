import {
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import loginStyles from "./stylesLogin";
import Inputs from "@/components/Inputs";
import styles from "./stylesRegistration";

const bgImg = require("../assets/images/registration.png");

const LoginScreen = ({ togglePage }: { togglePage: Function }) => {
  return (
    <View style={loginStyles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={loginStyles.image}
      >
        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.title}>Login</Text>
          <View style={loginStyles.formWrapper}>
            <View style={loginStyles.innerWrapper}>
              <Inputs placeholder="Enter Your Email" />
              <Inputs placeholder="Enter Your Password" />
            </View>
            <View style={loginStyles.innerWrapper}>
              <TouchableOpacity style={loginStyles.buttonLogin}>
                <Text style={styles.buttonTextReg}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonLogin}
                onPress={() => togglePage("registration")}
              >
                <Text style={styles.buttonTextLogin}>
                  Don't have account? Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
