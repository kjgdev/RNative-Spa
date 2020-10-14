import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native'
import backgroundImage from '../../assets/images/backgroundSignIn.png'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SignInContent= ({ navigation })=>{
    const [showPass,setShowPass]= useState(true);
    const [press,setPress]= useState(false);
    const functionShowPass=()=>{
        if(press==false){
            setShowPass(false),
            setPress(true)
            
        }
        else {
            setShowPass(true),
            setPress(false)
        }
    }
    return (
        <>         
            <ImageBackground source={backgroundImage} style={styles.backgroundContainer}>
                <View >
                    <Text style={styles.logoText}>Welcome Back</Text>
                </View>
                
            </ImageBackground>
            <View style={styles.signInContainer}>     
                <TouchableOpacity style={styles.signInButton}>
                    <Icon name='arrow-right-alt' color='white' styles={styles.buttonArrowStyle} size={50} ></Icon>
                </TouchableOpacity>    
                 <Text style={styles.signInText}>Sign in</Text> 
                 <View style={styles.inputContainer}>
                    <View style={styles.input} >
                        <TextInput placeholder='Phone Number'  >
                        </TextInput> 
                        
                    </View>              
                    <View style={styles.input}   >
                        <TextInput underlineColorAndroid='transparent' placeholder='Password' fontFamily='Lato' secureTextEntry={showPass}>
                        </TextInput> 
                        <TouchableOpacity style={styles.btnEye} onPress={functionShowPass}>
                            <IconEye name={press== false ? 'eye':'eye-off'} color='gray' size={26}/>                            
                        </TouchableOpacity>
                    </View>
                </View>   
                 <View style={styles.forgotPassContainer}>
                     <Text style={styles.forgotPassStyle}>Forgot Password?</Text>
                     <TouchableOpacity onPress={()=> {
                         navigation.navigate('SignUp')
                     }}>
                         <Text>Sign up</Text>                               
                    </TouchableOpacity>
                 </View>
            </View>           
        </>

    )
}

const styles = StyleSheet.create({
    backgroundContainer:{
        width:windowWidth,
        height:windowHeight*0.65,   
            
    },
   
    signInContainer:{
        height:windowHeight*0.47,
        borderRadius:30, 
        backgroundColor:'white',
        marginTop:-windowHeight*0.1,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,        
        elevation: 24,
        shadowColor:'white',
               
    },
    inputContainer:{
        marginTop:-windowWidth*0.06,
        justifyContent:'center',
        alignItems:'center',
       
        
    },
    logoText:{
        fontSize:30,
        fontFamily:'Lato',
        color: '#EB5757',
        position: "absolute",
        width: windowWidth*0.4,
        height: windowHeight*0.1,
        left: windowWidth*0.1,
        top: windowHeight*0.1,
        fontWeight:"bold",
        lineHeight:windowWidth*0.1   
    },
    signInButton:{
        height:windowHeight*0.1,
        width:windowHeight*0.1,
        borderRadius:50,
        backgroundColor:'#EB5757',
        alignItems: 'center',
        justifyContent:'center',
        top:-windowWidth*0.1,
        left:windowWidth*0.7,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    buttonArrowStyle:{       
        
     },
    signInText:{
        fontSize:26,
        color: 'black',       
        left: windowWidth*0.1,       
        fontWeight:"bold",
        fontFamily:'Lato',
        top:-windowWidth*0.1,       
    },
    input:{
        width:windowWidth*0.76,
        height:windowWidth*0.12,
        fontSize:16,       
        fontFamily:'Lato',    
        borderBottomWidth:1,
        borderBottomColor: '#E0E0E0',
        justifyContent:"center",

    },
    btnEye:{
        position: "absolute",
        left:windowWidth*0.65,   
         
    },
    forgotPassContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:windowWidth*0.1,
        
    },
    forgotPassStyle:{
        color:'#EB5757',
        fontWeight:"bold",
        fontSize:16
    }

})
export default SignInContent