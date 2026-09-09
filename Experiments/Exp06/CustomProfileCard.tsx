import React, { Children } from 'react';
import { StyleSheet, View , Text} from 'react-native';

type CustomProfileCardProps = {
    children : React.ReactNode;
};

const CustomProfileCard = ({children} : CustomProfileCardProps) => {
    return(
        <View style={styles.card}>
            <Text style={styles.title}> Information</Text>

            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    card : {
        margin : 20, 
        padding : 25,
        backgroundColor : '#f5f5f5',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 15,
        elevation : 4,
    },
    title : {
        fontSize : 24,
        fontWeight : 'bold',
        color : 'black',
        marginBottom : 20,
    },
});

export default CustomProfileCard;


