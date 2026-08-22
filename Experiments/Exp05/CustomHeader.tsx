import React from "react";
import { View, StyleSheet, Text } from "react-native";

type CustomHeaderProp = {
    title : string;
}
const CustomHeader = ({title} : CustomHeaderProp) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header : {
        padding : 20,
        backgroundColor : '#4f198dd1',
    },
    title : {
        color : 'white',
        fontSize : 22,
        fontWeight : 'bold',
        textAlign : 'center'
    },
});

export default CustomHeader;