import React from 'react';
import {Image, Text, View, Linking, Button} from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import {styles} from '../styles/styles.js';
import logo from '../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function InfoScreen (){
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>

        <TouchableOpacity
        onPress={() => Linking.openURL('https://www.xln.co.uk/') }
        style={styles.button}>
          <View>
              <Text style={{fontSize: 20, color: '#ffffff'}}>
              XLN Website
              </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.space} />
        <TouchableOpacity
        onPress={() => Linking.openURL('mailto:service@telecom-service.co.uk?subject=Get_in_touch') }
        style={styles.button}>
          <View>
              <Text style={{fontSize: 20, color: '#ffffff'}}>
              Get in touch!
              </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  export default InfoScreen;