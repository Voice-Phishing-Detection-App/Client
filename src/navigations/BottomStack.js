import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { PRIMARY, WHITE } from '../../color';
import HeaderRightButton from '../components/HeaderRightButton';
import HeaderLeftButton from '../components/HeaderLeftButton';
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Feather,
} from '@expo/vector-icons';
// import DoubtListScreen from '../screens/DoubtListScreen';
const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: PRIMARY.DEFAULT,
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen} //임시
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search-sharp" color={color} size={size} />
          ),
          // tabBarBadge: 3, -> 알림 몇개 떠있다 표시하는거임
        }}
      />
      <Tab.Screen
        name="Report"
        component={HomeScreen} //임시
        options={{
          tabBarLabel: '신고',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="policy" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={HomeScreen} //임시
        options={{
          tabBarLabel: '내 정보',

          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
      {/* <Stack.Screen
        name="Doubt"
        component={DoubtListScreen}
        options={{ title: 'Doubt List' }}
      /> */}
    </Tab.Navigator>
  );
};
export default BottomStack;
