import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo2.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>XLN App</Text>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.body}>Please enter customer reference number</Text>
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
