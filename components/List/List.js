import { FlatList } from 'react-native';
import ListItem from './ListingItem';
import { NEWS } from '../../data/dummy_data';

export default function List({ category, navigation, data }) {
  let filteredData = data ? data : NEWS;

  if (category && category !== "all") {
    filteredData = filteredData.filter(item => item.category === category);
  }

  return (
    <FlatList
      data={filteredData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ListItem
          item={item}
          onPress={() => navigation.navigate('NewsDetail', { newsId: item.id })}
        />
      )}
    />
  );
}
