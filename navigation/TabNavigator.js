import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import TranslatorScreen from '../Screens/TranslatorScreen';
import AlphabetScreen from '../Screens/AlphabetScreen';
import ScannerScreen from '../Screens/ScannerScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import MyStack from './MyStack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import CourseDetails from '../Screens/CourseDetails';
import CourseChapter from '../Screens/CourseChapter';
import GifChapter from '../Screens/GifChapter';
import GifDetails from '../Screens/GifDetails';
import CameraScreen from '../Screens/CameraScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen name="gif-details" component={GifDetails} />
    </Stack.Navigator>
  );
};

const CourseStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Alphabet2" component={AlphabetScreen} />
      <Stack.Screen name="course-detail" component={CourseDetails} />
      <Stack.Screen name="course-chapter" component={CourseChapter} />
     
    </Stack.Navigator>
  );
};
const CameraStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Scanner2" component={ScannerScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      
     
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#638467F' },
        tabBarInactiveTintColor: '#C3D7B9',
        tabBarActiveTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            backgroundColor: '#3D6641',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Translator"
        component={MyStack}
        options={{
          tabBarBadgeStyle: { backgroundColor: '#C3D7B9' },
          tabBarIcon: ({ color, size }) => (
            <Feather name="mic" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={CameraStack}
        options={{
          tabBarBadgeStyle: { backgroundColor: '#C3D7B9' },
          tabBarIcon: ({ color, size }) => (
            <Feather name="maximize" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Alphabet"
        component={CourseStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
