import React, { Component } from 'react';
import { Text, Alert, View, Image, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm 
import CalendarPage from './CalendarPage'

export default class OpeningScreen extends React.Component {
  handlePress = () => {
    navigation.navigate(CalendarPage);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome {'\n'} {'\n'} To {'\n'} {'\n'}{' '}
          </Text>
          <Image
        style={styles.logo}
        source={require('./YourSpace.png')}
          />
        <TouchableHighlight style={styles.button} onPress={() => {this.props.navigation.navigate('CalendarPage'); Alert.alert('Daily Emotion Questions', "Don't forget to fill out your daily emotion questions!", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);}}>
          <Text style={styles.buttonText}>
            Go to Calendar
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#DDF6DD',
    padding: 8,
  },
  title: {
    fontFamily: 'Gill Sans',
    height: 250,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
  logo: {
    width: 380,
    height: 380,
    alignItems: 'center'
  },
});

