import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations';
import AuthStack from './navigations/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import TestStack from './navigations/TestStack';

const App = () => {
  return (
    // <UserProvider>
    //   <StatusBar style="auto" />
    //   <Navigation />
    // </UserProvider>
    // <NavigationContainer>
    //   <StatusBar style="auto" />
    //   <AuthStack />
    // </NavigationContainer>
    <UserProvider>
      <StatusBar style="auto" />
      <TestStack />
    </UserProvider>
  );
};

export default App;
