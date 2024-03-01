import React, { useEffect ,useState} from 'react';
import { View, Text ,Image, TouchableOpacity} from 'react-native';
import GlobalApi from '../styles/GlobalApi';
import { FlatList } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

export default function CourseList({ type }) {
    const [courseList,setCourseList]=useState([])
    const navigation=useNavigation();

    useEffect(() => {
        console.log("Type:", type);
        getCourseList();
    }, [type]);

    const getCourseList = async () => {
        try {
            const resp = (await GlobalApi.getCourseList(type)).data;
            const result = resp.data.map((item) => ({
                id: item.id,
                name: item.attributes.name,
                description: item.attributes.description,
                image: item.attributes.image.data[0].attributes.url,
                Topic: item.attributes.Topic
            }));
            console.log("HK rslt: ", result);
            setCourseList(result);
        } catch (error) {
            console.error('Error fetching course list:', error);
        }
    };

    const onPressCourse=(course)=>{
        console.log("Course",course);
        navigation.navigate('course-detail',{courseData:course})

    }
    
    return (
        <View style={{marginTop:10}}>
          <Text style = {{fontSize:20,fontWeight:'bold',
          textTransform:'capitalize',
          
          marginBottom:3}}>
            {type} Course
          </Text>

           <FlatList
              data={courseList}  
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item})=>(


                <TouchableOpacity style={{backgroundColor:'#C3D7B9',marginRight:10,borderRadius:10 }}
                  
                  onPress={()=>onPressCourse(item)}>

                    {/* <View>{item.image}</View> */}
                
                
                    <Image source={{uri:item.image}} 
                    style={{width:210,height:100,borderRadius:10}}/>
                    <View  style={{padding:10}}>
                    <Text style={{fontweight:'bold',fontSize:15}}>{item.name}</Text>
                    <Text style={{color:'#3D6641',fontWeight:'300'}}>{item.Topic?.length} lessons</Text>
                    </View>

                </TouchableOpacity>
              )} 
           
           />
        </View>
    );
}