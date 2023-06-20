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
      let response = await fetch(`http://172.30.1.65:8080/doubt`, {
        method: 'POST',
        body: JSON.stringify({
          phoneNumber: '01000000000',
          text: transcript,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY4NzI0Mjc1NiwiZXhwIjoxNjg3MjQ5NzU2fQ.L1ge7dFygn08EeCFT0tG1gjBWBUQCVjrL90v_QTnhfsYmki_kU7--UCOzAsP5B1TscJ8RIlC_CA8vY97btRs6w`,
        },
      });

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
