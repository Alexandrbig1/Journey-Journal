import React from "react";
import stylesLogin from "../screens/Login/stylesLogin";
import {
  TouchableOpacity,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface RegistrationButtonProps {
  text: string;
  onPress: () => void;
  classNameButton?: StyleProp<ViewStyle>;
  classNameText?: StyleProp<TextStyle>;
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  text,
  onPress,
  classNameButton,
  classNameText,
}) => {
  return (
    <TouchableOpacity
      style={[stylesLogin.buttonLogin, classNameButton]}
      onPress={onPress}
    >
      <Text style={[stylesLogin.buttonText, classNameText]}>{text}</Text>
    </TouchableOpacity>
  );
};
