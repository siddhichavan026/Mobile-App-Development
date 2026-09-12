import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import theme from '../theme';

type CustomButtonProps = {
    title : string;
    onPress : () => void;
};

const CustomButton = ({title, onPress} : CustomButtonProps) => {
    return(
        <View style={styles.button}>
            <Button title={title} onPress={onPress} color={theme.colors.primary}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    button :{
        margin : 5,
    },
});

export default CustomButton;