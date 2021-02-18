import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ListAll(array, navigation){
  return array.map(function(item,i){
    return(
      <View key={i}>
        <TouchableOpacity onPress={() => navigation.navigate('Step Display' , {selection: (i),faultData: (array)})}>
          <Text>{(item.Name)}</Text>
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
      <View>
          <Text style = "font-weight: bold">{selection}</Text>
          {ListAll(faultData, navigation)}
      </View>
    );
  }
  export default Step_Selector;