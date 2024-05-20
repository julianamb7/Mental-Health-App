import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GrabEntry, SaveEntry } from "./Saving";

const JournalEntryPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [selectedDate, setSelectedDate] = useState({
    day: '',
    month: '',
    year: ''
  });
const dateString = `${selectedDate.month}-${selectedDate.day}-${selectedDate.year}`;
  const handleSave = () => {
    // save journal entry to database or storage here
    SaveEntry(dateString, body);
    console.log(`Saving journal entry: ${GrabEntry(dateString)} at date ${dateString}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.titleInput}>How are you feeling?</Text>
        <TextInput
          style={styles.bodyInput}
          placeholder="Write your entry here..."
          value={body}
          onChangeText={setBody}
          multiline={true}
        />
        <View style={styles.dateInputsContainer}>
          <TextInput
            style={styles.dateInput}
            placeholder="Day"
            value={selectedDate.day}
            onChangeText={text => setSelectedDate({ ...selectedDate, day: text })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Month"
            value={selectedDate.month}
            onChangeText={text => setSelectedDate({ ...selectedDate, month: text })}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.dateInput}
            placeholder="Year"
            value={selectedDate.year}
            onChangeText={text => setSelectedDate({ ...selectedDate, year: text })}
            keyboardType="numeric"
          />
        </View>
        <Button title="Open Entry" onPress={(body) => setBody(GrabEntry(dateString))} style={styles.button} />
        <Button title="Save" onPress={handleSave} style={styles.button} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#DDF6DD',
  },
  titleInput: {
    height: 40,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    color: '#000000',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
  },
  bodyInput: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: 'top',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  dateInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateInput: {
    flex: 1,
    height: 40,
    width: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  button: {
    color: '#FFFFFF',
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignSelf: 'center',
  },
});

export default JournalEntryPage;

