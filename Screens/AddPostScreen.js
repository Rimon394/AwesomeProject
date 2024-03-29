



import  React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput ,Platform,Alert } from 'react-native';
import storage from '@react-native-firebase/storage';
import{InputWrapper,InputField}from '../styles/AddPost';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {


  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
  A
} from '../styles/AddPost';



const AddPostScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [transferred, setTransferred] = useState(0);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };




  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };


  const submitPost= async()=>{

    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    setUploading(true);

    try{
      await storage().ref(filename).putFile(uploadUri);

      setUploading(false);
      Alert.alert(
         'Image uploaded',
         "Your image has been uploaded to the Firebase Cloud Storage SuccessFully!"

      );

    }catch(e){
      console.log(e);
    }

    setImage(null);
  }
  return (
    <View style={styles.container}>
      
      <InputWrapper>
      {image != null ? <AddImage source ={{uri:image}}/>:null}
      <InputField
      
       
        
         placeholder="What's on your mind?"
         multiline
         numberofLines={4}
        
        />
        <SubmitBtn onPress={()=>{submitPost}}>
          <SubmitBtnText>Post</SubmitBtnText>
        </SubmitBtn>
      
      
      </InputWrapper>

      <ActionButton
  buttonColor="#2e64e5"
  useNativeDriver={true} // or false depending on your animations
>
  <ActionButton.Item
    buttonColor="#9b59b6"
    title="Take Photo"
    onPress={takePhotoFromCamera}
  >
    <Icon name="camera-outline" style={styles.actionButtonIcon} />
  </ActionButton.Item>
  <ActionButton.Item
    buttonColor="#3498db"
    title="Choose Photo"
    onPress={choosePhotoFromLibrary}
  >
    <Icon name="camera-outline" style={styles.actionButtonIcon} />
  </ActionButton.Item>
</ActionButton>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default AddPostScreen;
