import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';

type Task = {
    id: string;
    title: string;
    subject: string;
    completed: boolean;
};

type HomeScreenProps = {
    tasks: Task[];
    onLogout : () => void;
    onTasks : () => void;
};

const HomeScreen = ({tasks, onLogout, onTasks} : HomeScreenProps) => {
    return(
        <View style={styles.container}>
            <CustomHeader title="Student Study Planner"/>

            <ScrollView>
                <Text style={styles.welcome}>Welcome, Student !!</Text>
                <Text style={styles.progress}>Today's Progress</Text>
                
                {tasks.map((task) => (
                    <CustomCard key={task.id}
                        title={task.subject}
                        description={task.title}
                        completed={task.completed}
                    />
                ))}
            </ScrollView>
            <CustomButton title="My Tasks" onPress={onTasks}/>
            <CustomButton title="Logout" onPress={onLogout}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding :20,
        marginTop : 50,
    },
    welcome : {
        fontSize : 24,
        fontWeight : 'bold',
        marginVertical : 20,
    },
    progress : {
        fontSize : 18,
        marginBottom : 15,
    },
});

export default HomeScreen;
