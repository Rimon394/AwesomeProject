import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../Screens/ProfileScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import MyStack from './MyStack';

import TabNavigator from './TabNavigator';
import PracticeScreen from '../Screens/PracticeScreen';
import WorkoutScreen from '../Screens/WorkoutScreen';
import FitScreen from '../Screens/FitScreen';
import RestScreen from '../Screens/RestScreen';
import ChatScreen from '../Screens/ChatScreen';
import ChatBubble from '../Screens/ChatBubbleScreen';

import { FitnessContextProvider } from '../utils/Context'; // Import the FitnessContextProvider

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const PracticeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="practice" component={PracticeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Workout" component={WorkoutScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Fit" component={FitScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Rest" component={RestScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};
const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Setting2" component={SettingsScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:false}}/>
        
    </Stack.Navigator>
  );
};


const AppStack = () => {
  return (

      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#638467',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={ChatStack }
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Practice"
          component={PracticeStack}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>

  );
};

export default AppStack;
