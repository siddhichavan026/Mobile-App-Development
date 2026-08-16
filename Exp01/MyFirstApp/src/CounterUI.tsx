import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const CounterUI = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="-" onPress={() => setCount(count - 1)} color="#58ba4a"/>
        </View>

        <View style={styles.button}>
          <Button title="+" onPress={() => setCount(count + 1)} color="#58ba4a" />
        </View>

        <View style={styles.resetButton}>
          <Button title="Reset" onPress={() => setCount(0)} color="#000000"/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ac3ae5',
  },
  count: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 70,
    marginHorizontal: 10,
  },
  resetButton: {
    width: 90,
    marginHorizontal: 10,
  },
});

export default CounterUI;