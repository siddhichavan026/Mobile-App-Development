import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


type StudentProps = {
    name : String;
    rollNo : String;
    branch : String;
}

const StudentCard = ({name, rollNo, branch} : StudentProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.name}>Student Card</Text>

                <Image source={require("./assets/ID_photo.png")} style={styles.image}></Image>
                <Text style={styles.text}>Name : {name}</Text>
                <Text style={styles.text}>Roll no : {rollNo}</Text>
                <Text style={styles.text}>Branch : {branch}</Text>

                <View style={styles.details}>
                    <Text style={styles.text}>Year : 2025-26</Text>
                    <Text style={styles.text}>Div : A</Text>
                </View>
            
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#f5f5f5'
    },
    details :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '75%'
    },
    card : {
        width : 300,
        padding : 20,
        margin : 20,
        borderRadius : 15,
        borderWidth : 2,
        alignItems : 'center',
    },
    text : {
        fontSize : 18,
        margin: 5,
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 10
    },
    image : {
        width : 120,
        height : 120,
        borderRadius : 20,
        marginBottom : 15,
        borderWidth : 1.5,
        borderColor : 'black',
    },
    name :{
        fontSize : 22,
        fontWeight : 'bold',
        textAlign : 'center',
        paddingBottom : 10,
    },
});

export default StudentCard;