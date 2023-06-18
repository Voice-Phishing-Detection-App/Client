import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import EmptyList from '../components/EmptyList';
import { useEffect, useState } from 'react';
import { url } from '../url';
import * as SecureStore from 'expo-secure-store';

const SearchListScreen = ({ route, navigation }) => {
  const [list, setList] = useState([]);
  const { phoneNumber } = route.params;
  // const [title, setTitle] = useState('');
  // const [date, setDate] = useState('');
  // const [content, setContent] = useState('');

  useEffect(() => {
    try {
      const token = SecureStore.getItemAsync('Token');
      if (token !== null) {
        // 토큰을 사용하여 fetch 실행
        fetch(`${url}/report/searchList`, {
          method: 'POST',
          body: JSON.stringify({ phoneNumber: phoneNumber }), // 여기 통신할거 json 형식으로 넣기
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // 토큰 사용
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // API 응답 처리
            console.log(list);
            setList(data);
            console.log(list);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (e) {
      // 토큰 추출 에러
      console.error(e);
    }
  }, []);

  return list.length ? (
    <View style={styles.container}>
      <FlatList
        data={list}
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
