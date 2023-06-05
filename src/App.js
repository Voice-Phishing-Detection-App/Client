import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations';
import AuthStack from './navigations/AuthStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
    //  <NavigationContainer>
    //   <StatusBar style="auto" />
    //   <AuthStack />
    // </NavigationContainer>
  );
};

export default App;
