import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    requestMicrophonePermission();
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
    </>
  );
};

export default SpeechToText;
