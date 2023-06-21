import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../color';
import { useState } from 'react';
import ListItem from '../components/ListItem';
import { useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import { url } from '../url';
import * as SecureStore from 'expo-secure-store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DoubtListScreen = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    try {
      const token = await SecureStore.getItemAsync('Token');
      if (token !== null) {
        // 토큰을 사용하여 fetch 실행
        fetch(`${url}/doubt/get`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // 토큰 사용
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // API 응답 처리
            console.log('doubtlistpage:', data);
            setList(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (e) {
      // 토큰 추출 에러
      console.error(e);
    }
  };

  return list.length ? (
    <FlatList
      data={list}
      renderItem={({ item }) => <ListItem name="DoubtList" item={item} />}
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
