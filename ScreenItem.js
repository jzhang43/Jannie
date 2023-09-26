import { useState, useEffect, React } from "react";
import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableHighlight} from 'react-native';

export default ScreenItem = ({item}) => {
    const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
        <View style={{flex: 0.75}}>
            <Text style={styles.title}>{item.datedisplay}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>

      <TouchableHighlight onPress={console.log("Pressed")}>
        <Image source={item.image} style={styles.image}/>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
},

text: {
    fontWeight: '300',
    fontSize: 14,
}


});


