import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../../color';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import BottomStack from './BottomStack';
import SetUpScreen from '../screens/SetUpScreen';
import DoubtListScreen from '../screens/DoubtListScreen';
import PhisingListScreen from '../screens/PhisingListScreen';
import CenterListScreen from '../screens/CenterListScreen';
import EmergencyNumberScreen from '../screens/EmergencyNumberScreen';
import ReportListScreen from '../screens/ReportListScreen';
import ReportListDetailScreen from '../screens/ReportListDetailScreen';
import PhisingListDetailScreen from '../screens/PhisingListDetailScreen';
const Stack = createNativeStackNavigator();
//로그인 후 컴포넌트
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomHome"
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="BottomHome"
        component={BottomStack}
        options={{
          headerRight: HeaderRightButton,
          headerLeft: HeaderLeftButton,
        }}
      />
      {/*nameprops -> 대문자 선호 */}
      <Stack.Screen
        name="SetUp"
        component={SetUpScreen}
        options={{ title: '알림' }}
      />
      <Stack.Screen
        name="Doubt"
        component={DoubtListScreen}
        options={{
          title: '의심 내역',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="CenterList"
        component={CenterListScreen}
        options={{
          title: '피싱 도움',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="PhisingList"
        component={PhisingListScreen}
        options={{
          title: '피해 사례',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="PhisingListDetail"
        component={PhisingListDetailScreen}
        options={{
          title: '피해 사례',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="EmergencyNumber"
        component={EmergencyNumberScreen}
        options={{
          title: '긴급 연락처',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ReportList"
        component={ReportListScreen}
        options={{
          title: '신고 기록',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ReportListDetail"
        component={ReportListDetailScreen}
        options={{
          title: '신고 기록',
          headerStyle: {
            backgroundColor: PRIMARY.DEFAULT,
          },
          headerTintColor: WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
