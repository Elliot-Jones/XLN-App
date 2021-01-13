import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {TouchableOpacity, TextInput, Image, StyleSheet, Text, View, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker'
import logo from './assets/logo2.png';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.body}>Please enter customer reference number</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      />
      <TouchableOpacity onPress={alert("Click")}>
      <View style={styles.button}>
      <Text style={styles.buttonText}>Click Me</Text>
      </View>
      </TouchableOpacity>
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
  },
  button: {
    backgroundColor: "#00a3c4",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {

  }
});

// Choose an image
export default class App extends React.Component {
  state = {
    photo: null,
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  render() {
    const { photo } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}
