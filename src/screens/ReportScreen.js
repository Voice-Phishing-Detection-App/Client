import { StyleSheet, Text, TextInput, View } from 'react-native';
import ReportBox from '../components/ReportBox';
import { useState } from 'react';
import IconText from '../components/IconText';
import { Picker } from '@react-native-picker/picker';
import { GRAY } from '../../color';

const ReportScreen = () => {
  const [select, setSelect] = useState(true);
  const [selectDoubt, setSelectDoubt] = useState(null);
  //   const [doubtList, setDoubtList] = useState([]);
  const [doubtList, setDoubtList] = useState([
    '2023-04-25 오후 7:33 통화내역',
    '2023-04-26 오후 10:33 통화내역',
    '2023-04-27 오후 7:33 통화내역',
  ]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState(null);
  const [reasonList, setReasonList] = useState(['대출 사기', '수사기관 사칭']);
  const [report, setReport] = useState('');

  return (
    <View style={styles.container}>
      <ReportBox text="통화 후 의심 판정 여부" />
      <View style={{ flexDirection: 'row' }}>
        <IconText
          text="예"
          name={!select}
          onPress={() => {
            setSelect(true);
          }}
        />
        <IconText
          text="아니요"
          name={select}
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
          placeholder="- 빼고 적어주세요"
        />
      </View>
      <ReportBox text="신고 사유" />
      <Picker
        style={styles.picker}
        selectedValue={reason}
        onValueChange={(itemValue, itemIndex) => setReason(itemValue)}
      >
        {reasonList.map((rl, index) => (
          <Picker.Item key={index} label={rl} value={rl} />
        ))}
      </Picker>
      <ReportBox text="신고 내용(선택)" />
      <View style={{ padding: 30 }}>
        <TextInput
          style={[styles.phone, { height: 150 }]}
          value={report}
          onChangeText={setReport}
          placeholder="자유롭게 적어주세요"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
