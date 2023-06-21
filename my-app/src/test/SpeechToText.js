import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Voice from '@react-native-voice/voice';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
// import { Vibration } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [level, setLevel] = useState();

  useEffect(() => {
    requestMicrophonePermission();
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

  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message:
              'We need access to your microphone to perform speech to text.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Permission required',
            'We need access to your microphone to perform speech to text'
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const startListening = async () => {
    try {
      console.log('시작');
      await Voice.start('ko-KR');
    } catch (error) {
      console.error('Failed to start Voice:', error);
    }
  };

  const stopListening = async () => {
    try {
      console.log('종료');
      await Voice.stop();
    } catch (error) {
      console.error('Failed to stop Voice:', error);
    }
  };

  const onSpeechResults = (event) => {
    setTranscript(event.value[0]);
    sendToServer(event.value[0]);
  };

  const sendToServer = async (text) => {
    try {
      let response = await fetch(
        `https://ae88-2001-e60-1099-856d-3d3f-f1e6-73ef-1ec7.ngrok-free.app/doubt`,
        {
          method: 'POST',
          body: JSON.stringify({
            phoneNumber: '01000000000',
            text: text,
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NzI1NjM1MCwiZXhwIjoxNjg3MzI2MzUwfQ.JPfQXF2isGpBEoySmecFVjOQs3syZcafdsLKItWniZEPBiOQkH4L95T4O0MaX-MXlh6fjsvzOtMnIHWEk-LOmA`,
          },
        }
      );

      let data = await response.json();
      console.log(data); // 서버 응답 출력
      setLevel(data.level);
      // await schedulePushNotification();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <>
      <Button title="Start Listening" onPress={startListening} />
      <Button title="Stop Listening" onPress={stopListening} />
      <Text>{transcript}</Text>
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
        <Button //곧 없앨예정
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
    </>
  );
};

async function schedulePushNotification() {
  // Vibration.vibrate([600, 50, 600, 10]); // 1초 진동, 0.5초 일시 중지, 2초 진동
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `[보이스피싱 감지] 단계 알림입니다.`,
      body: '보이스피싱이 의심됩니다! 주의하세요 !',
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

export default SpeechToText;
