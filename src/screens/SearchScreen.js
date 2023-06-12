import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
} from 'react-native';
import { BLACK, GRAY, PRIMARY, SBTN, WHITE } from '../color';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Sbtn from '../components/Sbtn';
import ReportList from '../components/ReportList';
import { useNavigation } from '@react-navigation/native';
import { url } from '../url';
import * as SecureStore from 'expo-secure-store';

const Left = 30;

const SearchScreen = () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // 실제 통신할때는 ''로 설정 -> ''일때는 신고정보 안보임
  const [count, setCount] = useState('');
  const [type, setType] = useState([]);
  const onCheck = async () => {
    try {
      const token = await SecureStore.getItemAsync('Token');
      if (token !== null) {
        // 토큰을 사용하여 fetch 실행
        fetch(`${url}/report/search`, {
          method: 'POST',
          body: JSON.stringify({ phoneNumber: phoneValue }), // 여기 통신할거 json 형식으로 넣기
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // 토큰 사용
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // API 응답 처리
            setPhoneNumber(data.phoneNumber);
            setCount(data.reportCount);
            setType(data.type);
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

  return (
    <View style={styles.container}>
      <View style={[styles.top, { backgroundColor: PRIMARY.DEFAULT }]}>
        <Text style={styles.title}>번호 조회</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.search}
            value={phoneValue}
            onChangeText={(text) => setPhoneValue(text.trim())}
            placeholder="전화번호 입력"
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
          <View style={styles.icon}>
            <AntDesign
              name="search1"
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return BLACK;
                  case !!phoneValue: {
                    return BLACK;
                  }
                  default:
                    return GRAY;
                }
              })()}
            />
          </View>
          <Sbtn styles2={style2} title={'조회'} onPress={onCheck} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middletext}>신고 정보</Text>
      </View>
      <ScrollView style={styles.bottom}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}
          onPress={() => {
            navigation.navigate('SearchList', { phoneNumber });
          }}
        >
          <AntDesign name="caretright" size={15} color="black" />
          <Text style={{ fontSize: 18, marginLeft: 15 }}>자세히 보기</Text>
        </Pressable>
        <ReportList list={'전화번호'} item={phoneNumber} />
        <ReportList list={'횟수'} item={count} />
        {Array.isArray(type) &&
          type.length > 0 &&
          type.map((item, index) => (
            <ReportList
              list={index === 0 ? '유형' : ''}
              item={item}
              key={index}
            />
          ))}
      </ScrollView>
    </View>
  );
};

const style2 = StyleSheet.create({
  container: { width: 50, height: 50, marginLeft: 13, borderRadius: 5 },
  title: { fontSize: 12, fontWeight: '600' },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1.5,
  },
  middle: {
    flex: 0.2,
    backgroundColor: SBTN.DEFAULT,
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
    backgroundColor: WHITE,
  },
  title: {
    fontSize: 23,
    color: WHITE,
    fontWeight: '700',
    padding: Left,
    marginTop: '10%',
  },
  search: {
    backgroundColor: WHITE,
    width: '70%',
    height: 50,
    borderRadius: 5,
    marginLeft: Left,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    marginLeft: Left + 10,
  },
  middletext: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: Left,
  },
});

export default SearchScreen;
