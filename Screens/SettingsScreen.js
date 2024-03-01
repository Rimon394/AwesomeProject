import { View, Text, Image, FlatList, TouchableOpacity, Dimensions,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatboatScreen from './ChatboatScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen= ({navigation})=>{
    return(
        <View style={{ padding: 10, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        < ChatboatScreen/>
        
      </View>


    );
};
export default SettingsScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C3D7B9'
    }
})