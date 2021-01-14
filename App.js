import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Broadband } from './screens/Broadband.js';
import { Landline } from './screens/Landline.js';
import { HomeScreen } from './screens/Homescreen.js';


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


