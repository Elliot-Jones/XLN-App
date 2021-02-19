import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheets, Image, Text, View, Button, TouchableOpacity, Alert , TextInput} from 'react-native';
import logo from '../assets/logo.png';
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
            <Text style={styles.body}>{array[i].Steps[j][0]}</Text>
            <TouchableOpacity style = {styles.button} onPress= {this.YesS}>
              <View>
                <Text style={styles.buttonText}>
                  Yes
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.space}/>
            <TouchableOpacity style = {styles.button} onPress= {this.NoS}>
              <View>
                <Text style={styles.buttonText}>
                  No
                </Text>
              </View>
            </TouchableOpacity>
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
          <Image source={logo} style={{flex:1, maxHeight:159, maxWidth:400, marginTop:20, marginBottom:35}}/>
            <Text style = {styles.body}>{step}</Text>
            <TouchableOpacity style = {styles.button} onPress = {() => {j++; setStep(DisplayStep(faultData,selection,j, false));}}>
              <View>
                <Text style={styles.buttonText}>
                  Next
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.space}/>
            <TouchableOpacity style = {styles.button} onPress = {() => {j--; setStep(DisplayStep(faultData,selection,j, false));}}>
              <View>
                <Text style={styles.buttonText}>
                  Back
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.space}/>
            <TouchableOpacity style = {styles.button} onPress = {() => {j=0; setStep(DisplayStep(faultData,selection, j))}}>
              <View>
                <Text style={styles.buttonText}>
                  Go to start
                </Text>
              </View>
            </TouchableOpacity>
        </View>
      );
    }
    export default StepDisplay;