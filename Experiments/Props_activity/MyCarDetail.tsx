import {View, Text} from 'react-native';

type MyCarDetailProp = {
    name : string;
    price?: number;
}

// ? sign is used for optional prop we can skip it means parent will pass but child may or may not use it 

const MyCarDetail = ({name, price} : MyCarDetailProp)=> {
    return(
        <View style={{backgroundColor : '#c47bee', marginTop : 5}}>
            <Text style={{fontSize : 19}}>Car details -- </Text>
            <Text style={{fontSize : 18}}>Car name : {name}</Text>
            <Text style={{fontSize : 18}}>Car price : {price}</Text>
        </View>
    );
}

export default MyCarDetail;