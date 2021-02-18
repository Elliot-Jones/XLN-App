import React from 'react';
import {Image, Text, View, Linking, Button} from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import {styles} from '../styles/styles.js';
import logo from '../assets/logo.png';

export function InfoScreen (){
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <Hyperlink linkDefault
            linkStyle={{color: '#2980b9', fontSize: 20}}
            linkText={ 
                url => url === 'https://www.xln.co.uk/' ? 
                'XLN website' : url }
        >
            <Text style={ { fontSize: 15 } }>
            https://www.xln.co.uk/
            </Text>
        </Hyperlink>
        <Button
          onPress={() => Linking.openURL('mailto:service@telecom-service.co.uk?subject=Get_in_touch') }
          title="Get in touch!"
        />
      </View>
    );
  }
  export default InfoScreen;