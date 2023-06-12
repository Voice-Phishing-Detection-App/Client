import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations';

const App = () => {
  return (
    <UserProvider>
      <StatusBar style="auto" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
