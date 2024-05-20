import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpeningPage from './OpeningPage';
import CalendarPage from './CalendarPage';
import JournalPage from './JournalPage';
import EmotionsPage from './EmotionsPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={OpeningPage} />
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Journal" component={JournalPage} />
        <Stack.Screen name="Emotions" component={EmotionsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

