import React from "react";
import { View, Text ,StyleSheet } from "react-native";

const Challenge1=()=>{
const name = "Pritam Kumar sarangi"
    return(
        <View>
            <Text style={styles.textstyle1}>Hello, Welcome to Thapa Technical Youtube Channel</Text>
            <Text style={styles.tetxtstyle2}>We Love React Native and I am a subscriber of Thapa Technical !!</Text>
            <Text style={styles.tetxtstyle2}>Hello all , My name is {name}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    textstyle1:{
        color: "blue",
        fontWeight:"bold",
        margin:20
    },
    tetxtstyle2:{
       color:"green",
       margin: 20 
    }
})

export default Challenge1