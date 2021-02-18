
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Permissions, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Camera} from 'expo-camera';
import *as Sharing from 'expo-sharing';
import logo from './assets/logo.png';

// handles image taking

/// select imgae form camera roll
export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let OpenImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("permisssion is requred to acces camera");
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
const [takeimage,settakeimage] = React.useState(null);
  
const pickFromCamera = async () => {
   

      let data = await ImagePicker.launchCameraAsync({
        mediatypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5

      })

      if (data.cancelled === true) {
        return;
      }
      console.log(data) // image data stored here
      settakeimage({localUri:data.uri})
      
  }



  /*  let openShareDialogAsync = async () => {
     if (!(await Sharing.isAvailableAsync())) {
       alert('you cant share');
 
       return;
     }
     await Sharing.shareAsync(selectedImage.localUri)
   };
 */

// where ill store the selected image  
  let _subbmitphoto = async () => {
    alert('photo subbmited')
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
          onPress={_subbmitphoto}  // {async()=>
          style={styles.buton2}>
          <Text sytle={styles.butontext}>subbmit photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
 if (takeimage!=null){
     return (
      <View style={styles.container}>
        <TouchableOpacity onPress={pickFromCamera}
          style={styles.buton}>
          <Image
            source={{ uri: takeimage.localUri }}
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
         </Text>
      <Text style={styles.instructions}>
       
      </Text>
     



      <TouchableOpacity

        onPress={OpenImagePickerAsync}
        style={styles.buton2}>
        <Text style={styles.butontext}> pick a photo </Text>

      </TouchableOpacity>
      <TouchableOpacity

        onPress={pickFromCamera}
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
    backgroundColor: 'red',
    textAlign: 'right',
    justifyContent: 'center',

  },



});