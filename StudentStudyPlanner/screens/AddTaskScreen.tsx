import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type AddTaskScreenProps = {
    onBack : () => void;
    onAddTask : (task : {
        title : string;
        subject : string;
    }) => void;
};


const AddTaskScreen = ({onBack, onAddTask} : AddTaskScreenProps) => {
    const[taskName, setTaskName] = useState('');
    const[subject, setSubject] = useState('');
    const[description, setDescription] = useState('');

    const handleAddTask = () => {
        if(taskName === ''|| subject === '' || description === ''){
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        // Alert.alert('Success', 'Task added successfully');
        // setTaskName('');
        // setSubject('');
        // setDescription('');
        onAddTask({
            title : taskName,
            subject : subject,
        });
    }
    return(
        <View style={styles.container}>
            <CustomHeader title="Add Task"/>
            <Text style={styles.heading}>Create New Task</Text>
            <CustomInput placeholder='Enter Task Name' value={taskName} onChangeText={setTaskName}/>
            <CustomInput placeholder='Enter Subject' value={subject} onChangeText={setSubject}/>
            <CustomInput placeholder='Enter Description' value={description} onChangeText={setDescription}/>

            <CustomButton title="Add Task" onPress={handleAddTask}/>
            <CustomButton title="Back to Tasks" onPress={onBack}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20, 
        marginTop : 20,
    },
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        marginVertical : 20,
    },
});

export default AddTaskScreen;