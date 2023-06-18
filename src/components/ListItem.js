import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const ListItem = memo(({ name, item, list }) => {
  const navigation = useNavigation();
  // const doubtList = list.map((obj) => obj.type);
  return (
    <Pressable
      onPress={() => {
        if (name == 'DoubtList') {
          console.log('listitem:', item);
          navigation.navigate('Report', {
            doubtId: item.doubtId,
            // doubtList: doubtList,
          });
        } else {
          navigation.navigate('ListDetail', {
            type: item.type, //임시임
            registrationDate: item.registrationDate,
            content: item.content,
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
