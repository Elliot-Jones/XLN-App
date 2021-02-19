import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, StyleSheets, Text, View, Button, Alert , TextInput} from 'react-native';
import logo from '../assets/logo2.png';
import t from 'tcomb-form-native';
import {styles} from '../styles/styles.js';
import { get } from 'react-hook-form';

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

var answers = ['','','','','','','','','','','','','','','','','','','','',]
YesS = () =>{
  answers[j] = 'Yes';
  console.log (answers)
}

NoS = () =>{
  answers[j] = 'No';
  console.log (answers)
}


function DisplayStep(array, i,j){
  if(j > array[i].Steps.length-1){
      console.log("Here");
  }
  else if(j<0){
    j = 0;
  }
  else{
    switch(array[i].Steps[j][1]){
      case 1:
        return(   
          <View>
          <Text>{array[i].Steps[j][0]}</Text>
          <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
          </View>
        )
        case 2:
          return(
            <View>
            <Text>{array[i].Steps[j][0]}</Text>
            <Button
              title="Yes"
              onPress= {this.YesS}
            />
            <Button
              title="No"
              onPress={this.NoS}
            />
            <StatusBar style="auto" />
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
    const {selection, faultData,reset} = route.params;
    const [step, setStep] = useState(DisplayStep(faultData,selection,0));
    console.log(j);
    console.log(faultData[selection].Steps.length);
    if(j > faultData[selection].Steps.length-1){
      navigation.navigate("Email"  , {selection: (selection),faultData: (faultData), responses: (answers)});
    }
      return (
        <View style={styles.container}>
            <Text style = {styles.body}>{step}</Text>
            <Button title='Next' onPress = {() => {j++; setStep(DisplayStep(faultData,selection,j));}}/>
            <Button title = 'Back' onPress = {() => {j--; setStep(DisplayStep(faultData,selection,j));}}/>
            <Button title = 'Go to start' onPress = {() => {j=0; setStep(DisplayStep(faultData,selection, j))}} />
        </View>
      );
    }
    export default StepDisplay;