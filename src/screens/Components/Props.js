import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const  Props = (props) => {

    return (
      <View>
        <Text style={styles.textStyle}>{props.title}</Text>
         <Image style={styles.imgStyle} source={props.imgsource} />
      </View>
    )
  
}
 const styles=StyleSheet.create({
    imgStyle:{
        height:500,
        width:400,
        margin:20,
    },
    textStyle: {
        marginLeft:20,

    }
 })
export default Props