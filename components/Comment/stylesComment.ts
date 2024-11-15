import { colors } from "@/styles/global";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentContent: {
    width: 267,
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: colors.text_color_black,
  },
  commentDate: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: colors.grey_text_color,
  },
});
