import {View,Text,TouchableOpacity}from 'react-native'
import React ,{useEffect,useState} from'react';
import {useRoute} from '@react-navigation/native'



import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

export default function GifChapter(){
    const navigation=  useNavigation();
    

    return (
        <View style={{padding:20,paddingTop:30}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>

<Ionicons name="arrow-back-sharp" size ={24} color="black" />

</TouchableOpacity>


        </View>
    )
}