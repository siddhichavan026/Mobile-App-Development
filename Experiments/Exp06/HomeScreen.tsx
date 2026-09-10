import React, {useState} from "react";
import {View, StyleSheet, Text, Button} from 'react-native';

import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";

const HomeScreen = ()=>{
   
    const [screen, setScreen] = useState('home');

    if(screen === 'profile'){
        return(
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Button title="Home" onPress={() => setScreen('home')}></Button>

                    <Button title="Profile" onPress={() => setScreen('profile')}></Button>

                    <Button title="Settings" onPress={() => setScreen('settings')}></Button>

                </View>
                <ProfileScreen/>
            </View>
        );
    }

    if(screen === 'settings'){
        return(
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Button title="Home" onPress={() => setScreen('home')}></Button>

                    <Button title="Profile" onPress={() => setScreen('profile')}></Button>

                    <Button title="Settings" onPress={() => setScreen('settings')}></Button>
                </View>
                <SettingScreen/>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Button title="Profile" onPress={() => setScreen('profile')}></Button>
                <Button title="Settings" onPress={() => setScreen('settings')}></Button>
            </View>
            <View style={styles.content}>
                <Text style={styles.welcome}>Welcome to My App</Text>
            </View>


        </View>
    )

    
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 50,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    welcome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#6a76cc',
        borderTopWidth: 2,
        borderTopColor: 'black',
        paddingHorizontal: 10,
        elevation: 5,
    },

});

export default HomeScreen;
