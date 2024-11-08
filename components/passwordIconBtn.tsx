import { TouchableOpacity, Text } from "react-native";
import styles from "../screens/stylesRegistration";

interface PasswordIconBtnProps {
  secureTextEntry: boolean;
  togglePasswordVisibility: () => void;
}

export const PasswordIconBtn: React.FC<PasswordIconBtnProps> = ({
  secureTextEntry,
  togglePasswordVisibility,
}) => {
  return (
    <TouchableOpacity
      style={styles.toggleButton}
      onPress={togglePasswordVisibility}
    >
      <Text>{secureTextEntry ? "Show" : "Hide"}</Text>
    </TouchableOpacity>
  );
};
