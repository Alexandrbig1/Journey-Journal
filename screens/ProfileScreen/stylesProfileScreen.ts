import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    paddingTop: 147,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  regWrapper: {
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
  },
  scrollView: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
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
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    tintColor: colors.orange_color,
    width: 13,
    height: 13,
  },
  deleteIcon: {
    tintColor: colors.grey_text_color,
    width: 13,
    height: 13,
    transform: [{ rotate: "45deg" }],
  },
  header2: {
    padding: 0,
    marginTop: 92,
    color: colors.text_color_black,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "medium",
    textAlign: "center",
  },
});
