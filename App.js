import { View, Text, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OpeningPage from './components/OpeningPage';
import CalendarPage from './components/CalendarPage';
import JournalPage from './components/JournalPage';
import EmotionsPage from './components/EmotionsPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as React from 'react';
import * as RN from 'react-native'; 

const AppNavigator = createStackNavigator(
  {
    OpeningPage: { screen: OpeningPage },
    CalendarPage: { screen: CalendarPage },
    JournalPage: { screen: JournalPage },
    EmotionsPage: { screen: EmotionsPage },
  },
  {
    initialRouteName: 'OpeningPage',
  }
);

export default createAppContainer(AppNavigator);