import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

// Choose an image
export default class imageSelection extends React.Component {
    state = {
      photo: null,
    }
  // Choose the Image
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
  // Show selected photo
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
    
    // Create the data for POST
    createFormData = (photo, body) => {
        const data = new FormData();
    
        data.append("photo", {
        name: photo.fileName,
        type: photo.type,
        uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });
    
        Object.keys(body).forEach(key => {
        data.append(key, body[key]);
        });
    
        return data;
    };
    
    // Upload the photo
    handleUploadPhoto = () => {
        fetch("http://localhost:3000/api/upload", { // Set this to where we want to upload
          method: "POST",
          body: createFormData(this.state.photo, { userId: "123" }) // Change to XLN user IDs
        })
          .then(response => response.json())
          .then(response => {
            console.log("upload succes", response);
            alert("Upload success!");
            this.setState({ photo: null });
          })
          .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
          });
      };
  }
  
/* Some code that shows how this can be implemented in our app usig the funcs
export default class App extends React.Component {
  ...

  render() {
    const { photo } = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <React.Fragment>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
            <Button title="Upload" onPress={this.handleUpload} />
          </React.Fragment>
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    )
  }
}
*/
