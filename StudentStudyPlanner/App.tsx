/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import AddTaskScreen from './screens/AddTaskScreen';

type Task = {
  id : string;
  title : string;
  subject : string;
  completed : boolean;
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [screen, setScreen] = useState('login');

  const [tasks, setTasks] = useState<Task[]>([
    {
        id: '1',
        title: 'Solve 2 DSA Problems',
        subject: 'Java',
        completed : false,
    },
    {
        id: '2',
        title: 'Study FlatList',
        subject: 'React Native',
        completed : false,
    },
    {
        id: '3',
        title: 'Revise Python Basics',
        subject: 'Python',
        completed : false,
    },
  ]);

  if(screen === 'register'){
    return(
      <RegisterScreen onLogin={() => setScreen('login')}/>
    )
  }
  if(screen === 'tasks'){
    return(
      <TaskScreen task={tasks} onBack={()=> setScreen('home')} onAddtask={() => setScreen('addTask')}
                  onCompleteTask={(id) =>{
                    setTasks(
                      tasks.map((task) => task.id === id ? {...task, completed: true} : task)
                    );
                  }}
                  
                  onDeleteTask={(id) => {
                    setTasks(tasks.filter((task) => task.id !== id));
                  }}/>
    )
  }
  if(screen === 'home'){
    return(
      <HomeScreen tasks={tasks}onLogout={() => setScreen('login')} onTasks={() => setScreen('tasks')}/>
    )
  }
  if(screen === 'addTask'){
    return(
      <AddTaskScreen onBack={() => setScreen('tasks')} onAddTask={(newTask) => {
        setTasks([...tasks, 
          {
            id : Date.now().toString(),
            title : newTask.title,
            subject : newTask.subject,
            completed : false,
          },
        ]);

        setScreen('tasks');
      }}/>
    )
  }
  return(
    <LoginScreen onRegister={() => setScreen('register')} onLoginSuccess={()=> setScreen('home')}/>
  )

  // return (
  //   <SafeAreaProvider>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     {/* <AppContent /> */}

  //     <LoginScreen/>
  //   </SafeAreaProvider>
  // );
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
