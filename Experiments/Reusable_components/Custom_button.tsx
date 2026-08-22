import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type CustomButtonProp = {
    title : string;
    onpress : () => void;
}

const Custom_button = ({title, onpress}: CustomButtonProp)=> {
    return(
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.touchableOpacity} onPress={onpress}>
            <Text style={Styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const Styles = StyleSheet.create({
    container : {
        padding : 60
    }, 
    touchableOpacity: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 8,
    },

    text: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Custom_button;