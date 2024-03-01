
import {View,Text,StyleSheet,Dimensions}from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';


import { useNavigation } from '@react-navigation/native';


const {width,height}=Dimensions.get('window');

export default function OnboardingScreen(){

const navigation = useNavigation();
const handleDone=()=>{
  navigation.navigate("Welcome");
}

 
  return(
    <View style={styles.container}>

        <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        pages={[

              {
                    backgroundColor:'#C3D7B9',
                    image:(
                      <View  style={styles.lottie }>
                          
                          <LottieView source={require('../assets/animation/animation_ll63dthy.json')} autoPlay loop />
                      </View>
                    ),
                    title:'Hello',
                    subtitle:'Welcome to this app to learn and communicate  '          
              },

              {
                    backgroundColor:'#638467',
                    image:(
                      <View  style={styles.lottie }>                                            
                         <LottieView source={require('../assets/animation/StudyAnimation.json')} autoPlay loop />

                  </View>
                    ),
                    title:'learning ',
                    subtitle:'Master the Sign language '
              },

              {
                    backgroundColor:'#3D6641',
                    image:(
                      <View  style={styles.lottie }>
                        
                        <LottieView source={require('../assets/animation/animation_ll639sd8.json')} autoPlay loop />
                      </View>
                    ),
                    title:'Hand_Talk_app',
                    subtitle:'Hope You Find A Very Better Experience '
              },


          
        ]}
        />

    </View>
  )
 }
const styles=StyleSheet.create({
  container:{
    flex:1,
    
    paddinghorizontal:15,

  },
  lottie:{
    width: width*0.9,
    height:width
  }
})
