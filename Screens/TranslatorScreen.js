


import React from 'react';
import{Container } from '../styles/FeedStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AddPostScreen from './AddPostScreen';

import PostCard from '../components/PostCard';
import{View,Text,Button,StyleSheet,FlatList,TouchableOpacity} from 'react-native';


const Post = [


    {
        id:'1',
        userName:'Rimon Biswas',
        userImg:require('../assets/images/user-profile.jpg'),
        postTime:'4 mins ago',
        post:'Hey there im using Scocial media hfjdhgvdgvjvkdjvdkvdkdjfgndhghkdjgkdjgkjedgjedgjjjgdjgglvpdpvdpgvkpdkvpkdpvkdpvp',
        postImg:require('../assets/images/genshin-impact.jpeg'),
        liked:true,
        likes:'14',
        comments:'5',

    },
    {
        id:'2',
        userName:'Rimon Biswas',
        userImg:require('../assets/images/user-profile.jpg'),
        postTime:'4 mins ago',
        post:'Hey there im using Scocial media ',
        postImg:'none',
        liked:false,
        likes:'14',
        comments:'5',

    },
    {
        id:'3',
        userName:'Rimon Biswas',
        userImg:require('../assets/images/user-profile.jpg'),
        postTime:'4 mins ago',
        post:'Hey there im using Scocial media ',
        postImg:require('../assets/images/spiderman.webp'),
        liked:true,
        likes:'14',
        comments:'5',

    },
    {
        id:'4',
        userName:'Rimon Biswas',
        userImg:require('../assets/images/user-profile.jpg'),
        postTime:'4 mins ago',
        post:'Hey there im using Scocial media ',
        postImg:require('../assets/images/miles-morales.webp'),
        liked:false,
        likes:'14',
        comments:'5',

    },
    {
        id:'5',
        userName:'Rimon Biswas',
        userImg:require('../assets/images/user-profile.jpg'),
        postTime:'4 mins ago',
        post:'Hey there im using Scocial media ',
        postImg:require('../assets/images/miles-morales.webp'),
        liked:false,
        likes:'14',
        comments:'5',

    },
]



const TranslatorScreen = ({navigation})=>{
    return(
        <Container>
        <FlatList
          data={Post}
          renderItem={({ item }) => <PostCard item={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          
        />
         
      </Container>
       
       
      
    );
  };
  export default TranslatorScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // Your existing styles
    },
    addButton: {
      backgroundColor: '#638467',
      padding: 10,
      borderRadius: 5,
      alignSelf: 'flex-end', // Adjust the alignment as needed
      margin: 16,
    },
    buttonText: {
      color: 'white',
      fontFamily: 'Roboto-Bold',
      textAlign: 'center',
    },
  });
  












































/*
import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

const TranslatorScreen=({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Translator Screen</Text>
        <Button title="Go Back"  onPress={()=> navigation.goBack()}/>
  
        
      </View>
    );
  }
  export default TranslatorScreen;
  const styles=StyleSheet.create({
      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C3D7B9'
      },


  });
  */