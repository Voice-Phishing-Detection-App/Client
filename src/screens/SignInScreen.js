import { View, StyleSheet, Text } from 'react-native';
import Button from '../components/Button';
import TextInput, { IconNames, ReturnKeyTypes } from '../components/TextInput';
import { useState, useRef, useEffect } from 'react';
import { PRIMARY } from '../../color';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        const data = await signIn(email, password);
        console.log(data);
        setUser(data);
      } catch (e) {
        Alert.alert('SignIn Failed', e, [
          {
            text: 'Ok',
            onPress: () => setIsLoading(false),
          },
        ]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>피노키오</Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text.trim())}
        title={'아이디'}
        placeholder=""
        returnKeyType={ReturnKeyTypes.NEXT}
        iconName={IconNames.EMAIL}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <TextInput
        ref={passwordRef}
        value={password}
        onChangeText={(text) => setPassword(text.trim())}
        title={'비밀번호'}
        placeholder=""
        secureTextEntry
        iconName={IconNames.PASSWORD}
        onSubmitEditing={onSubmit}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={'SIGNIN'}
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </View>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.line} />
        <View>
          <Text style={{ width: 40, textAlign: 'center' }}>또는</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'카카오 로그인'}
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'네이버 로그인'}
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          fontSize: 5,
        }}
      >
        <Text>아이디찾기</Text>
        <Text> | </Text>
        <Text>비밀번호찾기</Text>
        <Text> | </Text>
        <Text>회원가입</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 25,
    padding: 30,
    color: PRIMARY.DARK,
    fontWeight: 'bold',
  },
  line: { flex: 1, height: 1, backgroundColor: 'black' },
});

export default SignInScreen;
