import React from "react";
import { Button } from "react-native";

type CustomButtonProps = {
    title : string;
    onPress : () => void;
}

const CustomButton = ({title, onPress} : CustomButtonProps ) =>{
    return(
        <Button title={title} onPress={onPress}></Button>
    );
}

export default CustomButton;