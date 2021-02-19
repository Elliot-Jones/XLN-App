import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Permissions, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import *as Sharing from 'expo-sharing';
import logo from '../assets/logo.png';
import * as MediaLibrary from 'expo-media-library';
import {styles} from '../styles/styles.js';


// handles image taking

/// select imgae form camera roll
export  function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let OpenImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permisssion is reqiured to access your camera");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    console.log(pickerResult)
    setSelectedImage({ localUri: pickerResult.uri });

  };
  // to open camera take image and render it back to the screen // does not ask for  permission 
  const [takeimage, settakeimage] = React.useState(null);

  const  pickFromCamera = async () => {


    let data = await ImagePicker.launchCameraAsync({
      mediatypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5

    })

    if (data.cancelled === true) {
      return;
    }
    console.log(data.base64) // image data stored here
    settakeimage({ localUri: data.uri })
   // saves photo to cameraroll // creates folder "tutorial where photo is saved"
    const assert = await MediaLibrary.createAssetAsync(data.uri);
    await MediaLibrary.createAlbumAsync("XLN", assert);
  }





  // where ill store the selected image  
  let _submitphoto = async () => {
    alert('photo submitted')
    setSelectedImage({ logo });

    return;
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={OpenImagePickerAsync}
          style={styles.buton}>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_submitphoto} 
          style={styles.Button}>
        <Text style={styles.body}>
            Photo saved successfully!
        </Text>
        <Text style={styles.body}>
            Please tap the top left of the screen to return to email page
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
  if (takeimage !== null) {

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={pickFromCamera}
          style={styles.Button}>
          <Image
            source={{ uri: takeimage.localUri }}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.body}>
            Please tap the top left of the screen to return to email page
        </Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <TouchableOpacity
        onPress={OpenImagePickerAsync}
        style={styles.button}>
            <Text style={styles.buttonText}> Pick a photo </Text>
        </TouchableOpacity>
        <View style={styles.space}/>
        <TouchableOpacity
        onPress={pickFromCamera}
        style={styles.button}>
            <Text style={styles.buttonText}> Take a photo </Text>
        </TouchableOpacity>



    </View>
  );

}

export default App;