import React, { useState } from 'react';
import { Button, View } from 'react-native';
import Voice from '@react-native-voice/voice';
import { Permissions } from 'expo';

const SpeechToText = () => {
  const componentDidMount = async () => {
    const { status, expires, permissions } = await Permissions.askAsync(
      Permissions.AUDIO_RECORDING
    );
    if (status !== 'granted') {
      // Permissions not granted. Don't show the start recording button because it will cause problems if it's pressed.
      this.setState({ showRecordButton: false });
    } else {
      this.setState({ showRecordButton: true });
    }
  };

  const constructor = (props) => {
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  };
  const onStartButtonPress = (e) => {
    Voice.isAvailable();
    Voice.start('en-US');
  };

  return (
    <View>
      <Button title="마이크 권한" onPress={componentDidMount} />
      <Button title="시작" onPress={onStartButtonPress} />
    </View>
  );
};

export default SpeechToText;
