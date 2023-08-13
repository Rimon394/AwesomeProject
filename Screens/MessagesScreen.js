
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const MessagesScreen=({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go Back"  onPress={()=> navigation.goBack()}/>
        
      </View>
    );
  }
  export default MessagesScreen;
  const styles=StyleSheet.create({
      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },


  });
  