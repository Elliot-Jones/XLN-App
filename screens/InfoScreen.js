import React from 'react';
import {Image, Text, View, Linking, Button} from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import {styles} from '../styles/styles.js';
import logo from '../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function InfoScreen (){
  handlePress = () => {
    MailComposer.composeAsync({
      recipients: ['service@telecom-service.co.uk'],
      subject: 'XLN get in touch',
    });
  }
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>

        <TouchableOpacity
        onPress={() => Linking.openURL('https://www.xln.co.uk/') }
        style={styles.button}>
          <View>
              <Text style={{fontSize: 20, fontWeight:'bold', color: '#ffffff'}}>
              XLN Website
              </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress()}>
          <View>
            <Text style={{fontSize: 20, fontWeight:'bold', color: '#ffffff'}}>
              Get in touch!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  export default InfoScreen;