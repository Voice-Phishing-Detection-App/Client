import { Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { BLACK, PRIMARY } from '../../color';

const HeaderRightButton = ({ navigation }) => {
  // const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        console.log('bell');
        navigation.navigate('DoubtListScreen');
      }}
      hitSlop={10}
      style={{ marginRight: 15 }}
    >
      <MaterialCommunityIcons name="bell-outline" size={20} color={BLACK} />
    </Pressable>
  );
};
HeaderRightButton.propTypes = {
  tintColor: PropTypes.string,
};
export default HeaderRightButton;
