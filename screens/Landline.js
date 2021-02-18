import React from 'react';
import {Text, View} from 'react-native';

export function Landline ({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen2</Text>
      </View>
    );
  }
  export default Landline;


  const IssueSelector = () =>
    Alert.alert("Select Issue","Please select the issue that is occurring below",
      [{text: "Unknown",onPress: () => navigation.navigate('UnknownLand'),},
      {text: "Damaged hardware steps", onPress: () => navigation.navigate('DamagedHardwareLand')}]);