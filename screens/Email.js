import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheets, Text, View, Button, Alert, Asset} from 'react-native';
import logo from '../assets/logo2.png';
import t from 'tcomb-form-native';
import {styles} from '../styles/styles.js';
import * as MailComposer from 'expo-mail-composer';    //Mail

const Form = t.form.Form
export function Email({route, navigation}){
  
  handlePress = () => {

  }
  
    handlePress = () => {
        var i ; // Make sure that there is a loop inside the step selector so that it can store the response 
        var array = ["Yes", "No", "Yes", "No", "Yes", "No", "No", "Yes", "No", "No" ];
        const {selection, faultData} = route.params;
        var EmailBody = "This is the history of the anwsers for the troubleshooting...\n " + faultData[selection].Name;
        for (var i = 0; i < faultData[selection].Steps.length-1; i++)
        {
            EmailBody = EmailBody + "\n\n" + faultData[selection].Steps[i][0] + " = "+ array[i];
        }
                MailComposer.composeAsync({
                  recipients: ['service@telecom-service.co.uk'],
                  subject: 'XLN Troubleshooting',
                  body: EmailBody,
                });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>XLN App</Text>
        <Image source={logo} style={styles.logo}/>
                  
          <Button
            title="Email Us"
            onPress={()=>this.handlePress()}
          />
          
        <StatusBar style="auto" />
      </View>
    );
  }
  export default Email;