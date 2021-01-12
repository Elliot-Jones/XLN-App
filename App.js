import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View, Button, Alert } from 'react-native';
import logo from './assets/logo2.png';
import t from 'tcomb-form-native';

const Form = t.form.Form
var refNum = t.refinement(t.Number, function (n) { return (n.toString().length == 6 || n.toString().length == 11 ); })

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
  if(value.toString().length != 6 || value.toString().length != 11){
    return true;
  }
}

export default function App() {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log(value);
    if(value)
      if(value.refNum.toString().length == 11)
        ServiceSelector();
      else
        console.log("Broadband Pressed");
    else
    console.log('Error');
  }

  const ServiceSelector = () =>
    Alert.alert(
      "Select Service",
      "My Alert Msg",
      [
        {
          text: "Landline",
          onPress: () => console.log("Landline Pressed"),
        },
        { text: "Broadband", onPress: () => console.log("Broadband Pressed") }
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
