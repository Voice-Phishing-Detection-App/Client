import { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Vibration } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function BannerScreen() {
  // 상태 변수 초기화
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // 푸시 알림 등록
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // 알림 수신 리스너 등록
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // 알림 응답 리스너 등록
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    // 컴포넌트 언마운트 시 알림 리스너 제거
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Title: {notification && notification.request.content.title}{' '}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{' '}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
    </View>
  );
}

// 푸시 알림 예약 함수
async function schedulePushNotification() {
  Vibration.vibrate([0, 250, 250, 250]);
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
  // 진동 패턴 사용
}

// 푸시 알림 등록 함수
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    console.log('들어움');
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250], // 진동 패턴 설정
      sound: 'default', // 기본 알림음 재생
    });
  }

  // Expo 상수에서 푸시 토큰 가져오기
  token = Constants?.manifest?.extra?.expoPushToken;

  return token;
}
