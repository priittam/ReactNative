import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textstyle : {
    color: "blue",
    fontSize: 15,
    marginTop: 25,
    marginLeft: 20,
  },
  
})
const Custom =() =>{
  return (
    <View>
    <Text style={styles.textstyle}> Hello Viewer This Text is through custom components</Text>
    </View>
  )
};

export default Custom;