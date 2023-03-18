import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [getCount, setCount] = useState(0);
  const [getName, setName] = useState('');

  useEffect(() => {
    console.warn('Update callback when user update Count Value');
  }, [getCount]);

  useEffect(() => {
    console.warn('Update callback when user update Name Value');
  }, [getName]);

  return (
    <View style={styles.View}>
      <Text style={styles.label}>Class Components</Text>
      <Text style={styles.textView}>Count: {getCount}</Text>
      <Text style={styles.textView}>Name: {getName}</Text>
      <View style={styles.button}>
        <Button title="update Count" onPress={() => setCount(getCount + 1)} />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={'Enter Name'}
        value={getName}
        onChangeText={text => setName(text)}
      />
      <View style={styles.button}>
        <Button
          title="Rest Data"
          onPress={() => {
            setCount(0);
            setName('');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'red',
    fontSize: 28,
    alignContent: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
    textAlign: 'center',
  },
  textView: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    alignContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  textInput: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
  },
  button: {color: 'green', padding: 10},
  View: {
    margin: 10,
    padding: 10,
  },
});
export default App;
