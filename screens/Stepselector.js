import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles.js';
import logo from '../assets/logo.png';

function ListAll(array, navigation){
  return array.map(function(item,i){
    return(
      <View key={i}>
        <TouchableOpacity onPress={() => navigation.navigate('Step Display' , {selection: (i),faultData: (array)})} style={styles.selectionButton}>
          <Text style={styles.buttonText}>{(item.Name)}</Text>
        </TouchableOpacity>
      </View>
    )
  })
}

export function Step_Selector ({ route, navigation }) {
  const {selection} = route.params;
  if((selection) == ("Broadband")){
    faultData = require('../BroadbandFaultData.json');
  }
  else{
    faultData = require('../LandlineFaultData.json');
  }
    return (
      <View style={styles.container}>
          <Image source={logo} style={styles.logo}/>
          <Text style ={styles.header}>{selection}</Text>
          {ListAll(faultData, navigation)}
      </View>
    );
  }
  export default Step_Selector;