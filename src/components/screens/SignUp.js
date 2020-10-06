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
import DatePicker from 'react-native-datepicker'
import { Switch } from 'react-native-switch'
import backgroundImage from '../../assets/images/backgroundSignIn.png'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SignInContent= ({ navigation })=>{
    const [selectDate,setDate]= useState(new Date());  
    const [genderSwitch,setGenderSwitch]= useState(true);
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
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} >
                    <Icon name='keyboard-arrow-left' color='#EB5757' size={40}/>
                </TouchableOpacity>
                <View >
                    <Text style={styles.logoText}>Welcome Back</Text>
                </View>
                
            </ImageBackground>
            <View style={styles.signUpContainer}>     
                <TouchableOpacity style={styles.nextButton} onPress={()=> {
                         navigation.navigate('Verification')
                     }}>
                    <Icon name='arrow-right-alt' color='white' styles={styles.buttonArrowStyle} size={50} ></Icon>
                </TouchableOpacity>    
                 <Text style={styles.signInText}>Sign Up</Text> 
                 <View style={styles.inputContainer}>
                    <View style={styles.input} >
                        <TextInput placeholder='Email' style={styles.input}  >
                        </TextInput> 
                        
                    </View>              
                    <View style={styles.input}   >
                        <TextInput  placeholder='Password'  fontFamily='Lato' secureTextEntry={showPass} style={styles.input}>
                        </TextInput> 
                        <TouchableOpacity style={styles.btnEye} onPress={functionShowPass}>
                            <IconEye name={press== false ? 'eye':'eye-off'} color='gray' size={26}/>                            
                        </TouchableOpacity>
                    </View>
                    <View style={styles.input} >
                        <TextInput placeholder='Name' style={styles.input}  >
                        </TextInput> 
                        
                    </View> 
                    <View style={styles.input} >
                        <TextInput placeholder='Phone' style={styles.input}  >
                        </TextInput> 
                        
                    </View> 
                </View>   
                 <View style={styles.forgotPassContainer}>
                    <DatePicker
                        style={styles.datepickerContainer}  
                        date={selectDate}                  
                        mode="date"
                        placeholder="Select Date"
                        format="YYYY-MM-DD"
                        minDate="1950-01-01"
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{                  
                        dateInput: {                       
                            borderBottomWidth:1,
                            borderBottomColor: 'gray',
                            borderColor:'transparent'                     
                            
                        },
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            marginLeft: 2
                            
                        }
                        // ... You can check the source to find the other keys.
                        }}  
                        onDateChange={setDate}                
                    />
                    <View style={{paddingRight:windowWidth*0.05,marginTop:-windowWidth*0.03}}>
                        <Switch value={genderSwitch}
                            onValueChange={setGenderSwitch}
                            disabled={false}    
                            style={{}}                  
                            activeText={'Female'}
                            inActiveText={'Male'}                                        
                            changeValueImmediately={true}                       
                            backgroundActive={'#EB5757'}
                            backgroundInactive={'gray'}
                            circleActiveColor={'#EB5757'}
                            circleBorderActiveColor={'white'}
                            circleInActiveColor={'gray'}
                            />
                    </View>
                     
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
   
    backButton:{
        position: "absolute",
        left:windowWidth*0.03,
        top: windowHeight*0.01,
    },
    logoText:{
        fontSize:30,
        color: '#EB5757',
        fontFamily:'Lato',
        position: "absolute",
        width: windowWidth*0.4,
        height: windowHeight*0.1,
        left: windowWidth*0.1,
        top: windowHeight*0.09,
        fontWeight:"bold",
        lineHeight:windowWidth*0.1   
    },
    signUpContainer:{
        height:windowHeight*0.6,
        borderRadius:30, 
        backgroundColor:'white',
        marginTop:-windowHeight*0.2,
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
        fontFamily:'Lato'
        
    },
   
    nextButton:{
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
        top:-windowWidth*0.1,     
        fontFamily:'Lato'  
    },
    input:{
        width:windowWidth*0.76,
        height:windowWidth*0.12,
        fontSize:16,    
        fontFamily:'Lato',       
        borderBottomWidth:1,
        borderBottomColor: 'gray',
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
        justifyContent:'space-between',       
    },
    forgotPassStyle:{
        color:'#EB5757',
        fontWeight:"bold",
        fontSize:16
    },
    datepickerContainer:{
        top:-windowWidth*0.05,
        width:windowWidth*0.37,
        left:windowWidth*0.02
    }

})
export default SignInContent