import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, StyleSheets, Text, View, Button, Alert } from 'react-native';
import logo from '../assets/logo2.png';
import t from 'tcomb-form-native';
import {styles} from '../styles/styles.js';

var InputStr = t.refinement(t.String, function(n){return n;});
const Form = t.form.Form;
var j = 0;
const Description = t.struct({
  name:InputStr
});
const test = t.enums({
  Y: 'Yes',
  N: 'No'
});
const yesNo = t.struct({
  option: test
});

const options = {
  fields: {
    Description: {
      hasError: true,
      label: "Enter your Reference Number",
      placeholder: 'Customer Reference Number'
    },
  }
}




function DisplayStep(array, i,j){
  
  if(j > array[i].Steps.length-1){
      console.log("Here");
  }
  else{
    switch(array[i].Steps[j][1]){
      case 1:
        return(   
          <View>
          <Text>{array[i].Steps[j][0]}</Text>
          <Form type={Description} options = {options}/>
          </View>
        )
        case 2:
          return(
            <View>
            <Text>{array[i].Steps[j][0]}</Text>
            <Form type={yesNo} options = {options}/>
            </View>
        )
        default:
          return(
            <View>
        <Text>{array[i].Steps[j]}</Text>
      </View>
        )
      }
    }
  }
  
  
  export function StepDisplay ({ route, navigation }) {
    
    const {selection, faultData} = route.params;
    const [test, setTest] = useState(DisplayStep(faultData,selection,j));
    console.log(j);
    console.log(faultData[selection].Steps.length);
    if(j > faultData[selection].Steps.length-1){
      navigation.navigate("Email"  , {selection: (selection),faultData: (faultData)});
    }
      return (
        <View style={styles.container}>
            <Text style = {styles.body}>{test}</Text>
            <Button title='Next' onPress = {() => {j++; setTest(DisplayStep(faultData,selection,j));}}/>
        </View>
      );
    }
    export default StepDisplay;