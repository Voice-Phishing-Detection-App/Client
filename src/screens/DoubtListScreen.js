import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../color';
import { useState } from 'react';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const DoubtListScreen = () => {
  const [list, setList] = useState([
    {
      type: '2023-05-15 오후 7:33 통화내역',
      registrationDate: null,
      phoneNumber: '0100333000',
    },
    {
      type: '33323-05-15 오후 7:33 통화내역',
      registrationDate: null,
      phoneNumber: '01000099000',
    },
  ]);

  return list.length ? (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <ListItem name="DoubtList" item={item} list={list} />
      )}
      windowSize={5}
      // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      ListHeaderComponent={View}
      ListHeaderComponentStyle={{ height: 10 }}
    />
  ) : (
    <EmptyList />
  );
};

export default DoubtListScreen;
