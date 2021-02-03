import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}


