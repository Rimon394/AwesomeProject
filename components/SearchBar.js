import{View,Text,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Color from '../styles/Color';

export default function SearchBar(){
    return(
        <View style={styles.container}>
           <Feather name="search" size={24} color={Color.gray} style={{marginRight:10}}/>
           <TextInput placeholder='search'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        borderRadius:10,
        elevation:2,
        marginTop:10,
        alignItems:'center'

    }
})