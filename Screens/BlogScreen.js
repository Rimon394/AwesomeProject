
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const BlogScreen=({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Social Meedia Screen</Text>
        <Button title="Go Back"  onPress={()=> navigation.goBack()}/>
        
      </View>
    );
  }
  export default BlogScreen;
  const styles=StyleSheet.create({
      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C3D7B9'
      },


  });
  