import { View, StyleSheet, Text } from 'react-native';
import { PRIMARY } from '../../color';

const AgreeScreen = () => {
  return (
    <View>
      <View style={styles.TopContainer}>
        <Text style={styles.text}>서비스 가입을 위해 약관에 동의해 주세요</Text>
      </View>
      <View style={styles.BottomContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  TopContainer: { flex: 1 },
  BottomContainer: { flex: 1 },
  text: { color: PRIMARY.DEFAULT, fontSize: 40 },
});

export default AgreeScreen;
