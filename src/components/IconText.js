import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { BLACK } from '../../color';

const IconText = ({ text, name }) => {
  return (
    <View style={styles.container}>
      <Feather style={{ marginLeft: 30 }} name={name} size={20} />
      <Text style={[styles.bottomText, { marginLeft: 10 }]}>{text}</Text>
    </View>
  );
};

IconText.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
  },
  bottomText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
  },
});

export default IconText;
