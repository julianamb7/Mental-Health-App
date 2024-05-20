import React from 'react';
import {View, StyleSheet, Button, Alert, Text, TouchableHighlight} from 'react-native';

const EmotionAlert = () => {
  const EmotionAlert = () =>
    Alert.alert('Daily Emotion Questions', "Don't forget to fill out your daily emotion questions!", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.button}>
      <TouchableHighlight onPress={EmotionAlert}>
        <Text style={styles.buttonText}>
            Daily Emotion
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FCA284',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default EmotionAlert;
