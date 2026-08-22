import React from 'react'
import { StyleSheet, TextInput } from "react-native";

type CustomInputProp = {
    placeholder : string;
    value : string;
    onChangeText : (text : string) => void;
}

const CustomInput = ({placeholder,value, onChangeText }: CustomInputProp) => {
    return(
        <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText}></TextInput>
    );
}

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        borderColor : 'black',
        borderRadius : 8,
        padding : 12,
        margin : 10,
        fontSize : 18,

    }
})
export default CustomInput;