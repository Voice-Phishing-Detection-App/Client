import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import { WHITE } from '../../color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const DoubtListScreen = () => {
  const Lists = [
    {
      id: 1,
      task: ['2023-05-15 오후 7:33 통화내역', '2023-05-15'],
      isDone: false,
    },
    {
      id: 2,
      task: ['2023-05-15 오후 7:33 통화내역', '2023-05-15'],
      isDone: true,
    },
    {
      id: 3,
      task: ['2023-05-15 오후 7:33 통화내역', '2023-05-15'],
      isDone: false,
    },
    {
      id: 4,
      task: ['2023-05-15 오후 7:33 통화내역', '2023-05-15'],
      isDone: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Lists}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
        // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{ height: 10 }}
      />
    </SafeAreaView>
  );
};

export default DoubtListScreen;
