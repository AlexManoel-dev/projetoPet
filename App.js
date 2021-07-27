import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes'
import Tabs from './src/pages/Tabs/index'
import Login from './src/pages/Login/index'

export default function App() {
  return (
    <Tabs/>
    // <Login/>
  );
}