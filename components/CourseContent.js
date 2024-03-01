import {View,Text,FlatList}from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
export default function CourseContent({course}){

    const navigation=  useNavigation();

    return(
        <View style={{marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Course Content</Text>
            <FlatList
            style={{marginTop:10}}
            
            data={course?.Topic}
            renderItem={({item,index})=>(
                <TouchableOpacity  onPress={()=>navigation.navigate('course-chapter',{courseContent:item})}  style={{display:'flex',
                
                flexDirection:'row',backgroundColor:'#3D6641',marginBottom:10,padding:10,alignItems:'center',borderRadius:5}} >
                    <Text style={{fontWeight:'bold',fontSizez:20,color:'#C3D7B9',marginRight:15}}>{index+1}</Text>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>{item.Topic}</Text>
                    <Ionicons name="play-circle"size={24}
                      style={{position:'absolute',right:10}}
                    color='white'/>

                </TouchableOpacity>
            )}
            
            
            />
        </View>
    )
}