import {View,Text,FlatList}from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
export default function GifContent(){

    const navigation=  useNavigation();

    return(
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>gif  Content</Text>
           
        </View>
    )
}