import { FlatList, View } from 'react-native';
import { useState } from 'react';
import ListItem from '../components/ListItem';
import { useEffect } from 'react';
import EmptyList from '../components/EmptyList';
import { url } from '../url';
import * as SecureStore from 'expo-secure-store';

const DoubtListScreen = () => {
  const [list, setList] = useState([]);

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

  useEffect(() => {
    check();
  }, []);
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
