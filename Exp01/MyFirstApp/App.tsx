/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './src/LoginScreen';
import StudentCard from './src/StudentCard';
import CounterUI from './src/CounterUI';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {/* <AppContent /> */}
      {/*<LoginScreen/>*/}
      {/* <StudentCard/> */}
      <CounterUI/>
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello! Siddhi.....</Text>
      <Text style={styles.subtitle}>Welcome To My App.</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4a0c7',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color : '#8724c9',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#130220',
  },
});

export default App;


//Experiment 2 activity
//Activity 1 - Display msg Hello Siddhi Welcome to My App
//Activity 2 - create login page 
//Activity 3 - Change text color of activity 1
//Activity 4 - Change background color of activity 1
//Activity 5 - Create a simple student card  name, roll no, department, year,  add a image 
//Activity 6 - Create simple counter UI

