import { Button, StyleSheet, Text, View } from 'react-native';
import { GRAY } from '../color';
import PropTypes from 'prop-types';

const ListDetailScreen = ({ route, navigation }) => {
  const { type } = route.params;
  const { registrationDate } = route.params;
  const { content } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type}</Text>
      <View style={styles.dateview}>
        <Text style={styles.date}>{registrationDate}</Text>
      </View>

      <Text style={styles.content}>{content}</Text>
    </View>
  );
};
ListDetailScreen.propTypes = {};
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
  content: {
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
export default ListDetailScreen;
