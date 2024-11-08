import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import stylesLogin from "@/screens/stylesLogin";

interface RegistrationButtonProps extends TouchableOpacityProps {
  text: string;
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  text,
  ...props
}) => {
  return (
    <TouchableOpacity style={stylesLogin.buttonLogin} {...props}>
      <Text style={stylesLogin.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
