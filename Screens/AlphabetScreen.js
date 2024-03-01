import{View,Text,ScrollView} from 'react-native';
import React,{useContext,} from 'react';

import { AuthContext } from '../navigation/AuthProvider';
import WelcomHeader from '../components/WelcomeHeader';
import { AuthProvider } from '../navigation/AuthProvider';
import Routes from '../navigation/Route';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import VideoCourseList from '../components/VideoCourseList';
import CourseList from '../components/CourseList';


const  AlphabetScreen=({navigation})=>{
  const{user,setUser}=useContext(AuthContext)


  return(

       <ScrollView   style ={{padding:20}}>
        


        <WelcomHeader/>
        <SearchBar/>
       
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'}/>
        <CourseList type={'advance'}/>
       </ScrollView>
  


  )
}
export default  AlphabetScreen;