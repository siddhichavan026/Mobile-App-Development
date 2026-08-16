import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

type Fruit = {
  id : string;
  name : string;
  image : any;
};

const fruits: Fruit[] = [
  {
    id: '1',
    name: 'Apple',
    image: require('./assets/Apple.jpg'),
  },
  {
    id: '2',
    name: 'Grapes',
    image: require('./assets/grapes.png'),
  },
  {
    id: '3',
    name: 'Guava',
    image: require('./assets/Guava.jpg'),
  },
  {
    id: '4',
    name: 'Mango',
    image: require('./assets/Mango.jpg'),
  },
  {
    id: '5',
    name: 'Orange',
    image: require('./assets/orange.jpg'),
  },
];

const FruitList = ()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Fruit List </Text>
            <FlatList data={fruits} renderItem={({item}) => (
              <View style={styles.card}>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.name}>{item.name}</Text>
              </View>
            )}
            keyExtractor = {(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    padding : 30,
  },
  card : {
    flexDirection : 'row',
    alignItems : 'center',
    minHeight : 140,
    padding : 15,
    marginBottom : 12,
    borderWidth : 1,
    borderRadius : 10,
  },
  image : {
    width : 100,
    height : 100, 
    resizeMode : 'contain',
    marginRight : 20,
  },
  name : {
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    margin : 50,
  },
});
export default FruitList;