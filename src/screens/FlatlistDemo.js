import React from 'react'

import { FlatList , Text, StyleSheet, View, Image, Button, Alert, Pressable} from 'react-native'

const FlatlistDemo = () => {
    const names = [
        {
            index: "1",
            name: "pritam",
        },
        {
            index: "2",
            name: "kumar"
        },
        {
            index: "3",
            name:"sarangi"
        },
        {
            index: "4",
            name:"Subham"
        },
        {
            index: "5",
            name:"sarangi"
        },
        {
            index: "6",
            name:"Sweta"
        },
        {
            index: "7",
            name:"Kumari"
        },
        {
            index: "9",
            name:"Cousins"
        }
]
 
    return (
    <View>
      <FlatList
      style={styles.listStyle} 
      keyExtractor={(key)=> {
        return key.index
      }
      }
      numColumns={3}

    //   horizontal
    //   inverted
    //   showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={(elements)=>{
        return<Text style={styles.textStyle}>{ elements.item.name} </Text>
      }}
       />

       {/* <Button  title='Join Now' onPress={()=>{
        Alert.alert("Button clicked")
       }}/> */}

       <Pressable
       onPress={()=>{
        console.log("Clicked")
       }}
       >
        <Text>Click here to Join Now</Text>
       </Pressable>

       </View>
    )
  }

  const styles=StyleSheet.create({
    textStyle:{
      fontSize:25,
      width:100,
      height:50,
      backgroundColor:"blue",
      margin:5,
      textAlign:"center"
    },
    listStyle:{
       marginTop:10,
      
    },
    imageStyle:{
        margin:10,
        marginLeft:20,
        width:300,
        height:400,
    }
  })

export default FlatlistDemo