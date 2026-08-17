import {Text, View} from 'react-native';

type MyChildProp = {
    carName : string;
    color : string;
    price : number;
    model : number;
}
const MyChild = ({carName, color, model , price} : MyChildProp)=> {
    return(
        <View style={{backgroundColor : '#7c7070', marginTop : 20}}>
            <Text style={{fontSize : 19}}>Child component</Text>
            <Text style={{fontSize: 18, marginTop : 10}}>Car name : {carName}</Text>
            <Text style={{fontSize : 18}}>Car color : {color}</Text>
            <Text style={{fontSize : 18}}>Car Model : {model}</Text>
            <Text style={{fontSize : 18}}>Car Price : {price}</Text>
        </View>
    );
}

export default MyChild;