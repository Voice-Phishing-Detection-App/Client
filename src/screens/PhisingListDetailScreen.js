import { Button, StyleSheet, Text, View } from 'react-native';
import { GRAY } from '../../color';
import PropTypes from 'prop-types';

const PhisingListDetailScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const { date } = route.params;
  const { detail } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dateview}>
        <Text style={styles.date}>{date}</Text>
      </View>

      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};
PhisingListDetailScreen.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 15,
  },
  detail: {
    fontSize: 15,
    marginHorizontal: 25,
    paddingVertical: 25,
  },
  date: {
    fontSize: 15,
    color: GRAY,
  },
  dateview: {
    alignItems: 'flex-end',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
export default PhisingListDetailScreen;
