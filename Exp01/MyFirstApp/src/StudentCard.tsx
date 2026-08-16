import React from 'react';
import {View, Text, StyleSheet, Image}from 'react-native';

const StudentCard = () => {
    return(
        <View style={styles.container}>
            <View style = {styles.card}>
                <Image source={require("./assets/ID_photo.png")} style={styles.image}/>

                <Text style={styles.text}>Name : Siddhi Chavan</Text>
                <Text style={styles.text}>Roll NO : 23UAM018</Text>
                <Text style={styles.text}>Branch : CSE(AIML)</Text>
                <Text style={styles.text}>Year : Final Year</Text>

            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
   card: {
    width: 320,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StudentCard;