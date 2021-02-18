import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  StepSelector  from './screens/Stepselector.js';
import  HomeScreen  from './screens/Homescreen.js';
import InfoScreen from './screens/InfoScreen.js';
import  StepDisplay  from './screens/StepDisplay.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Email from './screens/Email.js';

const Tab = createBottomTabNavigator();
function MyTabs() {
	return (
		<Tab.Navigator tabBarOptions={{activeTintColor: '#00a3c4',}}>
			<Tab.Screen name="Home" component={HomeScreen} 
      options={{
          tabBarLabel: 'Home',
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
			<Tab.Screen name="Info" component={InfoScreen} 
      options={{
        tabBarLabel: 'Info',
        title: 'Info',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Information" color={color} size={size} />
        ),
      }}
      />
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Info" component={MyTabs}/>
          <Stack.Screen name="Step Selector" component={StepSelector} />
          <Stack.Screen name="Step Display" component={StepDisplay} />
          <Stack.Screen name="Email" component={Email} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


