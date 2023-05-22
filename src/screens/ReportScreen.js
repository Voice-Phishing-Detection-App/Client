import { StyleSheet, Text, View } from 'react-native';
import ReportBox from '../components/ReportBox';

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <ReportBox text="통화 후 의심 판정 여부" />
      <ReportBox text="전화번호 입력" />
      <ReportBox text="신고 사유" />
      <ReportBox text="신고 내용" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReportScreen;
