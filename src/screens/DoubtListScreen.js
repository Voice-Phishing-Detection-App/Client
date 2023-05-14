import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import { GRAY, PRIMARY, WHITE } from '../../color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 17,
    backgroundColor: PRIMARY.DEFAULT,
  },
  headertxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: WHITE,
  },
});
const DoubtListScreen = () => {
  const todos = [
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>의심 내역</Text>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => <ListItem item={item} />}
        windowSize={5}
        // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{ height: 10 }}
      />
    </View>
  );
};

export default DoubtListScreen;
