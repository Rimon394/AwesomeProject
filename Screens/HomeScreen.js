
import React from 'react';
import {View,Text,Button,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen =({navigation})=>{
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hand Talk App
          </Text>
          
          <Icon.Button
             style={{width: 35, height: 35}}
              name='menu'
              size={25}
              
              onPress={() => { navigation.openDrawer(); }}
            >

            </Icon.Button>
        
          
          </View>
        </View>
      

        <TouchableOpacity
        onPress={() => navigation.navigate()}
        style={styles.button}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Food</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate()}
        style={styles.button}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate()}
        style={styles.button}
        activeOpacity={0.8}>
        <Text style={styles.buttonText}>Daily Activities</Text>
      </TouchableOpacity>
    </SafeAreaView>

    
    );
  }
  export default HomeScreen;
  const styles=StyleSheet.create({
      container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      button: {
        backgroundColor:'#638467',
        padding: 17,
        margin: 10,
        borderRadius: 5,
        fontSize: 18,
        width: 180,
        
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems:'center'
        
        
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },



  });
  