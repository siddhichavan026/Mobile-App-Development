import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import theme from '../theme';

type CustomHeaderProp = {
    title : string;
}

const CustomHeader = ({title} : CustomHeaderProp) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    header : {
        backgroundColor : theme.colors.primary,
        padding : 15,
    },
    title : {
        color : theme.colors.white,
        fontSize : theme.fontSize.large,
        fontWeight : 'bold',
    },
});

export default CustomHeader;