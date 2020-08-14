import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from "./navigator";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>Sheesh!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

class App extends React.Component {
  render() {
    return(
      <View style={{ flex: 1 }}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0A0A0A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
