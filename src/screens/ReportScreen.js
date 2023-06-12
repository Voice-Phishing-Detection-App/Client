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
  const doubtList = route.params ? route.params.doubtList : [];
  // const [doubtList, setDoubtList] = useState([]); //통신으로 받아와야함
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [type, setType] = useState(null);
  const [typeList, setTypeList] = useState([
    '사기',
    '사칭',
    '설치유도',
    '사고빙자',
  ]);
  const [content, setContent] = useState('');
  const [doubtId, setDoubtId] = useState(''); //있을때 없을때 구분필요
  const { doubt } = route.params;
  const { num } = route.params;

  useEffect(() => {
    if (doubt && num) {
      setSelectDoubt(doubt);
      setPhoneNumber(num);
    }
  }, [doubt, num]);

  const onReport = async () => {
    try {
      const token = await SecureStore.getItemAsync('Token');
      if (token !== null) {
        // 토큰을 사용하여 fetch 실행
        fetch(`${url}/report/search`, {
          method: 'POST',
          body: JSON.stringify({
            type: type,
            content: content,
            phoneNumber: phoneNumber,
            voiceId: voiceId, //어떻게?
            doubtId: doubtId, //어떻게?
          }), // 여기 통신할거 json 형식으로 넣기
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // 토큰 사용
          },
        }).catch((error) => {
          console.error(error);
        });
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
            onValueChange={(itemValue, itemIndex) => setSelectDoubt(itemValue)}
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
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
      >
        {typeList.map((rl, index) => (
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
