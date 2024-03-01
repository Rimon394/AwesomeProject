import React, { useState,useContext,createContext}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    ScrollView,
    
  
    
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../navigation/AuthProvider';
import SocialButton from '../components/ScocialButton';

 
const SignupSchema = Yup.object().shape({
  
 
email: Yup.string()
       .email('Invalid email')
       .required('please enter your email address'),
password:Yup.string()
  .min(8)
  .required('Please enter your Password.')
  .matches(   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
     'use Strong Password '
  
  ),
});

const RegisterScreen =({navigation})=>{
  

  const {register,  googleLogin} = useContext(AuthContext);
  


  const [data, setData]=React.useState({
   email:"",
   password:'',
   confirm_password:'',
   check_textInputChange:false,
   secureTextEntry:true,
   confirm_secureTextEntry:true,
   
  });
// giving an condition for the eye close icon
  const textInputChange=(val)=>{
    if(val.length != 0){
      setData({
        ...data,
        email:val,
        check_textInputChange:true
      });
    }else{
      setData({
        ...data,
        email:val,
        check_textInputChange:false
      });
    }

  }


  const handlePasswordChange =(val)=>{
    setData({
        ...data,
        password:val
    });
  }

  const handleConfirmPasswordChange =(val)=>{
    setData({
        ...data,
        confirm_password:val
    });
  }
  const updateSecureTextEntry=()=>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
  });
    
  }
  const updateConfirmSecureTextEntry=()=>{
    setData({
      ...data,
      confirm_secureTextEntry:!data.confirm_secureTextEntry
  });
    
  }
  
  
  return(
    <Formik initialValues={{
       
      email:'',
      password:'',
      confirmPassword:'',
           

    }}
      
    validationSchema={SignupSchema}
    onSubmit={values => {
      // Call the register function with email and password
      register(values.email, values.password);
    }}
    
     
    
    >
      {({ handleChange, handleSubmit, values, errors, isSubmitting,touched,setFieldTouched})=>(




    
    <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor='#638467'barStyle='light-content'/>
          <View style={styles.header}>
            <Text style={styles.text_header}>Register Now !</Text>
          </View>
          <Animatable.View
            animation='fadeInUpBig'
          
          style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
            
             <FontAwesome 
              name='user-o'
              color="#05375a"
              size={20}
             
             />
             <TextInput
               placeholder='Your Email'
               style={styles.textInput}
               autoCapitalize='none'
               value={values.email}
        
               onChangeText={handleChange('email')}
               onBlur={()=>setFieldTouched('email')}
              
             
             />
              {touched.email && errors.email &&
                 (
                  <Text style={styles.errorTxt}>{errors.email}</Text>
                )}





             </View>
             <Text  style={[styles.text_footer,{ marginTop : 50}]}>Password</Text>
            <View style={styles.action}>
            
             <Feather
              name='lock'
              color="#05375a"
              size={20}
             
             />
             <TextInput
               placeholder='Your Password'
               secureTextEntry={data.secureTextEntry ? true:false}
               style={styles.textInput}
               autoCapitalize='none'
               value={values.password}
               onChangeText={handleChange('password')}
               onBlur={()=>setFieldTouched('password')}
             
             />
              {touched.password && errors.password &&
                 (
                  <Text style={styles.errorTxt}>{errors.password}</Text>
                )}

             <TouchableOpacity
             onPress={ updateSecureTextEntry}
             >
              {data.secureTextEntry ?
             <Feather 
               name='eye-off'
               color='grey'
               size={20}
             
             />
             :
             <Feather 
               name='eye'
               color='grey'
               size={20}
             
             />
              }




              
             </TouchableOpacity>
             
               </View>
             <Text  style={[styles.text_footer,{ marginTop : 50}]}>Confirm Password</Text>
            <View style={styles.action}>
            
             <Feather
              name='lock'
              color="#05375a"
              size={20}
             
             />
             <TextInput
               placeholder=' Confirm Your Password'
               secureTextEntry={data.secureTextEntry ? true:false}
               style={styles.textInput}
               autoCapitalize='none'
               value={values.password}
               onChangeText={handleChange('confirmPassword')}
               onBlur={()=>setFieldTouched('confirmPassword')}
             
             />
              {touched.confirmPassword && errors.confirmPassword &&
                 (
                  <Text style={styles.errorTxt}>{errors.confirmPassword}</Text>
                )}
             <TouchableOpacity
             onPress={ updateSecureTextEntry}
             >
              {data.secureTextEntry ?
             <Feather 
               name='eye-off'
               color='grey'
               size={20}
             
             />
             :
             <Feather 
               name='eye'
               color='grey'
               size={20}
             
             />
              }
              
             </TouchableOpacity>
             </View>
             
              

             <View style={styles.button}>
             <TouchableOpacity  
                      style={styles.signIn}
           
              onPress={handleSubmit }
              disabled={isSubmitting}
              

              
              >
                
              <LinearGradient
                colors={['#3D6641','#638467']}
       
               
               >
                <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>
                
              </LinearGradient>
              </TouchableOpacity>
             
              <View style={{flexDirection: 'row', marginTop: 10, gap: 5}}>
            <Text style={{fontSize: 15}}>Already Have an Account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}>
              <Text style={{color: 'green', fontSize: 15}}>
                Please Login!
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
              <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          </View>

          <Animatable.View animation="lightSpeedIn" style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'space-around',
              marginTop: 10,
            }}>



           {Platform.OS =='android' ?(
             <View>
             <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={()=>googleLogin()}
  
              />
             </View>
           ): null}

          
           
            </Animatable.View>
             </View>
          </Animatable.View>

        </View>
        </ScrollView>
      )}
        </Formik>
        


  );
};
export default RegisterScreen;








const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#638467'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#C3D7B9',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 15

  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'android ' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  errorTxt:{
    fontSize:12,
    color:'#FF0D10',
  },
  inputWrapper:{
    marginBottom:15,
  }
});