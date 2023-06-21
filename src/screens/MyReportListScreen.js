import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from '../components/ListItem';
import EmptyList from '../components/EmptyList';
import { useEffect, useState } from 'react';
import { url } from '../url';
import * as SecureStore from 'expo-secure-store';

const typeToTitle = {
  REPORT_TYPE_FRAUD: '사기',
  REPORT_TYPE_IMPERSONATING: '사칭',
  REPORT_TYPE_INDUCE: '설치유도',
  REPORT_TYPE_DISGUISE: '사고빙자',
};

const MyReportListScreen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    check();
  }, []);

  const check = async () => {
    const token = await SecureStore.getItemAsync('Token');
    try {
      if (token !== null) {
        fetch(`${url}/report/get`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            data = data.map((item) => {
              return {
                ...item,
                type: typeToTitle[item.type] || item.type,
              };
            });
            console.log(data);
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
    <View style={styles.container}>
      <FlatList
        data={list}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyReportListScreen;
