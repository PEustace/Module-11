import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import List from "../components/List/List";
import { GUIDES } from "../data/dummy_data";

function BookmarkedGuidesScreen() {
  const bookmarksCtx = useContext(BookmarksContext);

  const bookmarkedNews = GUIDES.filter((guidesItem) =>
    bookmarksCtx.ids.includes(guidesItem.id)
  );

  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No guides bookmarked yet!</Text>
      </View>
    );
  }
  else {
    console.log(bookmarkedGuides)
    return <List data={bookmarkedGuides} category={"all"}/>;
  }
  
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookmarkedGuidesScreen;
