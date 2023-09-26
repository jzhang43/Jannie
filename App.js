import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Component, FlatList } from 'react-native';

import messageLoader from './messageLoader'

// var myVar = "Today's message!";
// const images = {
//   Day_1: require("./images/test.jpeg"),
//   Day_2: require("./images/test2.jpeg"),
//   Day_3: require("./images/test3.jpeg"),
// };



export default function App() {
  return (
    messageLoader()
    
  );
}



const image_style = StyleSheet.create({
  container: {
    // flex: 0.25,
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
