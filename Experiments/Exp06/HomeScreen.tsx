import React, {useState} from "react";
import {View, StyleSheet} from 'react-native'
import CustomButton from "../Exp05/CustomButton";
import CustomHeader from "../Exp05/CustomHeader";
import CustomInput from "../Exp05/CustomInput";
import Customcard from "../Exp05/CustomCard";

const HomeScreen = ()=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [department, setDepartment] = useState('');


    const [SubmittedName, setSubmittedName] = useState('');
    const [submittedAge, setSubmittedAge] = useState('');
    const [submittedRollNo, setSubmittedRollNo] = useState('');
    const [submittedDepartment, setSubmittedDepartment] = useState('');

    const handleSubmit = ()=> {
        setSubmittedName (name);
        setSubmittedAge(age);
        setSubmittedRollNo(rollNo);
        setSubmittedDepartment(department);
    };

    return(
        <View style={styles.container}>
            <CustomHeader title="Student Management"/>

            <CustomInput placeholder="Enter student name" value={name} onChangeText={setName}/>
            <CustomInput placeholder="Enter Age" value={age} onChangeText={setAge}/>
            <CustomInput placeholder="Enter Roll No" value={rollNo} onChangeText={setRollNo}/>
            <CustomInput placeholder="Enter Department" value={department} onChangeText={setDepartment}/>

            <CustomButton title="Submit" onPress={handleSubmit}></CustomButton>

            <Customcard name={SubmittedName} age={submittedAge} rollNo={submittedRollNo} department={submittedDepartment}></Customcard>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 55,
        paddingLeft : 10,
        paddingRight : 10,
    },
})

export default HomeScreen;
