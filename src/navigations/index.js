import { useUserContext } from '../contexts/UserContext';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import DoubtListScreen from '../screens/DoubtListScreen';

const Navigation = () => {
  // const { user } = useUserContext();
  return (
    <NavigationContainer>
      {/* {user ? <MainStack /> : <AuthStack />} */}
      <MainStack />
      {/* <DoubtListScreen /> */}
      {/* <Navigation /> */}
    </NavigationContainer>
  );
};
export default Navigation;
