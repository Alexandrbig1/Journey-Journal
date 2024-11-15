import React from "react";
import { View, Text, Image } from "react-native";
import { formatDate } from "@/utils/formatDate";
import styles from "./stylesComment";

type PostComment = {
  id: string;
  text: string;
  date: string;
  email: string;
};

const Comment = ({
  comment,
  userImage,
  stylesComment,
}: {
  comment: PostComment;
  userImage?: string;
  stylesComment?: any;
}) => {
  return (
    <View style={[styles.commentContainer, stylesComment]}>
      <Image
        source={userImage ? { uri: userImage } : undefined}
        style={styles.avatar}
      />
      <View style={styles.commentContent}>
        <Text style={styles.commentText}>{comment.text}</Text>
        <Text style={styles.commentDate}>{formatDate(comment.date)}</Text>
      </View>
    </View>
  );
};

export default Comment;
