import React, { useState } from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';

import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';

type LoginScreenProps  = {
    onRegister: () => void;
    onLoginSuccess : () => void;
}

const LoginScreen = ({onRegister, onLoginSuccess} : LoginScreenProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if(email === '' || password === ''){
            Alert.alert('Error', 'Please enter email and password');
            return;
        }
        // Alert.alert('Success', 'Login successful');
        onLoginSuccess();
    };

    return(
        <View style={styles.container}>
            <CustomHeader title="Student Study Planner"/>

            <Text style={styles.heading}>Login</Text>
            <CustomInput placeholder='Enter email' value = {email} onChangeText={setEmail}/>
            <CustomInput placeholder='Enter password' value = {password} onChangeText={setPassword} secureTextEntry={true}/>

            <CustomButton title="Login" onPress={handleLogin}/>
            <CustomButton title="Haven't Registered ? Register" onPress={onRegister}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 20,
        marginTop : 50,
    },
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        marginVertical : 20,
    },
});

export default LoginScreen;