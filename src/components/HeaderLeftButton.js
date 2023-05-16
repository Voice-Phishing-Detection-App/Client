import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { BLACK } from '../../color';

const HeaderRightButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        console.log('set');
        // navigation.navigate('SetUp');
      }}
      hitSlop={10}
      style={{ marginLeft: 15 }}
    >
      <Ionicons name="settings-outline" size={20} color={BLACK} />
    </Pressable>
  );
};
HeaderRightButton.propTypes = {
  tintColor: PropTypes.string,
};
export default HeaderRightButton;
