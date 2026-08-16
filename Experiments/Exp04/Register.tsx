import { StyleSheet , Alert, View, Text, TextInput, Button} from "react-native";
import { useState } from "react";

const Register = ({goToLogin} : any)=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister= ()=> {
        if(name === '' ||
            email === '' ||
            password === ''||
            confirmPassword === ''){
                Alert.alert('error', "Please fill all fields");
            }else if(password !== confirmPassword){
                Alert.alert('error', "Passwords do not match");
            }else{
                Alert.alert('success', "Registration successful!", 
                    [
                        {
                            text: 'OK',
                            onPress: goToLogin
                        }
                    ]);
            }

          
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Register</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName}></TextInput>

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail}></TextInput>

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter password" value={password} onChangeText={setPassword} secureTextEntry></TextInput>

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input} placeholder="Enter confirmpassword" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry></TextInput>

            <View style={styles.buttonView}>
                <Button title="Register" onPress={handleRegister}></Button>
                <View style={styles.loginButton}>
                    <Button title="Already registred ? Login" onPress={goToLogin}></Button>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        margin : 25,
    },
    text : {
        fontSize : 30,
        fontWeight : 'bold',
        color : '#222',
        textAlign : 'center',
        marginBottom : 50, 
    },
    label : {
        fontSize : 20,
        fontWeight : '600',
        color : '#333',
        marginBottom : 8,
        marginLeft : 20,
    },
    input : {
        height : 50,
        width : 300,
        borderWidth : 1,
        borderColor : '#ccc',
        borderRadius : 8,
        paddingHorizontal : 15,
        fontSize : 16,
        marginBottom : 20,
        marginLeft : 20,
    },
    buttonView : {
        width : '80%',
        justifyContent :'center',
        marginTop: 10,
        marginLeft : 20,
    },
    loginButton : {
        marginTop: 20,
    }
})

export default Register;