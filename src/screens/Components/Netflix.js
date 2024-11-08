import React from 'react'
import { Text, View, StyleSheet, Image, Button, Linking} from 'react-native'




const Netflix =({url, title, description}) =>  {
 
    return (
    <View style={styles.container}>

        <View style={styles.poster}>
            <Image style={styles.imgStyle} source={{uri : url }} />
        
        <View style={styles.poster_info} >
             <Text style={styles.poster_title}> {title} </Text>
             <Text style={styles.poster_text}> {description} </Text>

        </View>
        <Button title='Watch Now' onPress={()=>{
            Linking.openURL("https://www.netflix.com/in/")
        }} />
        </View>
    </View>
    )
  
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        margin: 60

    },
    poster : {
        marginTop:20,
        borderWidth:1,
        width:250,
        alignItems:"center",        

    },
    imgStyle : {
        width: "100%",
        height: undefined,
        aspectRatio:1,

    },
    poster_info:{
        marginHorizontal:10,
        alignItems:"center"
    },
    poster_title:{
        fontSize: 20,
        marginBottom:10,   
    // text-shadow: -1px 1px 10px rgba(0,0,0,0.75)
       textShadowOffset: { width: 1, height: -1},
       textShadowRadius: 10 ,
       textShadowColor: "rgba(0,0,0,0.75)"

    },
    poster_text : {
        color:"#000",
        paddingHorizontal:"10",
        marginBottom:20,
    }


})

export default Netflix