import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import stylesLogin from "../screens/Login/stylesLogin";

interface RegistrationButtonProps {
  text: string;
  onPress: () => void;
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity style={stylesLogin.buttonLogin} onPress={onPress}>
      <Text style={stylesLogin.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
