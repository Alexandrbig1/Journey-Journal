import { TextInput, View, TextInputProps, StyleSheet } from "react-native";
import { FC } from "react";

type InputsProps = TextInputProps & {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  isFocused?: boolean;
};

const Inputs: FC<InputsProps> = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  isFocused,
  ...rest
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[styles.textInput, isFocused && styles.focusedInput]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 8,
  },
  textInput: {
    height: 50,
    width: "100%",
    borderRadius: 8,
    padding: 16,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "left",
    backgroundColor: "#F6F6F6",
  },
  focusedInput: {
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    color: "#212121",
  },
});

export default Inputs;
