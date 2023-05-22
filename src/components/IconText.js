import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import { BLACK } from '../../color';

const IconText = ({ text, name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Feather
          style={{ marginLeft: 30 }}
          name={name ? 'circle' : 'check-circle'}
          size={20}
        />
        <Text style={styles.bottomText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

IconText.propTypes = {
  text: PropTypes.string,
  name: PropTypes.bool,
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
    marginLeft: 10,
  },
});

export default IconText;
