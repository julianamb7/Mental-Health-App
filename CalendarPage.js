import React, { Component } from 'react';
import * as RN from 'react-native';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';
import { Calendar } from 'react-native-calendars';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import JournalPage from './JournalPage';
import EmotionsPage from './EmotionsPage';
//import MyCalendar from './MyCalendar';

export default class CalendarPage extends React.Component {
  handlePress = () => {
    navigation.navigate(JournalPage);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Emotional Calendar</Text>
        <View style={styles.calendar}>
          <Calendar/>
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('JournalPage');
          }}>
          <Text style={styles.buttonText}>Start Journaling</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('EmotionsPage');
          }}>
          <Text style={styles.buttonText}>Record your Emotions</Text>
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
    height: 150,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  calendar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
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


