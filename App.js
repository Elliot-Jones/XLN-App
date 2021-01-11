import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View, Button } from 'react-native';
import logo from './assets/logo2.png';
import t from 'tcomb-form-native';

const Form = t.form.Form
var refNum = t.refinement(t.Number, function (n) { return n > 9999; })

refNum.getValidationErrorMessage = function (value, path, context) {
  if(value == null){
    return "Empty"
  }
  else if(value < 9999){
    return "Must be at least 5 long";
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

export default function App() {
  handleSubmit = () => {
    const value = this._form.getValue();
    if(value)
    console.log('value: ', value);
    else
    console.log('Error');
  }
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
