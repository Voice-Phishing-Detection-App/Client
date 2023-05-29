import { StyleSheet, Text, View, TextInput } from 'react-native';
import { PRIMARY, SBTN, WHITE } from '../../color';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Sbtn from '../components/Sbtn';

const EmergencyNumberScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [relation, setRelation] = useState('');
  const [sensitivity, setSensitivity] = useState(null);
  const [sensitivityList, setSensitivityList] = useState([
    '1단계',
    '2단계',
    '3단계',
  ]);
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([
    { rel: '엄마', number: '010-1234-5678', sens: '3단계' },
    { rel: '아빠', number: '010-1234-6578', sens: '1단계' },
  ]);
  const [editBtn, setEditBtn] = useState(false);

  const edit = (item) => {
    if (editBtn === false) {
      setEditBtn(true);
      setRelation(item.rel);
      setSensitivity(item.sens);
      setPhone(item.number);
    } else {
      setEditBtn(false);
      setRelation('');
      setSensitivity(null);
      setPhone('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topText}>
          <Text>긴급 상황시 등록된 긴급 연락처로 연락</Text>
          <Text>민감도가 높을수록 위험 수치 높을 때 연락</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 30, marginBottom: 5 }}>관계</Text>
          <Text style={{ marginLeft: '38%', marginBottom: 5 }}>민감도</Text>
        </View>
        <View
          style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 20 }}
        >
          <TextInput
            value={relation}
            style={styles.input}
            autoCapitalize={'none'}
            autoCorrect={false}
            textContentType={'none'}
            keyboardAppearance={'light'}
            borderColor={SBTN.DARK}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(text) => setRelation(text.trim())}
          />
          <View
            style={{
              backgroundColor: WHITE,
              marginLeft: 20,
              borderRadius: 5,
              borderRightColor: SBTN.DARK,
              justifyContent: 'center',
            }}
          >
            <Picker
              style={styles.picker}
              selectedValue={sensitivity}
              onValueChange={(itemValue, itemIndex) =>
                setSensitivity(itemValue)
              }
            >
              {sensitivityList.map((list, index) => (
                <Picker.Item key={index} label={list} value={list} />
              ))}
            </Picker>
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: 30, marginBottom: 5 }}>연락처</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <TextInput
            value={phone}
            style={[styles.input, { width: '65%' }]}
            autoCapitalize={'none'}
            autoCorrect={false}
            textContentType={'none'}
            keyboardAppearance={'light'}
            borderColor={SBTN.DARK}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            onChangeText={(text) => setPhone(text.trim())}
          />
          <Sbtn
            styles2={{
              container: {
                marginLeft: 20,
                width: 50,
                height: 40,
              },
              title: { fontSize: 12 },
            }}
            title={'등록'}
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={{ fontSize: 15, marginLeft: 30, fontWeight: '500' }}>
          등록된 연락처
        </Text>
      </View>
      <View style={styles.bottom}>
        <View>
          {data.map((item, index) => (
            <View style={styles.listContainer} key={index}>
              <Text style={styles.listText}>{item.rel}</Text>
              <View style={styles.listback}>
                <Text style={styles.listText}>{item.number}</Text>
                <Text style={styles.listText}>{item.sens}</Text>
              </View>
              <Sbtn
                styles2={{ title: { fontSize: 12 } }}
                title={!editBtn ? '수정' : '취소'}
                onPress={() => edit(item)}
              />
              <Sbtn
                styles2={{
                  title: { fontSize: 12 },
                  container: { backgroundColor: '#92B8E5' },
                }}
                title={'삭제'}
                onPress={() => {}}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.39,
    backgroundColor: PRIMARY.LIGHT,
  },
  middle: {
    flex: 0.08,
    backgroundColor: SBTN.DEFAULT,
    justifyContent: 'center',
  },
  bottom: {
    flex: 0.5,
    backgroundColor: WHITE,
  },
  topText: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: WHITE,
    width: '40%',
    height: 40,
    marginLeft: 20,
    paddingLeft: 10,
  },
  picker: { borderColor: WHITE, width: 145, height: 30 },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  listback: {
    flexDirection: 'row',
    backgroundColor: '#F7F6F6',
    borderRadius: 5,
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  listText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default EmergencyNumberScreen;
