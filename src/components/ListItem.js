import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const ListItem = memo(({ name, item, list }) => {
  const navigation = useNavigation();
  const doubtList = list.map((obj) => obj.type);
  return (
    <Pressable
      onPress={() => {
        console.log(doubtList);
        if (name == 'DoubtList') {
          console.log(item.type);
          navigation.navigate('Report', {
            doubt: item.type,
            num: item.phoneNumber,
            doubtList: doubtList,
          });
        } else {
          navigation.navigate('ListDetail', {
            type: item.type,
            registrationDate: item.registrationDate,
            // content: item.content,
          });
        }
      }}
      hitSlop={10}
    >
      {/* <Pressable onPress={() => {}} hitSlop={10}>
        <MaterialCommunityIcons {...checkboxProps} />
      </Pressable> */}
      {/* {name === 'CenterList' ? (
        <View style={styles.container}>
          <View style={styles.centerlist}>
            <Text style={styles.task1txt}>{item.task[0]}</Text>

            <Text style={styles.task1txt}>{item.task[1]}</Text>
          </View>
        </View>
      ) : ( */}
      <View style={styles.container}>
        <View style={styles.task1}>
          <Text style={styles.task1txt}>{item.type}</Text>
        </View>
        <View style={styles.task2}>
          <Text>{item.registrationDate}</Text>
        </View>
      </View>
      {/* )} */}
    </Pressable>
  );
});
ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  item: PropTypes.shape({
    content: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    registrationDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.oneOf([null]),
    ]),
    reportId: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    voiceId: PropTypes.number.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  task1: {
    marginVertical: 15,
  },
  task1txt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  task2: {
    alignItems: 'flex-end',
    marginVertical: 3,
  },
  centerlist: {
    marginVertical: 10,
  },
});
export default ListItem;
