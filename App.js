import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  StepSelector  from './screens/Stepselector.js';
import  HomeScreen  from './screens/Homescreen.js';
import InfoScreen from './screens/InfoScreen.js';
import  StepDisplay  from './screens/StepDisplay.js';

const Tab = createBottomTabNavigator();
function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Info" component={InfoScreen} />
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Step Selector" component={StepSelector} />
          <Stack.Screen name="Step Display" component={StepDisplay} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


