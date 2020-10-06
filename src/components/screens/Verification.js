import React,{useState,Fragment} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import backgroundImage from '../../assets/images/backgroundSignIn.png'
import Icon  from 'react-native-vector-icons/MaterialIcons'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const SignInContent= ({ navigation })=>{
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,setValue,
  });
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
                <TouchableOpacity style={styles.nextButton}>
                    <Icon name='arrow-right-alt' color='white' styles={styles.buttonArrowStyle} size={50} ></Icon>
                </TouchableOpacity>    
                 <Text style={styles.signInText}>Verification Code</Text> 
                 <View style={styles.inputContainer}>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({index, symbol, isFocused}) => (
                            <Fragment key={index}>
                                {/* <Text
                                    key={`value-${index}`}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text> */}
                                <Text
                                    key={`value-${index}`}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                    </Text>                              
                                    {index === 0 || index === 1|| index === 2 ? (
                                    <View  style={styles.separator} />
                                    ) : null}                                
                            </Fragment>
                             )}
                    />
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
    },
    input:{
        width:windowWidth*0.76,
        height:windowWidth*0.12,
        fontSize:16,           
        borderBottomWidth:1,
        borderBottomColor: 'gray',
        justifyContent:"center",

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
    root: {
        
    },
    title: {
        textAlign: 'center', 
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: windowWidth*0.07,
    },
    cell: {
        width: windowWidth*0.11,
        height: windowWidth*0.11,
        lineHeight: windowWidth*0.1,
        fontSize: 24,  
        color  :'#EB5757',
        backgroundColor:'#F2F2F2',
        textAlign: 'center',
        borderRadius:10
    },
    focusCell: {
        borderWidth: 2,
        borderColor: '#EB5757',
        
    },
    separator: {
        paddingRight:windowWidth*0.09
      },
})
export default SignInContent