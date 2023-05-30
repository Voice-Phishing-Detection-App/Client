import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { colors, height, width } from '../../config/globalStyles';

const Modal = ({
  negativeButton,
  positiveButton,
  negativeButtonPress,
  positiveButtonPress,
}) => {
  return (
    <Modal animationType="fade">
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.contentContainer}>{children}</View>
          <View style={styles.buttonContainer}>
            {negativeButton && (
              <TouchableOpacity
                style={styles.negativeButton}
                onPress={negativeButtonPress}
              >
                <Text style={styles.text}>{negativeButton}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.positiveButton}
              onPress={positiveButtonPress}
            >
              <Text style={styles.text}>{positiveButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    width: width * 280,
    paddingTop: height * 20,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingBottom: height * 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  positiveButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  negativeButton: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
