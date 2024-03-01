
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const GameDetailsScreen =({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Video Screen</Text>
        <Button title="Go Back"  onPress={()=> navigation.goBack()}/>
        
      </View>
    );
  }
  export default GameDetailsScreen;
  const styles=StyleSheet.create({
      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C3D7B9'
      },


  });
  