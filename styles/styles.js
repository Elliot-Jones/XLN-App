import {StyleSheet} from 'react-native'

const App = () => (
  <View style={styles.container}>
    <Text style={styles.row}>React</Text>
    <Text style={styles.row}>Native</Text>
  </View>
)
export const styles = StyleSheet.create({
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
    row: {
      padding: 4,
      borderBottomColor: "#fff",
      borderBottomWidth: StyleSheet.hairlineWidth
    }
});

export default App;

