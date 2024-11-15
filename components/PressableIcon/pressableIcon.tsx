import { useNavigation } from "@react-navigation/native";
import styles from "./stylesPressableIcon";
import PlusIcon from "@/icons/PlusIcon";
import {
  Pressable,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";

interface PressableIconProps {
  onPress?: () => void;
  icon?: ImageSourcePropType;
  buttonStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

export default function PressableIcon({
  onPress,
  icon = PlusIcon as ImageSourcePropType,
  buttonStyle,
  iconStyle,
}: PressableIconProps) {
  const navigator = useNavigation();
  const handleComeBack = () => {
    navigator.goBack();
  };

  return (
    <Pressable
      onPress={onPress || handleComeBack}
      style={buttonStyle ? buttonStyle : styles.button}
    >
      <Image source={icon} style={iconStyle ? iconStyle : styles.icon} />
    </Pressable>
  );
}
