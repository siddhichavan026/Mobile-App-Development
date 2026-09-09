import React , {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomHeader from '../Exp05/CustomHeader';
import CustomInput from '../Exp05/CustomInput';
import CustomButton from '../Exp05/CustomButton';
import CustomProfileCard from './CustomProfileCard';

const ProfileScreen = () => {
    const[username , setUsername] = useState('');
    const[password , setPassword] = useState('');

    const handleUpdate = () => {
        console.log(username, password);
    };

    return(
        <View style={styles.container}>
            <CustomHeader title="Profile"/>
            <CustomProfileCard>
                <CustomInput placeholder="Enter username " value={username} onChangeText={setUsername}/>
                <CustomInput placeholder="Enter Password" value={password} onChangeText={setPassword} />

                <CustomButton title="Update Profile" onPress={handleUpdate}/>
            </CustomProfileCard>

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 55,
        paddingLeft : 10, 
        paddingRight : 10,
    },
});

export default ProfileScreen;