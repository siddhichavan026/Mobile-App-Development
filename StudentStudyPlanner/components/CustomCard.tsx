import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import theme from '../theme';

type CustomCardProps = {
    title: string;
    description: string;
    completed: boolean;
    onComplete?: () => void;
    onDelete?: () => void;
};

const CustomCard = ({title, description, completed, onComplete, onDelete}: CustomCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.status}>Status : {completed ? 'Completed' : 'Pending'}</Text>

            {onComplete && !completed && (
                <Button title="Complete" onPress={onComplete} />
            )}

            {onDelete && (
                <Button title="Delete" onPress={onDelete} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.white,
        padding: 15,
        marginVertical: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.gray,
    },
    title: {
        fontSize: theme.fontSize.medium,
        fontWeight: 'bold',
        color: theme.colors.black,
    },
    description: {
        fontSize: theme.fontSize.small,
        color: theme.colors.gray,
        marginTop: 5,
    },
    status: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default CustomCard;