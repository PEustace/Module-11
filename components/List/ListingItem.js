import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default function ListItem({ item, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.textBox}>
          <Text style={styles.title}>{item.headline}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: Colors.primary300,
        shadowColor: Colors.primary800,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary800,

    },
    date: {
        color: Colors.accent200,
    },
});
