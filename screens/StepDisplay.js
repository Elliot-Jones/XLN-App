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
var answers = ['','','','','','','','','','','','','','','','','','','','',]
var ans = 0
YesS = () =>{
  answers[ans] = 'Yes';
  ans = ans + 1
  console.log (answers)
}

NoS = () =>{
  answers[ans] = 'No';
  ans = ans + 1
  console.log (answers)
}

TextBoxTing = () => {
  answers[ans] = Description;
  ans = ans + 1
  console.log (answers)
}

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
  console.log(j);
  
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
            <View style={styles.container}>
            <Image source={logo} style={styles.logo}/>
            <Text>{array[i].Steps[j][0]}</Text>
            <Button
              title="Yes"
              onPress={this.YesS}
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
        <Text>{array[i].Steps[j]+ answers[ans]}</Text>
      </View>
        )
      }
    }
  }
  
  
  export function StepDisplay ({ route, navigation }) {
    
    const {selection, faultData} = route.params;
    const [test, setTest] = useState(DisplayStep(faultData,selection,j));
      return (
        <View style={styles.container}>
            <Text style = {styles.body}>{test}</Text>
            
            <Button title='Next' onPress = {() => {j++; setTest(DisplayStep(faultData,selection,j));}}/>
        </View>
      );
    }
    export default StepDisplay;