import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 32,
    width: "100%",
    height: 60,
    gap: 8,
  },
  image: {
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: colors.input_bg_color,
  },
  textContainer: {
    justifyContent: "center",
  },
  textName: {
    color: colors.text_color_black,
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 19,
    fontWeight: 700,
  },
  textEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    fontWeight: 400,
  },
});
