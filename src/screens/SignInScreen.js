import { View, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextInput, { IconNames, ReturnKeyTypes } from '../components/TextInput';
import { useState, useRef, useEffect } from 'react';

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
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
    marginTop: 10,
  },
});

export default SignInScreen;
