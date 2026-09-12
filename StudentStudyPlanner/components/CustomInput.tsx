import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import theme from '../theme';

type CustomInputProps = {
    placeholder : string;
    value : string;
    onChangeText : (text : string) => void;
    secureTextEntry? : boolean;
};

const CustomInput = ({placeholder, value, onChangeText, secureTextEntry} : CustomInputProps) => {
    return(
        <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry}></TextInput>
    );
};

const styles = StyleSheet.create({
    input:{
        borderWidth : 1,
        borderColor : theme.colors.gray,
        borderRadius : 5,
        padding : 10,
        marginVertical : 5,
        fontSize : theme.fontSize.medium,
    },
});

export default CustomInput;