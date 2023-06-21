import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native, along with all other PropTypes.',
  ]);
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
