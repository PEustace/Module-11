import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
export default function BookmarkButton({ isBookmarked, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && { opacity: 0.6 },
      ]}
    >
      <Ionicons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        size={24}
        color={Colors.accent200}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 4,
  },
});
