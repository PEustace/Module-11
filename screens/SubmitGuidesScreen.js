import { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Colors from "../constants/Colors";
import Guides from "../models/guides.js";
import Toast from "react-native-toast-message";
import { GUIDES } from "../data/dummy_data";

const DEFAULT_IMAGE_URL = "https://www.shutterstock.com/image-vector/technology-typography-hand-drawn-brush-600w-1835086405.jpg";

function SubmitGuidesScreen({ navigation }) {
  const [type, setType] = useState("hardware");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [guideText, setGuideText] = useState("");

  function submitHandler() {
  if (!title || !author || !guideText) {
    Toast.show({ text1: "All fields required." });
    return;
  }

  const newGuide = new Guides(
    Date.now().toString(),
    title,
    new Date().toISOString(),
    author,
    "",
    guideText,
    imageUrl.trim() === "" ? DEFAULT_IMAGE_URL : imageUrl,
    type
  );

  GUIDES.push(newGuide);

  Toast.show({ text1: "Guide submitted successfully!" });
  setAuthor("");
  setTitle("");
  setGuideText("");
  setImageUrl("");
  setType("hardware");
  navigation.goBack();
}

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Type</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={type}
            style={styles.picker}
            onValueChange={(itemValue) => setType(itemValue)}
          >
            <Picker.Item label="Hardware" value="hardware" />
            <Picker.Item label="Software" value="software" />
            <Picker.Item label="Purchase" value="purchase" />
          </Picker>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Author</Text>
        <TextInput
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          value={imageUrl}
          onChangeText={setImageUrl}
          placeholder="Default Image"
          placeholderTextColor={Colors.primary50008}
        />
      </View>

      <View style={styles.guideBox}>
        <Text style={styles.label}>Guide Text</Text>
        <TextInput
          style={styles.guideInput}
          value={guideText}
          onChangeText={setGuideText}
        />
      </View>

      <Pressable style={styles.submitButton} onPress={submitHandler}>
        <Text style={styles.submitText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.primary500
  },
  row: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: Colors.accent200,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary300,
    padding: 10,
    borderRadius: 6,
    backgroundColor: Colors.primary300
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: Colors.primary300,
    borderRadius: 6,
    backgroundColor: Colors.primary300,
  },
  picker: {
    color: Colors.primary300,
  },
  guideBox: {
    marginTop: 10,
    marginBottom: 20,
  },
  guideInput: {
    borderWidth: 1,
    borderColor: Colors.primary300,
    padding: 12,
    borderRadius: 6,
    height: 150,
    textAlignVertical: "top",
    backgroundColor: Colors.primary30005
  },
  submitButton: {
    backgroundColor: Colors.accent500,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: Colors.primary300,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SubmitGuidesScreen;
