/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View , Text, Alert} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Login from './Exp04/Login';
import Register from './Exp04/Register';
import Screen from './Exp04/Screen';
import { useState } from 'react';
import MyParent from './Props_activity/MyParent';
import Custom_button from './Reusable_components/Custom_button';
import HomeScreen from './Exp05/HomeScreen';
import Customcard from './Exp05/CustomCard';
import CustomHeader from './Exp05/CustomHeader';
import CustomButton from './Exp05/CustomButton';
import CustomInput from './Exp05/CustomInput';
import DebugExample from './DebugExample';
import ProfileScreen from './Exp06/ProfileScreen';
import SettingScreen from './Exp06/SettingScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [department , setDepartment] = useState('');
   const [rollNo, setRollNo] = useState('');

  
  const handleSubmit = ()=>{
    Alert.alert("Button clicked");
  }

  const handleLogin = ()=> {
    Alert.alert("success", "Login clicked");
  }
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <AppContent /> */}
      {/* <Login/> */}
      {/* <Register/> */}

      {/* Experiment no 4 */}
      {/* <Screen/>  */}

      {/* React props activity */}
      {/* <MyParent/> */}

      {/* Reusable component lecture work */}
      {/* <Custom_button title="Click" onpress={handleSubmit}/>
      <Custom_button title="Login" onpress={handleLogin}/> */}

      {/* Exp 05 */}
      {/* <View style={styles.container}> 
         <CustomHeader title='Hello from Siddhi'/>
        <Customcard name='Siddhi' age='21' rollNo='23UAM018' department='AIML' />
        <CustomInput placeholder='Enter name' value={name} onChangeText={setName}/>
        <CustomButton title="Click here" onPress={handleSubmit}/>
      </View> */}

      {/* <View style={styles.container}>
        <CustomHeader title="Hello from Ankita" />
        <CustomHeader title="Welcome to Home page"/>
        <CustomHeader title="Hello User"/>
        <CustomHeader title="Welcome to DKTE"/>
      </View> */}

      {/* <View style={styles.container}>
        <CustomInput placeholder='Enter name' value={name} onChangeText={setName}/>
        <CustomInput placeholder='Enter Email' value={email} onChangeText={setEmail}/>
        <CustomInput placeholder='Enter Roll no' value={rollNo} onChangeText={setRollNo}/>
        <CustomInput placeholder='Enter Department' value={department} onChangeText={setDepartment}/>
      </View> */}

      {/* <View style={styles.container}>
        <CustomButton title='Register' onPress={handleSubmit}/>
        <CustomButton title='Login' onPress={handleSubmit}/>
        <CustomButton title='Click' onPress={handleSubmit}/>
        <CustomButton title='Exit' onPress={handleSubmit}/>
      </View> */}

      {/* <View style={styles.container}>
        <Customcard name='Siddhi' age='21' rollNo='23UAM018' department='AIML' />
        <Customcard name='Riddhi' age='21' rollNo='202604' department='Forensic Science'/> 
      </View> */}
     

      {/* Exp 06 */}
      {/* <HomeScreen/> */}
      {/* <ProfileScreen/> */}
      <SettingScreen/>

      {/* DebugExample  */}
      {/* <View style={styles.container}>
        <DebugExample/>
      </View> */}
      
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
    paddingTop : 50, 
   
  },
});

export default App;
