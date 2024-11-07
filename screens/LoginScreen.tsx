import { Image, ImageBackground, View, Text } from "react-native";
import loginStyles from "./stylesLogin";
import bgImg from "../../assets/images/login.png";

const LoginScreen = () => {
  return (
    <View style={loginStyles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={loginStyles.image}
      >
        <View style={loginStyles.formContainer}>
          <Text style={loginStyles.title}>Login Form</Text>
        </View>
        <View style={loginStyles.innerWrapper}></View>
        <View style={loginStyles.innerWrapper}></View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
