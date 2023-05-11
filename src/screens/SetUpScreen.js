import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const SetUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SetUpScreen</Text>
    </View>
  );
};
SetUpScreen.propTypes = {};
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
export default SetUpScreen;
