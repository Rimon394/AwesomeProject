
import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

export default function GifDetails() {
    const param = useRoute().params;
    const [gifs, setGifs] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        console.log("HK data is: ", param.gifData);
        if (param.gifData) {
            setGifs([param.gifData]); // Wrap param.gifData in an array
        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={gifs}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View>
                    <View style={styles.gifContainer}>
                        {item.gifLink && <Image source={{ uri: item.gifLink }} style={styles.gifImage} />}
                        
                 
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    </View>
                    <View style={styles.gifContainer}>
                    {item.gifLink && <Image source={{ uri: item.gifLink }} style={styles.gifImage} />}
                    
             
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                </View>
                </View>
                )}
                
                
                
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    gifContainer: {
        marginBottom: 5,
        alignItems: 'center',
    },
    gifImage: {
        width: Dimensions.get('screen').width * 0.9,
        height: 200,
        borderRadius: 10,
    },
});






/*import {View,Text,Image}from 'react-native'
import React ,{useEffect, useState} from'react';
import { useNavigation } from '@react-navigation/native';
import {useRoute} from '@react-navigation/native'


export default function GifDetails(){

    const param=useRoute().params;
    const [gifs, setGifs] = useState([]);
    const navigation=useNavigation();
  
    useEffect(()=>{
        console.log("HK data is: ",param.gifData.gifLink)
        setGifs(param.gifData)
     },[])

    return(   
        <View style={styles.container}>
        <FlatList
          data={gifs}
          showsVerticalScrollIndicator={false}
          renderItem={({ gifs}) => (
            <View>
                
   
            {gifs.gifLink && <Image source={{uri:gifs.gifLink}} style={{height:150,marginTop:10,borderRadius:10}}/>}
                     <Text style={{fontSize:20,fontWeight:'bold'}}>{gifs.name}</Text>
                 </View>
           
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    gifContainer: {
      marginBottom: 5,
      alignItems: 'center',
    },
    gifImage: {
      width: Dimensions.get('screen').width * 0.9,
      height: 200,
      borderRadius: 10,
    },
  });
  /*
  
  
/*<View>
                
   
{gifs.gifLink && <Image source={{uri:gifs.gifLink}} style={{height:150,marginTop:10,borderRadius:10}}/>}
         <Text style={{fontSize:20,fontWeight:'bold'}}>{gifs.name}</Text>
     </View>*/