import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';

const HeaderLeftBack = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={navigation.goBack}
      hitSlop={30}
      style={{ marginRight: 20 }}
    >
      <AntDesign name="left" size={24} color={tintColor} />
    </Pressable>
  );
};

HeaderLeftBack.propTypes = {
  tintColor: PropTypes.string,
};

export default HeaderLeftBack;
