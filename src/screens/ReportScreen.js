import { StyleSheet, TextInput, View, ScrollView } from 'react-native';
import ReportBox from '../components/ReportBox';
import { useState } from 'react';
import IconText from '../components/IconText';
import { Picker } from '@react-native-picker/picker';
import { GRAY, PRIMARY, WHITE } from '../color';
import Sbtn from '../components/Sbtn';
import { url } from '../url';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';

const ReportScreen = ({ route, navigation }) => {
  const [select, setSelect] = useState(true);
  const [selectDoubt, setSelectDoubt] = useState(null);
  const [doubtList, setDoubtList] = useState([]);
  //그냥 선택해도 같이 전화번호 받아올 수 있어야함!
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [type, setType] = useState(null);
  const [ktype, setKType] = useState(null);
  const [typeList, setTypeList] = useState([
    'REPORT_TYPE_FRAUD',
    'REPORT_TYPE_IMPERSONATING',
    'REPORT_TYPE_INDUCE',
    'REPORT_TYPE_DISGUISE',
  ]);
  const [ktypeList, setKTypeList] = useState([
    '사기',
    '사칭',
    '설치유도',
    '사고빙자',
  ]);
  const [content, setContent] = useState('');
  const [doubtId, setDoubtId] = useState(route.params); //있을때 없을때 구분필요
  const token = SecureStore.getItemAsync('Token');
  const [filteredObject, setFilteredObject] = useState([]);
  useEffect(() => {
    console.log('id:', doubtId);
    try {
      if (doubtId !== undefined) {
        //doubtlist 돌면서 doubtID같은거 찾아서 그 안에 있는 object 만 가져오기
        // doubtId와 일치하는 객체만 가져오기
        setFilteredObject(doubtList.find((item) => item.doubtId === doubtId));
        // filteredObject를 이용하여 원하는 작업을 수행합니다.
        // 예를 들어, filteredObject의 title 값을 출력하고 싶다면:
        console.log(filteredObject.title);
      }
      if (token !== null) {
        // 토큰을 사용하여 fetch 실행
        fetch(`${url}/report/get`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // 토큰 사용
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // API 응답 처리
            //반복문 돌면서 ? doubtID같은거?
            setDoubtList(data);
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

  const onReport = async () => {
    console.log('신고');
    try {
      if (token !== null) {
        // 토큰을 사용하여 fetch 실행
        if (select) {
          fetch(`${url}/report/add`, {
            method: 'POST',
            body: JSON.stringify({
              type: type, //바꿔야함 영어뭐시기로
              title: filteredObject.title,
              content: content,
              phoneNumber: filteredObject.phoneNumber, //수정필요
              voiceId: filteredObject.voiceId, //수정필요
              doubtId: doubtId,
            }), // 여기 통신할거 json 형식으로 넣기
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // 토큰 사용
            },
          })
            .then((response) => response.json())
            .then((data) => {
              // API 응답 처리
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          fetch(`${url}/report/add/withoutDoubt`, {
            method: 'POST',
            body: JSON.stringify({
              type: type, //바꿔야함 영어뭐시기로
              title: selectDoubt,
              content: content,
              phoneNumber: phoneNumber,
            }), // 여기 통신할거 json 형식으로 넣기
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // 토큰 사용
            },
          })
            .then((response) => response.json())
            .then((data) => {
              // API 응답 처리
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    } catch (e) {
      // 토큰 추출 에러
      console.error(e);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <ReportBox text="통화 후 의심 판정 여부" />
      <View style={{ flexDirection: 'row' }}>
        <IconText
          text="예"
          name={select}
          onPress={() => {
            setSelect(true);
          }}
        />
        <IconText
          text="아니요"
          name={!select}
          onPress={() => {
            setSelect(false);
          }}
        />
      </View>
      {select && (
        <>
          <ReportBox text="의심 내역" />
          <Picker
            style={styles.picker}
            selectedValue={selectDoubt}
            onValueChange={(itemValue, itemIndex) => {
              setSelectDoubt(itemValue);
              setPhoneNumber(listNumber[itemIndex]);
            }}
          >
            {doubtList.map((doubt, index) => (
              <Picker.Item key={index} label={doubt} value={doubt} />
            ))}
          </Picker>
        </>
      )}
      <ReportBox text="전화번호 입력" />
      <View style={{ padding: 30 }}>
        <TextInput
          style={styles.phone}
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text.trim())}
          placeholder={phoneNumber == '' ? phoneNumber : '- 빼고 적어주세요'}
        />
      </View>
      <ReportBox text="신고 유형" />
      <Picker
        style={styles.picker}
        selectedValue={ktype}
        onValueChange={(itemValue, itemIndex) => {
          setType(typeList[itemIndex]);
          setKType(itemValue);
        }}
      >
        {ktypeList.map((rl, index) => (
          <Picker.Item key={index} label={rl} value={rl} />
        ))}
      </Picker>
      <ReportBox text="신고 내용(선택)" />
      <View style={{ padding: 30 }}>
        <TextInput
          style={[styles.phone, { height: 150 }]}
          value={content}
          onChangeText={setContent}
          placeholder="자유롭게 적어주세요"
        />
      </View>
      <Sbtn styles2={style2} title="신고" onPress={onReport} />
    </ScrollView>
  );
};

const style2 = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY.DEFAULT,
    width: 70,
    height: 40,
    marginLeft: '75%',
    marginBottom: '5%',
  },
  title: {
    color: WHITE,
    fontSize: 13,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  picker: { width: '80%', height: 70, marginLeft: 30 },
  phone: {
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: 45,
    borderColor: GRAY,
    paddingLeft: 20,
  },
});

export default ReportScreen;
