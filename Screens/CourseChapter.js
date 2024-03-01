import {View,Text,TouchableOpacity}from 'react-native'
import React ,{useEffect,useState} from'react';
import {useRoute} from '@react-navigation/native'



import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-animatable';

export default function CourseChapter(){
    const navigation=  useNavigation();
    
    const param=useRoute().params;
    
    const [chapter,setChapter]=useState([])

    useEffect(()=>{
          console.log("courseContent",param.courseContent.Content)
          setChapter(param.courseContent.Content)
    },[])

    return (
        <View style={{padding:20,paddingTop:30}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>

<Ionicons name="arrow-back-sharp" size ={24} color="black" />

</TouchableOpacity>

  <FlatList
  
    data={chapter}
    renderItem={({item})=>(

        <View> 
             <Text>{item.Content}</Text>
             <Image source={{uri:item?.signLanguageImgUrl}} style={{height:150,marginTop:10,borderRadius:10}}/>


        </View>
    )}
  
  />

        </View>
    )
}