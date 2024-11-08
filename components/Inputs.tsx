import { TextInput, View } from "react-native";
import { inputStyles } from "@/styles/inputs";
import { FC } from "react";

type InputsProps = {
  placeholder?: string;
};

const Inputs: FC<InputsProps> = ({ placeholder }) => {
  return (
    <View style={inputStyles}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};

export default Inputs;
