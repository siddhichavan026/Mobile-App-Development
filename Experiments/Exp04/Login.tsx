import { useState } from "react"
import { StyleSheet , View, Text, Alert, TextInput, Button} from "react-native"

const Login = ({goToRegister} : any)=> {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = ()=> {
        if(email === ''){
            Alert.alert("Please enter email");
        }
        else if(pass === ''){
            Alert.alert("Please enter password");
        }
        else{
             Alert.alert('Success', "Login successful!!");
        }
       
    }
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>Login page </Text>

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail}></TextInput>

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter password" value={pass} onChangeText={setPass} secureTextEntry></TextInput>

            <View style={styles.buttonView}>
                <Button title="Login" onPress={handleLogin}></Button>
                <View style={styles.registerButton}>
                    <Button title="Haven't registered ? Register " onPress={goToRegister}></Button>
                </View>
                
            </View>
            
        </View>
    );

};

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
        height : 60,
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
    registerButton : {
         marginTop: 20,
    }
})

export default Login;