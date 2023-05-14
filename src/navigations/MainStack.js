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
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: PRIMARY.DEFAULT,
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          title: '피노키오',
          headerRight: HeaderRightButton,
          headerLeft: HeaderLeftButton,

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
    </Tab.Navigator>
  );
};
export default MainStack;
