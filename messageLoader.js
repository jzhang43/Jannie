import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { AppState, SafeAreaView, StyleSheet, Text, View, Image, Component, FlatList } from "react-native";

import slides from './slides';
import ScreenItem from './ScreenItem';

// const dateCompare = (d1) => {
//     const date1 = new Date({d1});
//     const date2 = new Date();
  
//     console.log({date1})
//     console.log({date2})
  
//     const ms1 = date1.getTime();
//     const ms2 = date2.getTime();
  
//     console.log({ms1})
//     console.log({ms2})
  
//     if(date2 >= date1) {
//         console.log("true")
//     }
// };

/* Each time the app is loaded, checks each date in the message array and
and filters the appropriate ones to display */
export default messageLoader = () => {
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
        const constructMessages = () => {
            setMessages(
                slides.filter((messages) => 
                new Date(messages.datecompare) <= new Date()
                // dateCompare(messages.date)
            ));
        }
    

    constructMessages();

    /* Checks for message updates when app is pushed to background / foreground */
    const listener = AppState.addEventListener("change", constructMessages);

    return () => {
        listener.remove();
    };
      
},[]);

    return (
        <SafeAreaView style={styles.container}>

        <FlatList 
        data={messages} 
        renderItem={({ item }) => <ScreenItem item={item} />} 
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        
        />


      {/* <Image style={image_style.container}
        source={images.Day_2}

        /> */}
      
      <StatusBar style="auto" />
     </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
  });