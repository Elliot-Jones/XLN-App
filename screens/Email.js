import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheets, Text, View, TouchableOpacity, Alert, Asset} from 'react-native';
import logo from '../assets/logo.png';
import t from 'tcomb-form-native';
import {styles} from '../styles/styles.js';
import * as MailComposer from 'expo-mail-composer';    //Mail
import {App} from "./Camera.js";

const Form = t.form.Form
export function Email({route, navigation}){
  handlePress = () => {
      var i ; // Make sure that there is a loop inside the step selector so that it can store the response 
      var array = ["Yes", "No", "Yes", "No", "Yes", "No", "No", "Yes", "No", "No" ];
      const {selection, faultData, responses} = route.params;
      var EmailBody = "This is the history of the anwsers for the troubleshooting...\n " + faultData[selection].Name;
      for (var i = 0; i < faultData[selection].Steps.length; i++)
      {
          EmailBody = EmailBody + "\n\n" + faultData[selection].Steps[i][0] + " = "+ responses[i];
      }
      MailComposer.composeAsync({
        recipients: ['service@telecom-service.co.uk'],
        subject: 'XLN Troubleshooting',
        body: EmailBody,
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.body}>Thank you for using our troubleshooter </Text>
        <Text style={styles.body}>Please click link to take an image of your issue, return to this screen, then click the email link and attach the image to your email</Text>
        <Image source={logo} style={styles.logo}/>

        <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate('Camera')}>
          <View>
            <Text style={styles.buttonText}>
             
              Take picture
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space}/>
        <TouchableOpacity style={styles.button}  onPress={()=>this.handlePress()}>
          <View>
            <Text style={styles.buttonText}>
              Email Us
            </Text>
          </View>
        </TouchableOpacity>        
        <StatusBar style="auto" />
      </View>
    );
  }
  export default Email;
