import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations';
import AuthStack from './navigations/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import AgreeScreen from './screens/AgreeScreen';
import Invoice from './test/Invoice';
import SpeechToText from './test/SpeechToText';

const App = () => {
  return (
    // <UserProvider>
    //   <StatusBar style="dark" />
    //   <Navigation />
    // </UserProvider>
    // <NavigationContainer>
    //   <StatusBar style="auto" />
    //   <AuthStack />
    // </NavigationContainer>
    <>
      <SpeechToText />
    </>
  );
};

export default App;
