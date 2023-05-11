import { Pressable, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, SBTN } from '../../color';

const Sbtn = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: SBTN.DEFAULT },
        pressed && { backgroundColor: SBTN.DARK },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Sbtn.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: SBTN.DEFAULT,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    width: 45,
    height: 35,
  },
  title: {
    color: BLACK,
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20,
  },
});

export default Sbtn;
