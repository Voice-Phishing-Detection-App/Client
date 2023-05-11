import { View, StyleSheet } from 'react-native';
import TextInput, { ReturnKeyTypes } from '../components/TextInput';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!name || !email || !password);
  }, [name, email, password]);

  const onSubmit = async () => {
    if (!disabled && !isLoading) {
      Keyboard.dismiss();
      setIsLoading(true);
      try {
        const data = await signIn(name, email, password);
        setUser(data);
      } catch (e) {
        Alert.alert('회원가입 실패', e, [
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
      <View style={styles.textContainer}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text.trim())}
          title={'이름'}
          placeholder=""
          returnKeyType={ReturnKeyTypes.NEXT}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <TextInput
          ref={emailRef}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          title={'아이디'}
          placeholder=""
          returnKeyType={ReturnKeyTypes.NEXT}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <TextInput
          ref={passwordRef}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          title={'비밀번호'}
          placeholder=""
          returnKeyType={ReturnKeyTypes.DONE}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={'회원가입'}
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
    alignItems: 'center',
    marginTop: '40%',
  },
  textContainer: {
    width: '70%',
  },
  buttonContainer: {
    width: '65%',
    padding: 5,
    marginTop: '10%',
  },
});

export default SignUpScreen;
