import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { NEWS } from '../data/dummy_data';
import Colors from '../constants/Colors'
import React, { useContext, useLayoutEffect } from 'react';
import BookmarkButton from '../components/BookmarkButton';
import { BookmarksContext } from '../store/context/bookmarks-context';
import { useNavigation } from '@react-navigation/native';



export default function NewsDetailScreen({ route }) {
  const navigation = useNavigation();
  const { newsId } = route.params;
  const news = NEWS.find(n => n.id === newsId);

  const bookmarksCtx = useContext(BookmarksContext);
  const isBookmarked = bookmarksCtx.ids.includes(newsId);

  function toggleBookmarkHandler() {
    if (isBookmarked) {
      bookmarksCtx.removeBookmark(newsId);
    } else {
      bookmarksCtx.addBookmark(newsId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <BookmarkButton
          isBookmarked={isBookmarked}
          onPress={toggleBookmarkHandler}
        />
      ),
    });
  }, [navigation, isBookmarked]);


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: news.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{news.headline}</Text>
      <Text style={styles.info}>{news.date} | {news.agency}</Text>
      <Text style={styles.author}>By {news.author}</Text>
      <Text style={styles.desc}>{news.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: 
    { 
        flex: 1, 
        padding: 10, 
        backgroundColor: Colors.primary300 
    },
    title: 
    { 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginVertical: 10, 
        color: 
        Colors.primary800 
    },
    info: 
    { 
        color: Colors.accent200 
    },
    author: 
    { 
        fontStyle: 'italic', 
        marginBottom: 10, 
        color: Colors.primary500 
    },
    desc: 
    { 
        fontSize: 16, 
        lineHeight: 22, 
        color: Colors.primary500 
    },

});
