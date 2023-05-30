import { StyleSheet, Switch, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, PRIMARY, WHITE } from '../../color';
import { useState } from 'react';

const SetUpScreen = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
  const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.containerRadius}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>통화 후 알림 허용</Text>
          <View style={styles.switchStyle}>
            <Switch
              trackColor={{ false: GRAY, true: PRIMARY.DEFAULT }}
              thumbColor={WHITE}
              ios_backgroundColor={GRAY}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>긴급 연락처 알림 허용</Text>
          <View style={styles.switchStyle}>
            <Switch
              trackColor={{ false: GRAY, true: PRIMARY.DEFAULT }}
              thumbColor={WHITE}
              ios_backgroundColor={GRAY}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>
        {isEnabled2 ? (
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>1단계 알림 허용</Text>
              <View style={styles.switchStyle}>
                <Switch
                  trackColor={{ false: GRAY, true: PRIMARY.DEFAULT }}
                  thumbColor={WHITE}
                  ios_backgroundColor={GRAY}
                  onValueChange={toggleSwitch3}
                  value={isEnabled3}
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>2단계 알림 허용</Text>
              <View style={styles.switchStyle}>
                <Switch
                  trackColor={{ false: GRAY, true: PRIMARY.DEFAULT }}
                  thumbColor={WHITE}
                  ios_backgroundColor={GRAY}
                  onValueChange={toggleSwitch4}
                  value={isEnabled4}
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>3단계 알림 허용</Text>
              <View style={styles.switchStyle}>
                <Switch
                  trackColor={{ false: GRAY, true: PRIMARY.DEFAULT }}
                  thumbColor={WHITE}
                  ios_backgroundColor={GRAY}
                  onValueChange={toggleSwitch5}
                  value={isEnabled5}
                />
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};
SetUpScreen.propTypes = {};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY.LIGHT,
  },
  containerRadius: {
    backgroundColor: WHITE,
    flex: 1,
    margin: 25,
    borderRadius: 15,
  },
  textContainer: {
    position: 'relative',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: GRAY,
    paddingVertical: 30,
  },
  text: {
    position: 'absolute',
    left: 0,
    fontSize: 22,
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  switchStyle: {
    position: 'absolute',
    right: 0,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
export default SetUpScreen;
