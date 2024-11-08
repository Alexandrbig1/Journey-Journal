import { colors } from "@/styles/global";
import { Dimensions, StyleSheet } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "50%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
    // position: "absolute",
    // bottom: 0,
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 32,
  },
  title: {
    color: colors.black_primary,
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  innerWrapper: {
    gap: 16,
  },
  formWrapper: {
    gap: 42,
  },
  buttonLogin: {
    padding: 16,
    width: "100%",
    borderRadius: 100,
    backgroundColor: colors.orange_color,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    textAlign: "center",
  },
});
