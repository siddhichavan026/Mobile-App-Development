import React from 'react'; 
import {View, Text, Button, StyleSheet} from 'react-native';

const DebugExample = () => {
    const calculateTotal = () => {
        const price = 100;
        const quantity = 3;

        const total = price * quantity;

        console.log("Total :  ", total);

        return total;
    };

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Debugging Example </Text>

            <Button title='Calculate total' onPress={calculateTotal}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});


export default DebugExample;