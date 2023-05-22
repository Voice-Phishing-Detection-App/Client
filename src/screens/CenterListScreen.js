import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const CenterListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CenterListScreen</Text>
    </View>
  );
};
CenterListScreen.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});
export default CenterListScreen;
