import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import { GRAY } from '../../color';

const Separator = () => {
  return <View style={styles.separator}></View>;
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
const DoubtListScreen = () => {
  const todos = [
    { id: 1, task: 'React Native 1', isDone: false },
    { id: 2, task: 'React Native 2', isDone: true },
    { id: 3, task: 'React Native 3', isDone: false },
    { id: 4, task: 'React Native 4', isDone: true },
  ];

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5}
      ItemSeparatorComponent={Separator}
      // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      ListHeaderComponent={View}
      ListHeaderComponentStyle={{ height: 10 }}
    />
  );
};

export default DoubtListScreen;
