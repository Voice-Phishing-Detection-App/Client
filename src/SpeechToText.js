import React, { useEffect } from 'react';
import { Button, View, PermissionsAndroid } from 'react-native';
import * as Speech from 'expo-speech';

const SpeechToText = () => {
  const getAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
      ]);

      return (
        granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted[PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE] ===
          PermissionsAndroid.RESULTS.GRANTED
      );
    } catch (error) {
      console.log('권한 요청 오류:', error);
      return false;
    }
  };

  const startSpeechToText = async () => {
    const isPermissionGranted = await getAudioPermission();

    if (isPermissionGranted) {
      try {
        await Speech.startSpeechToTextAsync();
      } catch (error) {
        console.log('음성 인식 오류:', error);
      }
    } else {
      console.log('오디오 녹음 권한이 거부되었습니다.');
    }
  };

  // useEffect(() => {
  //   const handleSpeechResults = (event) => {
  //     const { value } = event;

  //     // 인식된 텍스트를 사용하여 원하는 작업을 수행합니다.
  //     console.log('음성 인식 결과:', value);
  //   };

  //   Speech.addPartialResultsListener(handleSpeechResults);

  //   return () => {
  //     Speech.removePartialResultsListener(handleSpeechResults);
  //   };
  // }, []);

  return (
    <View>
      <Button title="마이크 권한" onPress={getAudioPermission} />
      <Button title="음성 인식 시작" onPress={startSpeechToText} />
    </View>
  );
};

export default SpeechToText;
