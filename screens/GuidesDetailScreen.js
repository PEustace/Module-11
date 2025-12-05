import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { GUIDES } from '../data/dummy_data';
import Colors from '../constants/Colors'
import React, { useContext, useLayoutEffect } from 'react';
import BookmarkButton from '../components/BookmarkButton';
import { BookmarksContext } from '../store/context/bookmarks-context';
import { useNavigation } from '@react-navigation/native';



export default function GuidesDetailScreen({ route }) {
  const navigation = useNavigation();
  const { guidesId } = route.params;
  const guides = GUIDES.find(n => n.id === guidesId);

  const bookmarksCtx = useContext(BookmarksContext);
  const isBookmarked = bookmarksCtx.ids.includes(guidesId);

  function toggleBookmarkHandler() {
    if (isBookmarked) {
      bookmarksCtx.removeBookmark(guidesId);
    } else {
      bookmarksCtx.addBookmark(guidesId);
    }
  }

  /*useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <BookmarkButton
          isBookmarked={isBookmarked}
          onPress={toggleBookmarkHandler}
        />
      ),
    });
  }, [navigation, isBookmarked]);*/


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: guides.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{guides.headline}</Text>
      <Text style={styles.info}>{guides.date} | {guides.agency}</Text>
      <Text style={styles.author}>By {guides.author}</Text>
      <Text style={styles.desc}>{guides.description}</Text>
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
