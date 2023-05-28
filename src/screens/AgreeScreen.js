import { View, StyleSheet, Text } from 'react-native';
import { PRIMARY, WHITE } from '../../color';
import { useState } from 'react';
import IconText from '../components/IconText';

const AgreeScreen = () => {
  const [agreedAll, setAgreedAll] = useState(false);
  const [service, setSerivce] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleAgreeAll = () => {
    if (agreedAll === false) {
      setAgreedAll(true);
      setSerivce(true);
      setAgree(true);
    } else if (agreedAll === true) {
      setAgreedAll(false);
      setSerivce(false);
      setAgree(false);
    }
  };

  const handleService = () => {
    setSerivce(!service);
    if (!service) {
      setAgreedAll(false);
    }
  };

  const handleAgree = () => {
    setAgree(!agree);
    if (!agree) {
      setAgreedAll(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <Text style={styles.text}>
          서비스 가입을 위해{'\n'}약관에 동의해 주세요
        </Text>
      </View>
      <View style={styles.BottomContainer}>
        <IconText name={agreedAll} text={'전체동의'} onPress={handleAgreeAll} />
        <IconText
          name={service}
          text={'이용약관 동의(필수)'}
          onPress={handleService}
        />
        <IconText
          name={agree}
          text={'개인정보 수집 및 이용동의(필수)'}
          onPress={handleAgree}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  TopContainer: {
    backgroundColor: PRIMARY.LIGHT,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomContainer: { flex: 1 },
  text: { color: WHITE, fontSize: 33, fontWeight: '700' },
});

export default AgreeScreen;
