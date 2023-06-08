import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import EmptyList from '../components/EmptyList';
import { useState } from 'react';

const SearchListScreen = () => {
  const [List, setList] = useState([
    {
      id: 1,
      task: ['금융권 사칭', '2023-05-15'],
    },
    {
      id: 2,
      task: ['금융권 사칭', '2023-05-15'],
    },
  ]);

  return List.length ? (
    <View style={styles.container}>
      <FlatList
        data={List}
        renderItem={({ item }) => <ListItem name="PhisingList" item={item} />}
        windowSize={5}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{ height: 10 }}
      />
    </View>
  ) : (
    <EmptyList />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchListScreen;
