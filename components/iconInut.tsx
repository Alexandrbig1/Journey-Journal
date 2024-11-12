import { useState } from "react";
import { View, TextInput, Image } from "react-native";

export default function IconInput(props: any) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[props.classNameWrapper, isFocused && props.classNameFocusedInput]}
    >
      <Image source={props.iconSource} style={props.classNameIcon} />
      <TextInput
        placeholder={props.placeholder}
        textContentType={props.textContentType}
        value={props.value}
        onChangeText={props.onChangeText}
        style={[props.classNameInput, isFocused && props.classNameFocusedInput]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
