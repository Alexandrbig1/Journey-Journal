import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import PlusIcon from "@/icons/PlusIcon";
import { useDispatch, useSelector } from "react-redux";
import Comment from "@/components/Comment/comment";
import { PostScreenRouteProp } from "@/utils/interfaces/routeParams";
import { PostType, PostComment } from "@/utils/types/post";
import { getPostById, updateComments } from "@/utils/firestore";
import styles from "./stylesComments";
import {
  View,
  Image,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function CommentsScreen() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  const route = useRoute<PostScreenRouteProp>();
  const postRedux = route.params?.post as PostType;
  const [post, setPost] = useState<PostType>(postRedux);
  const [comment, setComment] = useState("");

  const handleComment = () => {
    if (comment) {
      const newComment: PostComment = {
        id: Date.now().toString(),
        text: comment,
        date: new Date().toISOString(),
        email: currentUser.email,
      };
      updateComments(currentUser.userId, postRedux.id, newComment);
      setComment("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostById(currentUser.userId, postRedux.id);
      if (data) {
        setPost(data);
      }
    };

    fetchData();
  }, [postRedux, handleComment]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.select({
          ios: 100,
          android: 0,
        })}
        style={styles.keyboardContainer}
      >
        <View style={styles.container}>
          {post.image ? (
            <Image source={{ uri: post.image }} style={styles.image} />
          ) : (
            <Text style={styles.image}>Image not available</Text>
          )}
          <ScrollView contentContainerStyle={styles.commentsList}>
            {post.comments &&
              Object.values(post.comments).length > 0 &&
              (Object.values(post.comments) as unknown as PostComment[]).map(
                (commentData: PostComment) => (
                  <Comment
                    key={commentData.id}
                    comment={commentData}
                    userImage={
                      currentUser.image ? currentUser.image : undefined
                    }
                    stylesComment={
                      commentData.email === post.owner
                        ? styles.commentOwner
                        : styles.commentUser
                    }
                  />
                )
              )}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Коментувати..."
              value={comment}
              onChangeText={setComment}
            />
            <Pressable style={styles.sendButton} onPress={handleComment}>
              <PlusIcon style={styles.sendIcon} />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
