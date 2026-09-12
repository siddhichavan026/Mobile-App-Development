import React , {useState} from 'react';
import {View, Text, StyleSheet, Alert}  from 'react-native';


import CustomHeader from '../components/CustomHeader';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type RegisterScreenProps = {
    onLogin : () => void;
}

const RegisterScreen = ({onLogin} : RegisterScreenProps) => {
    const [name, setName]  = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if(name === '' || email === '' || password === ''){
            Alert.alert('Error', 'Please fill all fields');
            return;
        }
        onLogin();
    };

    return(
        <View style= {styles.container}>
            <CustomHeader title="Student Study Planner"/>

            <Text style={styles.heading}>Register</Text>

            <CustomInput placeholder="Enter name" value={name} onChangeText={setName}/>
            <CustomInput placeholder="Enter email" value={email} onChangeText={setEmail}/>
            <CustomInput placeholder="Enter password" value={password} onChangeText={setPassword} secureTextEntry={true}/>

            <CustomButton title="Register" onPress={handleRegister}/>
            <CustomButton title="Already registered ? Login" onPress={onLogin}/>
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

export default RegisterScreen;