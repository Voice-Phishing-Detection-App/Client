import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY, WHITE } from '../../color';
import { useNavigation } from '@react-navigation/native';

const MyPageScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text>MyPageScreen</Text>
      </View>
      <View style={styles.containerMiddle}>
        <Pressable
          onPress={() => {
            navigation.navigate('ReportList');
          }}
          hitSlop={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>신고 기록</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('SetUp');
          }}
          hitSlop={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>알림 설정</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ReportList');
          }}
          hitSlop={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>로그아웃</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ReportList');
          }}
          hitSlop={10}
        >
          <View style={styles.textContainer}>
            <Text style={styles.text}>탈퇴하기</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.containerBottom}>
        <Text>로그인 연동 API</Text>
      </View>
    </View>
  );
};
MyPageScreen.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  containerTop: {
    flex: 0.3,
    borderBottomWidth: 1,
  },
  containerMiddle: {
    flex: 0.45,
  },
  containerBottom: {
    flex: 0.25,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
  },
});
export default MyPageScreen;
