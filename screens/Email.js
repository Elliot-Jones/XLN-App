import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheets, Text, View, Button, Alert, Asset} from 'react-native';
import logo from '../assets/logo2.png';
import t from 'tcomb-form-native';
import {styles} from '../styles/styles.js';
import * as MailComposer from 'expo-mail-composer';    //Mail

const Form = t.form.Form
export function Email({navigation}){
  
    handlePress = () => {
      MailComposer.composeAsync({
        recipients: ['Bartosz12346@gmail.com'],
        subject: 'XLN Troubleshooting',
        body: 'PLEASE ATTACH THE IMAGES AS PROOF',
      });
    }
  
    function EmailComposerLoop() {
        var i; // Make sure that there is a loop inside the step selector so that it can store the response 
        array;
        var Question;
        var EmailBody = "This is the history of the anwsers for the troubleshooting... ";
        for (var i = 1; i < array.length; i++)
        {
            EmailBody = EmailBody + "\n" + Question + " = "+ array[i]
        }
        if (i == array.length)
        {
            handlePress = () => {
                MailComposer.composeAsync({
                  recipients: ['Bartosz12346@gmail.com'],
                  subject: 'XLN Troubleshooting',
                  body: EmailBody,
                });
            }
        }
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