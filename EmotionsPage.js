import React, { Component } from 'react';
import * as RN from 'react-native';
import { Text, ScrollView, StyleSheet, TouchableHighlight, Keyboard, TouchableWithoutFeedback, TextInput } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

const handleSave = () => {
  console.log(`Save Emotions info: ${Text}`);
};
//creates the visual page for the EmotionsPage
export default class EmotionsPage extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
        accessible={false}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Daily Emotion Recorder</Text>
        <Text style={styles.normalText}>
          How content you feel with your family and relationships?
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
          onChangetext={(text) => onChangeText(text)} 
          onChangeText={input1 = TextInput.Text} 
        />
        <Text style={styles.normalText}>
          Describe how positive you feel about your life currently.
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
          onChangetext={(text) => onChangeText(text)}
          onChangeText={input2 = TextInput.Text}  
        />
        <Text style={styles.normalText}>
          Describe how your mental health has affected your current/past
          relationships
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
          onChangetext={(text) => onChangeText(text)}
          onChangeText={input3 = TextInput.Text} 
        />
        <Text style={styles.normalText}>
          Describe how comfortable you are discussing your mental health
          problems with your friends or family members.
        </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 3 }}
          onChangetext={(text) => onChangeText(text)}
          onChangeText={input4 = TextInput.Text} 
        />
        <TouchableHighlight style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

//Below are the style sheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#DDF6DD',
    padding: 8,
  },
  button: {
    flex: 2,
    height: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FCA284',
    padding: 8,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Gill Sans',
    height: 150,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  normalText: {
    felx: 1,
    fontFamily: 'Gill Sans',
    fontSize: 20,
  },
});


