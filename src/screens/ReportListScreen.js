import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import EmptyList from '../components/EmptyList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const ReportListScreen = () => {
  const List = [
    {
      id: 1,
      task: [
        '금융권 사칭',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
    },
    {
      id: 2,
      task: [
        '금융권 사칭',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
    },
    {
      id: 3,
      task: [
        '금융권 사칭',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
    },
    {
      id: 4,
      task: [
        '금융권 사칭',
        '2023-05-15',
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ],
    },
  ];

  return List.length ? (
    <View style={styles.container}>
      <FlatList
        data={List}
        renderItem={({ item }) => <ListItem name="PhisingList" item={item} />}
        windowSize={5}
        // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
        ListHeaderComponent={View}
        ListHeaderComponentStyle={{ height: 10 }}
      />
    </View>
  ) : (
    <EmptyList />
  );
};

export default ReportListScreen;
