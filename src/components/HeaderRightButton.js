import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        console.log('bell');
        navigation.navigate('Doubt');
      }}
      hitSlop={10}
    >
      <MaterialCommunityIcons name="bell-outline" size={20} color={tintColor} />
    </Pressable>
  );
};
HeaderRightButton.propTypes = {
  tintColor: PropTypes.string,
};
export default HeaderRightButton;
