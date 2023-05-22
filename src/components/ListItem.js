import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';

const ListItem = memo(({ name, item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        if (name === 'PhisingList') {
          navigation.navigate('PhisingListDetail', {
            title: item.task[0],
            date: item.task[1],
            detail: item.task[2],
          });
        }
      }}
      hitSlop={10}
    >
      <View style={styles.container}>
        {/* <Pressable onPress={() => {}} hitSlop={10}>
        <MaterialCommunityIcons {...checkboxProps} />
      </Pressable> */}
        <View style={styles.task1}>
          <Text style={styles.task1txt}>{item.task[0]}</Text>
        </View>
        <View style={styles.task2}>
          <Text>{item.task[1]}</Text>
        </View>
      </View>
    </Pressable>
  );
});
ListItem.displayName = 'ListItem';
ListItem.propTypes = {
  item: PropTypes.object.isRequired,
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
});
export default ListItem;
