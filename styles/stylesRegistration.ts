import { colors } from "@/styles/global";
import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  keyboardContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: 549,
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 32,
  },
  avatarWrapper: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: "auto",
    height: "auto",
  },
  downloadedImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.input_bg_color,
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: colors.orange_color,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: colors.white,
  },
  deleteButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: colors.input_border_color,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: colors.white,
  },
  addIcon: {
    color: colors.orange_color,
    fontSize: 25,
    lineHeight: 26,
    fontFamily: "Roboto-Light",
    fontWeight: "thin",
    textAlign: "center",
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    color: colors.grey_text_color,
    fontSize: 25,
    lineHeight: 26,
    fontFamily: "Roboto-Light",
    fontWeight: "thin",
    textAlign: "center",
    width: "100%",
    height: "100%",
    transform: [{ rotate: "45deg" }],
  },
  header2: {
    padding: 0,
    color: colors.text_color_black,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "medium",
    textAlign: "center",
    marginTop: 48,
  },
  inputWrapper: {
    marginTop: 32,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    width: "100%",
    maxHeight: 343,
  },
  textInput: {
    height: 50,
    width: "100%",
    borderRadius: 8,
    padding: 16,
    borderColor: colors.input_border_color,
    borderWidth: 1,
    borderStyle: "solid",
    color: colors.grey_text_color,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "left",
    backgroundColor: colors.input_bg_color,
  },
  focusedInput: {
    borderColor: colors.orange_color,
    backgroundColor: colors.white,
    color: "#212121",
  },
  passwordWrapper: {
    position: "relative",
    width: "100%",
  },
  toggleButton: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  toggleText: {
    color: colors.main_text_Color,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    fontWeight: "regular",
  },
  buttonReg: {
    marginTop: 43,
    height: 50,
    width: "100%",
    borderRadius: 100,
    backgroundColor: colors.orange_color,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextReg: {
    color: colors.white,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "center",
  },
  buttonLogin: {
    height: 19,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextLogin: {
    color: colors.main_text_Color,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "center",
  },
});
