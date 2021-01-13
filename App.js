import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View, Button, Alert } from 'react-native';
import logo from './assets/logo2.png';
import t from 'tcomb-form-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Form = t.form.Form
var refNum = t.refinement(t.Number, function (n) { return (n.toString().length == 6 || ("0" + n.toString()).length == 11 ); })

refNum.getValidationErrorMessage = function (value, path, context) {
  if(value == null){
    return "Empty"
  }
  else if(validation(value)){
    return "Please enter a 6 digit ID number or a landline number";
  }
};

const User = t.struct({
  refNum: refNum,
})

const options = {

  fields: {
    refNum: {
      hasError: false,
      label: "Enter your Reference Number",
      placeholder: 'Customer Reference Number',
  },
  stylesheet: formStyles,
}
};

function validation (value){
  console.log();
  if(value.toString().length != 4 || (value.toString()).length != 0){
    return true;
  }
}

function compareData(array,key){
  var i;
  for(i = 0; i < array.length; i++){
    if(array[i].cli_cus_key == key || array[i].cli_line_number == key)
      if(array[i].dsl_active)
        return true
      else
        return false
  }
  return null;
}


function Broadband ({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen1</Text>
    </View>
  );
}

function Landline ({navigation}){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen2</Text>
    </View>
  );
}


function HomeScreen({navigation}){
  handleSubmit = () => {
    const value = this._form.getValue();
    customData = require('./cus_data.json');
    if(value)
      if(compareData(customData, value.refNum) == null)
        Alert.alert("Account not found");
      else if (compareData(customData, value.refNum))
        ServiceSelector();
      else
        navigation.navigate('Broadband');
    else
    console.log('Error');
  }

  const ServiceSelector = () =>
    Alert.alert(
      "Select Service",
      "Please select a service below",
      [
        {
          text: "Landline",
          onPress: () => navigation.navigate('Landline'),
        },
        { text: "Broadband", onPress: () => navigation.navigate('Broadband')}
      ]
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>XLN App</Text>
      <Image source={logo} style={styles.logo}/>
      <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Log in"
          onPress={this.handleSubmit}
        />
      <StatusBar style="auto" />
    </View>
  );
}







const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Broadband" component={Broadband} />
          <Stack.Screen name="Landline" component={Landline} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: 'absolute',
    top: 50,
  },
  body: {
    textAlign: "center",
    fontSize: 20,
    color: "#3e3d40"
  },
  logo: {
    position: 'absolute',
    top: 100
  }
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}
