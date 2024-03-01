import {View,Text, TurboModuleRegistry}from 'react-native';
import React, { useState ,useEffect } from 'react'
import GlobalApi from '../styles/GlobalApi';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-animatable';

export default function VideoCourseList(){

    const [videoList,setVideoList]=useState([]);
    useEffect(()=>{
        getVideoCourse(); 
    },[])



    const getVideoCourse = async () => {
    
          const resp = (await GlobalApi.getVideoCourse()).data;
          const result = resp.data.map((item) => ({
            id: item.id,
            title: item.attributes.title,
            desc: item.attributes.description, 
            hk: "HK", 
            image: item.attributes.image.data[0].attributes.url,
            videoTopic: item.attributes.VideoTopic,
          }));
          setVideoList(result);
       
        }
    
      
    return(
        <View style={{marginTop:15}}>
          <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>VideoCourseList</Text>
          <FlatList
           data={videoList}
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           renderItem={({item})=>(

            <View>
              <Image source = {{uri:item.image}}
              style={{width:180,height:100,marginRight:10,borderRadius:10}}/>
              </View>
           )}
           keyExtractor={(item) => item.id.toString()}
            
          
          />
        </View>
    )
           }