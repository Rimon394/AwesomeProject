import React, { useState,useContext}from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../navigation/AuthProvider';


const SignupSchema = Yup.object().shape({
  
 
  email: Yup.string()
         .email('Invalid email')
         .required('please enter your eamil address'),
  password:Yup.string()
    .min(8)
    .required('Please enter your Password.')
    .matches(   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
       'Must containe minimum * characters ,at least one uppercase letter, one lowercase letter ,One number and one special character '
    
    ),
  });

const LoginScreen =({navigation})=>{


const {login} = useContext(AuthContext);


  const [data, setData]=React.useState({
   email:"",
   password:'',
   check_textInputChange:false,
   secureTextEntry:true,
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
  const updateSecureTextEntry=()=>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
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
      login(values.email, values.password);
    }}
    
     
    
    >
      {({ handleChange, handleSubmit, values, errors, isSubmitting,touched,setFieldTouched})=>(

    
        <View style={styles.container}>
          <StatusBar backgroundColor='#009387'barStyle='light-content'/>
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome</Text>
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

             {data.check_textInputChange ? 
              <Animatable.View 
                 animation='bounceIn'
              
              >


               <Feather 
               name='check-circle'
               color='green'
               size={20}
             
             />
              </Animatable.View>



             :null}



             </View>
             <Text  style={[styles.text_footer,{ marginTop : 35}]}>Password</Text>
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
               value={values.pass}
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

             <View style={styles.button}>
              <TouchableOpacity
                    onPress={handleSubmit}>

              
              <LinearGradient
                colors={['#3D6641','#638467']}
                style={styles.signIn}
               >
                <Text style={[styles.textSign,{color:'#fff'}]}>Sign In</Text>
              </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
              
                onPress={()=>navigation.navigate('Register')}
                style={[styles.signIn,{
                  borderColor:'#009387',
                  borderWidth:1,

                marginTop:15
              
            } ]}
              >
                  <Text
                   style={[styles.textSign,{
                    color:'#009387'
                   }]}
                  
                  >Sign Up</Text>
              </TouchableOpacity>

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
            <TouchableOpacity>
              <MaterialCommunityIcons name="google" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="facebook" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="linkedin" color="black" size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons name="github" color="black" size={35} />
            </TouchableOpacity>
            </Animatable.View>
             </View>
          </Animatable.View>

        </View>
      )}
        </Formik>

  );
};
export default LoginScreen;








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
      fontSize: 18
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
      marginTop: Platform.OS === 'android' ? 0 : -12,
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
  }
});