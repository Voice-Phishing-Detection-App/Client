import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY } from '../../color';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containertop}>
        <Text style={styles.title}>HomeScreen</Text>
      </View>
      <View style={styles.containerbottom}>
        <Text style={styles.title}>HomeScreen</Text>
      </View>
    </View>
  );
};
HomeScreen.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  containertop: {
    flex: 0.8,
    backgroundColor: PRIMARY.LIGHT,
  },
  containerbottom: {
    flex: 2.2,
  },
  title: {
    fontSize: 30,
  },
});
export default HomeScreen;
