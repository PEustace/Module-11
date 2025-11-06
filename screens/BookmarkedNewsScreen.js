import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import List from "../components/List/List";
import { NEWS } from "../data/dummy_data";

function BookmarkedNewsScreen() {
  const bookmarksCtx = useContext(BookmarksContext);

  const bookmarkedNews = NEWS.filter((newsItem) =>
    bookmarksCtx.ids.includes(newsItem.id)
  );

  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No news bookmarked yet!</Text>
      </View>
    );
  }
  else {
    console.log(bookmarkedNews)
    return <List data={bookmarkedNews} category={"all"}/>;
  }
  
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BookmarkedNewsScreen;
