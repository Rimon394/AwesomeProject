import { View, Text, Image,StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { useState } from 'react'
import { useEffect } from 'react';
import ChatFaceData from '../Services.js/ChatFaceData';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ChatScreen from './ChatScreen';


export default function ChatboatScreen(){
  const navigation = useNavigation(); 
    const [chatFaceData,setChatFaceData]=useState([]);
    const [selectedChatFaceData,setSelectedChatFaceData]=useState([]);
    useEffect(() => {
       
        setChatFaceData(ChatFaceData);
        setSelectedChatFaceData(ChatFaceData[0]);
      }, []);


      // chats methods 
      const onChatFacePress=(id)=>{
        setSelectedChatFaceData(ChatFaceData[id-1])

      }

    return(
        <View style={{alignItems:'center',paddingTop:50}}>
            <Text style={[{color:selectedChatFaceData.primary},{fontSize:30}]}>Hello</Text>
            <Text style={[{color:selectedChatFaceData.primary},{fontSize:30,fontWeight:"bold"}]}>I am {selectedChatFaceData.name}</Text>

            <Image source={{uri:selectedChatFaceData.image}} style={{width:150,height:150,marginTop:20}} />
            <Text style={{marginTop:30,fontSize:25}}>How Can I Help You?</Text>
            <View style={{marginTop:20,backgroundColor:'#F5F5F5',alignItems:'center',height:110,padding:10,borderRadius:10}}>
                  <FlatList
                    data={ChatFaceData}
                    horizontal={true}
                    renderItem={({item})=>selectedChatFaceData.id!=item.id&&(
                        <TouchableOpacity style={{margin:15}} onPress={()=>onChatFacePress(item.id)}>
                            <Image source={{uri:item.image}} style={{width:40,height:40}}/>

                            
                            </TouchableOpacity>
                    )}

                  
                  />
                   <Text style={{marginTop:5,fontSize:17,color:'#B0B0B0'}}>Choose Your Fav ChatBuddy</Text>

            </View>

<TouchableOpacity style={[{backgroundColor:selectedChatFaceData.primary},{padding:17,width:Dimensions.get('screen').width*0.6,borderRadius:100,alignItems:'center',marginTop:20}]} onPress={() => navigation.navigate('Chat')}   >
    <Text style={{fontSize:16,color:'#fff'}}>Let's Chat</Text>
</TouchableOpacity>

        </View>
    )
}