import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomCard from '../components/CustomCard';
import CustomButton from '../components/CustomButton';

type Task = {
    id: string;
    title: string;
    subject: string;
    completed: boolean;
};

type TaskScreenProps = {
    task: Task[];
    onBack: () => void;
    onAddtask: () => void;
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
};

const TaskScreen = ({task, onBack, onAddtask, onCompleteTask, onDeleteTask}: TaskScreenProps) => {
    return (
        <View style={styles.container}>
            <CustomHeader title="My Tasks" />

            <FlatList
                data={task}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <CustomCard
                        title={item.title}
                        description={item.subject}
                        completed={item.completed}
                        onComplete={() => onCompleteTask(item.id)}
                        onDelete={() => onDeleteTask(item.id)}
                    />
                )}
            />

            <CustomButton title="Add Task" onPress={onAddtask} />
            <CustomButton title="Back to Home" onPress={onBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 50,
    },
});

export default TaskScreen;