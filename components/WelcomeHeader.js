import React,{useContext} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { AuthProvider } from '../navigation/AuthProvider';
import Routes from '../navigation/Route';


export default function WelcomHeader(){


    const{user,setUser}=useContext(AuthContext)
    return(
        <View  style={styles.container}>
            <View>
            <Text>Hello,</Text>
             <Text style={{fontSize:20,fontWeight:'bold'}}>{user?.name}</Text>
            </View>

            {/* profile picture. kept it for future update. */}
            {/* <Image source={{uri:user?.picture}}
             style={{width:40,height:40,borderRadius:100}}
            /> */}

            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})


