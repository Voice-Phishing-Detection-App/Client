import { StyleSheet, Text, TextInput, View } from 'react-native';
import { BLACK, GRAY, PRIMARY, SBTN, WHITE } from '../../color';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Sbtn from '../components/Sbtn';
import ReportList from '../components/ReportList';

const Left = 30;

const SearchScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('01012345678'); // 실제 통신할때는 ''로 설정 -> ''일때는 신고정보 안보임
  const [count, setCount] = useState('123');
  const [reason, setReason] = useState('안수진 바보');

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
          <Sbtn styles2={style2} title={'조회'} onPress={() => {}} />
        </View>
      </View>
      <View style={styles.middle}>
        <Text style={styles.middletext}>신고 정보</Text>
      </View>
      <View style={styles.bottom}>
        <ReportList list={'전화번호'} item={phoneNumber} />
        <ReportList list={'횟수'} item={count} />
        <ReportList list={'사유'} item={reason} />
      </View>
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
    flex: 0.25,
    backgroundColor: PRIMARY.LIGHT,
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
