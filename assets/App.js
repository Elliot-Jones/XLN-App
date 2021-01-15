import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Permissions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import *as Sharing from 'expo-sharing';
import logo from './assets/logo.png';


export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let OpenImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("permisssion is requred to acces camera");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('you cant share');

      return;
    }
    await Sharing.shareAsync(selectedImage.localUri)
  };

  let _subbmitphoto = async () => {
    alert('photo subbmited')
    setSelectedImage({ logo });

  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={OpenImagePickerAsync}
          style={styles.container}><Text sytle={styles.butontext}>change photo</Text>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_subbmitphoto}  // {async()=>
          style={styles.buton2}>
          <Text sytle={styles.butontext}>subbmit photo</Text>


        </TouchableOpacity>



      </View>
    );
  }



  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>
        Step 1 </Text>
      <Text style={styles.instructions}>
        Power off the connected computers and then disconect the router
      </Text>
      < Image source={logo} style={styles.logo} />



      <TouchableOpacity

        onPress={OpenImagePickerAsync}
        style={styles.buton2}>
        <Text style={styles.butontext}> pick a photo </Text>

      </TouchableOpacity>
      <TouchableOpacity

        onPress={ImagePicker.launchCameraAsync}
        style={styles.buton2}>
        <Text style={styles.butontext}> take a photo </Text>

      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  logo: {
    width: 405,
    height: 359,


  },
  instructions:
  {
    color: '#f0f',

    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 20,
  },
  butontext:
  {
    color: '#D0D0D0',
    textAlign: 'center',

  },
  buton: {

    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,

  },
  buton2:
  {
    backgroundColor: '	rgb(0, 191, 255)',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },



});
const winger = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },



});