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
      flex: 1,
      textAlign: "center",
      fontSize: 20,
      color: "#3e3d40"
    },
    header: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: 'bold',
      color: "#3e3d40"
    },
    logo: {
      position: 'absolute',
      top: 100
    },
    row: {
      padding: 4,
      borderBottomColor: "#ffffff",
      borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export default StyleSheet;

