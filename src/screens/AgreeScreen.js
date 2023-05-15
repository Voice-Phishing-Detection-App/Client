import { View, StyleSheet, Text, Pressable } from 'react-native';
import { BLACK, PRIMARY, WHITE } from '../../color';
import { useState } from 'react';
import IconText from '../components/IconText';

const AgreeScreen = () => {
  const [check, setCheck] = useState('false');

  const circle = {
    name: !check ? 'check-circle' : 'circle',
    color: BLACK,
    size: 28,
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <Text style={styles.text}>
          서비스 가입을 위해{'\n'}약관에 동의해 주세요
        </Text>
      </View>
      <View style={styles.BottomContainer}>
        <Pressable
          onPress={() => {
            setCheck(!check);
          }}
          hitSlop={10}
        >
          <IconText {...circle} text={'전체동의'} />
        </Pressable>
        <Pressable
          onPress={() => {
            setCheck(!check);
          }}
          hitSlop={10}
        >
          <IconText {...circle} text={'이용약관 동의(필수)'} />
        </Pressable>
        <Pressable
          onPress={() => {
            setCheck(!check);
          }}
          hitSlop={10}
        >
          <IconText {...circle} text={'개인정보 수집 및 이용동의(필수)'} />
        </Pressable>
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
