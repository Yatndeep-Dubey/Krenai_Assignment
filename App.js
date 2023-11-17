import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import ProudctScreen from './src/screens/ProudctScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ProudctScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
  },
});
