import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, StyleSheets, Text, View, Button, Alert } from 'react-native';
import logo from '../assets/logo2.png';
import t from 'tcomb-form-native';
import {styles} from '../styles/styles.js';

var j = 0;
  function DisplayStep(array, i,j){
    console.log(j);
    return(
        <View>
          <Text>{array[i].Steps[j]}</Text>
        </View>
    )
  }


  export function StepDisplay ({ route, navigation }) {
    const {selection} = route.params;
    faultData = require('../BroadbandFaultData.json');
    const [test, setTest] = useState(DisplayStep(faultData,selection,j));
      return (
        <View>
            <Text style = "font-weight: bold">{test}</Text>
            <Button title='No' onPress = {() => {j++; setTest(DisplayStep(faultData,selection,j));}}/>
            <Button title='Yes' onPress = {() => {j=0;}}/>
        </View>
      );
    }
    export default StepDisplay;