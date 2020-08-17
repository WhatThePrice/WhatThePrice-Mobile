// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

import configureStore from "./store/configureStore" // For React Native
const {store, persistor} = configureStore();

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{ flex: 1 }}>
            <Navigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#A0A0A0A0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
