import React, { useState, useEffect } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Voice from '@react-native-community/voice';

import Features from '../components/Features';
import { dummyMessages } from '../utils/index';

const ProfileScreen = ({ navigation }) => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const[result,setResult]=useState('');


  const speechStartHandler = e => {
    console.log("speech start handler ");
  };

  const speechEndHandler = e => {
    setRecording(false);
    console.log("speech end handler ");
  };

  const speechResultsHandler = e => {
    console.log("Voice event:", e);
    const text = e.value[0];
    setResult(text);
  };

  const speechErrorHandler = e => {
    console.log("speech error handler :", e);
  };

  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log('error:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setRecording(false);
      //fetch the response
    } catch (error) {
      console.log('error:', error);
    }
  };

  const clear = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  useEffect(() => {
    //voice handler events 
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // setting the result 
  //console.log('result',result);

  return (
    <View className='flex-1 bg-white'>
      <View style={{ padding: 10, paddingTop: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <SafeAreaView className="flex-1 flex mx-5">
        <View className='flex-row justify-center'>
          <Image source={require('../assets/images/chatboat.png')} style={{ height: hp(15), width: hp(15) }} />
        </View>

        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text style={{ fontSize: wp(5) }} className="text-gray-700 font-semibold ml-1">
              Assistant
            </Text>
            <View style={{ height: hp(58) }} className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView bounce={false} className="space-y-4" showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role == 'assistant') {
                    if (message.content.includes('https')) {
                      // it's an AI image
                      return(

                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image source={{uri:message.content}}
                                  className="rounded-2xl"
                                  resizeMode="contain"
                                  style={{height:wp(60),width:wp(60)}}
                            />
                          </View>
                        </View>
                      )
                     
                    } else {
                      // text response
                      return (
                        <View key={index} style={{ width: wp(70) }} className="bg-emerald-100 rounded-xl p-2 rounded-tr-none">
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    // user input
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View style={{ width: wp(70) }} className="bg-white rounded-xl p-2 rounded-tl-none">
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    )
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        <View  className="flex justify-center items-center">
          {
            recording?(
              <TouchableOpacity onPress={stopRecording}>
                <Image 
                  className="rounded-full"
                  source={require('../assets/images/recording.gif')}
                  style={{width:hp(8),height:hp(8)}}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={startRecording} >
                <Image 
                  className="rounded-full "
                  source={require('../assets/images/Mic.png')}
                  style={{width:hp(10),height:hp(10)}}
                />
              </TouchableOpacity>
            )
          }

          {messages.length>0 && (
            <Button 
              onPress={clear}
              className="bg-slate-800  rounded-3xal p-2 absolute right-10"
            >
              <Text className="text-white font-semibold">Clear</Text>
            </Button>
          )}
          {speaking && (
            <Button 
              onPress={stopSpeaking}
              className="bg-red-400  rounded-3xal p-2 absolute left-2"
            >
              <Text className="text-black font-semibold">Stop</Text>
            </Button>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileScreen;
