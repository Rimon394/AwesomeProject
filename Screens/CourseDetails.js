import{View,Text,Image,TouchableOpacity}from 'react-native';
import React ,{useEffect, useState} from'react';
import {useRoute} from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CourseContent from '../components/CourseContent';
import { useNavigation } from '@react-navigation/native';

export default function CourseDetail(){


    const param=useRoute().params;

    const [course,setCourse]=useState([])

    const navigation=  useNavigation();

    useEffect(()=>{
      // console.log("HK course data: ", param.courseData)
       setCourse(param.courseData)
    },[])
    return (
        <View style={{padding:20,paddingTop:30}}>
          
          <TouchableOpacity onPress={()=>navigation.goBack()}>

          <Ionicons name="arrow-back-sharp" size ={24} color="black" />

          </TouchableOpacity>

         


          <View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{course.name}</Text>
            <Text style={{color:'#3D6641'}} >By Rimon Biswas</Text>
            {course.image && <Image source={{uri:course.image}} style={{height:150,marginTop:10,borderRadius:10}}></Image>}
            {/* <Image source={{uri:course?.image}} style={{height:150,marginTop:10,borderRadius:10}}/> */}
            <Text style={{marginTop:10,fontSize:16,fontWeight:'bold'}}>About Course</Text>

            <Text numberOfLines={3}
            style={{color:'#3D6641'}}>{course.description}</Text>
          </View>

          <CourseContent course={course}/>
        </View>
    )
}