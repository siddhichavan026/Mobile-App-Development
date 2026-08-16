import React , {useState}from 'react';
import {View, Text, StyleSheet, Alert, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        if(email === '' || password === ''){
            Alert.alert('Error', 'Please enter Email and Password');
            return;
        }

        Alert.alert('Success', 'Login Successful');
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login </Text>
            <TextInput style = {styles.input} placeholder='Enter Email' placeholderTextColor="#888" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none"/>
            <TextInput style={styles.input} placeholder="Enter Password" placeholderTextColor="#888" value={password} onChangeText={setPassword} secureTextEntry={true}/>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#000',
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;