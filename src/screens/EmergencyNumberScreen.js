import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const EmergencyNumberScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EmergencyNumberScreen</Text>
    </View>
  );
};
EmergencyNumberScreen.propTypes = {};
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
export default EmergencyNumberScreen;