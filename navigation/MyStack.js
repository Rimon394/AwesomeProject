



import * as React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPostScreen from '../Screens/AddPostScreen';
import TranslatorScreen from '../Screens/TranslatorScreen';
import CourseDetails from '../Screens/CourseDetails';
import AlphabetScreen from '../Screens/AlphabetScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Stack = createNativeStackNavigator();

const MyStack = ({navigation}) => {
  return (
  
      <Stack.Navigator   >
        
         
          <Stack.Screen name="Translator2" component={TranslatorScreen}
         options={{
          headerTitleAlign:"center",
          headerTitleStyle:{
            color:"#2e64e5",
            fontFamily:"Kufam-SemiBoldItalic",
            fontSize:18
          },
          headerStyle:{
            shadowColor:"#fff",
            elevation:0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('AddPost')}
              />

            </View>
          ),
          
         }}
        
        
        
        
        /> 

<Stack.Screen name="AddPost" component={AddPostScreen}  options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{marginLeft: 15}}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
     

      </Stack.Navigator>

  );
};
export default MyStack;