import { TouchableOpacity, Image } from "react-native";

export default function ButtonIcon(props: any) {
  return (
    <TouchableOpacity style={props.classNameButton} onPress={props.onPress}>
      <Image source={props.icon} style={props.classNameIcon} />
    </TouchableOpacity>
  );
}
