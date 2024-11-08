import { Text, View, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [num,setNum]= useState(0)

    const add = (e) =>{
        setNum(e)
    }
    
    return (
      <View style={styles.container}>
         <Text style={styles.number}>
            {num}
         </Text>
         <View style={styles.div1}>
           <Button title='+10' onPress={()=>{add(num+10)}} />
         </View>
         <View style={styles.div2}>
           <Button title='RESET' onPress={()=>{add(0)}} />
         </View><View style={styles.div3}>
           <Button title='-10' onPress={()=>{ num>0 ? add(num-10) : add(0)}} />
         </View>

      </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

       
    },
    number:{
        fontSize: 30,
        marginTop:20,
        marginLeft:50,
       
    },
    div1:{
        fontSize: 20,
        marginTop:10,
        marginLeft:50,
        height:100,
        width:200,
        fontWeight:10,
        backgroundColor:"black",
        alignItems:"center",


    },
    div2:{
        fontSize: 20,
        marginTop:10,
        marginLeft:50,
        height:100,
        width:200,
        fontWeight:10,
        backgroundColor:"black",
        alignItems:"center",

    }, div3:{
        fontSize: 20,
        marginTop:10,
        marginLeft:50,
        height:100,
        width:200,
        fontWeight:10,
        backgroundColor:"black",
        alignItems:"center",

        
    },

  })


export default Counter