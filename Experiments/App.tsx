/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , Text} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Login from './Exp04/Login';
import Register from './Exp04/Register';
import Screen from './Exp04/Screen';
import { useState } from 'react';
import MyParent from './Props_activity/MyParent';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AppContent /> */}
      {/* <Login/> */}
      {/* <Register/> */}

      {/* Experiment no 4 */}
      <Screen/> 

      {/* React props activity */}
      {/* <MyParent/> */}
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
