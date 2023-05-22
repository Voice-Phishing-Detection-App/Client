import { StyleSheet, Text, View } from 'react-native';
import TextInput, { IconNames, ReturnKeyTypes } from '../components/TextInput';
import PropTypes from 'prop-types';
import { GRAY, PRIMARY, WHITE } from '../../color';
import { AntDesign } from '@expo/vector-icons';

const Left = 30;

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.top, { backgroundColor: PRIMARY.DEFAULT }]}>
        <Text style={styles.title}>번호 조회</Text>
        <TextInput style={{ backgroundColor: WHITE }} />
        {/* <View>
          <TextInput style={styles.search} placeholder="전화번호 입력" />
          <View style={styles.icon}>
            <AntDesign name="search1" size={20} color={GRAY} />
          </View>
        </View> */}
      </View>
      <View style={styles.middle}>
        <Text style={styles.middletext}>신고 정보</Text>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

SearchScreen.propTypes = {
  //PropTypes
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.7,
  },
  middle: {
    flex: 0.2,
    backgroundColor: PRIMARY.LIGHT,
    justifyContent: 'center',
  },
  bottom: {
    flex: 2,
  },
  title: {
    fontSize: 30,
    color: WHITE,
    fontWeight: '700',
    padding: Left,
  },
  search: {
    backgroundColor: WHITE,
    width: 300,
    height: 50,
    borderRadius: 5,
    marginLeft: '10%',
  },
  middletext: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: Left,
  },
  icon: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    marginLeft: Left + 10,
  },
});

export default SearchScreen;
