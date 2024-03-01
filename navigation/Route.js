import React, {useContext,useState,useEffect} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import{NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


import {AuthContext} from './AuthProvider'

import AuthStack from './AuthStack';
import AppStack from "./AppStack";
import { AuthProvider } from './AuthProvider';


const Routes = () =>{

  const {user,setUser}=useContext(AuthContext);
  const[initializing,setInitializing]=useState(true);




    const onAuthStateChanged=(user)=>{
        setUser(user);
        if(initializing) setInitializing(false);

    }
    useEffect(() => {
      const configureGoogleSignIn = async () => {
        try {
          await GoogleSignin.configure({
            webClientId: '797711938083-11mkoas7rocuc3692lk6u2tuclkenu2i.apps.googleusercontent.com',
          });
        } catch (error) {
          console.error('Google Sign-In configuration error:', error);
        }
      };
    
      configureGoogleSignIn();
    
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return () => subscriber(); // unsubscribe on unmount
    }, []);
    

        








      if (initializing)return null;

    return (

         <NavigationContainer>

            { user ?<AppStack /> :<AuthStack/>}

            
         </NavigationContainer>


    );
};


export default Routes;