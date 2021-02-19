import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#ffffff',
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
      margin: 10,
      textAlign: "center",
      fontSize: 20,
      color: "#3e3d40"
    },
    header: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: 'bold',
      margin:20,
      color: "#3e3d40"
    },
    logo: {
      maxHeight:159,
      maxWidth:400,
      position: 'absolute',
      top: 100
    },
    row: {
      padding: 4,
      borderBottomColor: '#3e3d40',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      backgroundColor: '#00a3c4'
    },
    selectionButton: {
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 25,
      margin: 10,
      backgroundColor: '#00a3c4'
    },
    buttonText:{
      fontSize: 20, 
      color: '#ffffff',
      textAlign:"center"
    },
    space: {
      width: 20,
      height: 20
    }
});

export default StyleSheet;

