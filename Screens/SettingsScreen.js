import React from 'react';

import{View,Text,Button,StyleSheet} from 'react-native';

const SettingsScreen= ({navigation})=>{
    return(
         <View  style={styles.container}>

            <Text>SettingsScreen</Text>
            <Button
              title='CLick Here'
              onPress={() =>alert ('Button Clicked')}
            />
 <Button title="Go Back"  onPress={()=> navigation.goBack()}/>


         </View>


    );
};
export default SettingsScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})