import React from "react";
import {View, Text, StyleSheet} from 'react-native';

type CustomCardProp = {
    name : string;
    age : string;
    rollNo : string;
    department : string;
}
const Customcard = ({name, age, rollNo, department} :CustomCardProp )=> {
    return(
        <View style={styles.card}>
            <Text style={styles.title}>Student details</Text>

            <Text style={styles.text}>Name : {name}</Text>
            <Text style={styles.text}>Age : {age}</Text>
            <Text style={styles.text}>Roll No : {rollNo}</Text>
            <Text style={styles.text}>Department : {department}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    card : {
        margin : 20, 
        padding : 25,

        backgroundColor: '#f5f5f5',
        borderWidth : 2, 
        borderColor : 'black',
        borderRadius : 15,
        minHeight : 250,

        elevation : 4,
    },
    title : {
        fontSize : 26,
        fontWeight : 'bold',
        color : 'black',
        marginBottom : 15,
    },
    text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
})

export default Customcard;