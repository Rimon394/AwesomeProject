
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const CartScreen=({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go Back"  onPress={()=> navigation.goBack()}/>
  
        
      </View>
    );
  }
  export default CartScreen;
  const styles=StyleSheet.create({
      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },


  });
  