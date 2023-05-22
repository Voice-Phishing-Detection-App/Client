import { FlatList, StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const PhisingListScreen = () => {
  const List = [
    {
      id: 1,
      task: [
        '저금리 대출 관련해서 보이스피싱',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
      isDone: false,
    },
    {
      id: 2,
      task: [
        '저금리 대출 관련해서 보이스피싱',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
      isDone: true,
    },
    {
      id: 3,
      task: [
        '저금리 대출 관련해서 보이스피싱',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
      isDone: false,
    },
    {
      id: 4,
      task: [
        '저금리 대출 관련해서 보이스피싱',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
      isDone: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={List}
        renderItem={({ item }) => <ListItem name="PhisingList" item={item} />}
        windowSize={5}
        // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{ height: 10 }}
      />
    </SafeAreaView>
  );
};

export default PhisingListScreen;
