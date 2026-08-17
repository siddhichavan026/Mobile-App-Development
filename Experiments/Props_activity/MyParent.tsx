import {View, Text} from 'react-native';
import MyChild from './MyChild';
import MyCarDetail from './MyCarDetail';

const MyParent = ()=>{
    const carName = "Thar";
    const carColor = "White";
    const carPrice = 500000;
    const carModel = 2025;

    return(
        <View style={{backgroundColor : 'grey', marginTop : 50}}>
            <Text style={{fontSize : 20}}>Parent Component</Text>
            <MyChild carName = {carName} color = {carColor} model = {carModel} price = {carPrice}/>
            <MyCarDetail name = {carName} price = {carPrice}/>
        </View>
        
    );
}

export default MyParent;