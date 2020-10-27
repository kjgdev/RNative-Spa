import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, FlatList, ScrollView } from 'react-native';
import backgroundImage from '../../assets/images/image1.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconQuestion from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const dataInfo = {completedDate:10,completedService:20,point:120,name:'Nguyễn Ánh'};

const Info = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={backgroundImage} style={styles.avatarImage} />
            </View>
            <Text style={styles.fontName}>{dataInfo.name}</Text>
            <View style={styles.infoDetailContainer}>
                <View style={styles.detail}>
                    <Text style={styles.fontDetailTitle}>Cuộc hẹn hoàn thành</Text>
                    <Text style={styles.fontDetailNumber}>{dataInfo.completedDate}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.fontDetailTitle}>Dịch vụ đã sử dụng</Text>
                    <Text style={styles.fontDetailNumber}>{dataInfo.completedDate}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.fontDetailTitle}>Điểm tích lũy</Text>
                    <Text style={styles.fontDetailNumber}>{dataInfo.completedDate}</Text>
                </View>
            </View>
            <View style={styles.seperate} />
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        navigation.navigate('ChangePassword')
                    }}>
                    <View style={styles.viewInbutton}>
                        <Icon name='vpn-key' style={styles.IconStyle}></Icon>
                        <Text  style={styles.fontInButton}>Đổi mật khẩu</Text>
                    </View>
                    <Icon name='keyboard-arrow-right' style={styles.IconStyle}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.viewInbutton}>
                        <Icon name='settings' style={styles.IconStyle}></Icon>
                        <Text  style={styles.fontInButton}>Settings</Text>
                    </View>
                    <Icon name='keyboard-arrow-right' style={styles.IconStyle}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={styles.viewInbutton}>
                        <IconQuestion name='question-circle' style={styles.IconStyle}></IconQuestion>
                        <Text  style={styles.fontInButton}>Trợ giúp</Text>
                    </View>
                    <Icon name='keyboard-arrow-right' style={styles.IconStyle}/>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        alignItems:'center',
        backgroundColor:'white',   
        height:windowHeight,
    },
    avatarContainer:{
        paddingTop:windowWidth*0.075,  
         
    },
    avatarImage:{
        height:windowWidth*0.266,
        width:windowWidth*0.266,
        borderRadius:windowWidth*0.133,
        
    },
    fontName:{
        fontSize:20,
        fontWeight:'bold',
        color:'#EB5757',
        marginTop:windowWidth*0.025
    },
    infoDetailContainer:{
        marginTop:windowWidth*0.04,
        width:windowWidth*0.83,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    detail:{
        width:windowWidth*0.162,
        alignItems:'center',
        justifyContent:'center'

    },
    fontDetailTitle:{
        fontSize:12,
        textAlign:'center',
        color:'#BDBDBD',
    },
    fontDetailNumber:{
        fontSize:12,
        textAlign:'center',
        color:'#EB5757'
    },
    seperate:{
        width:windowWidth,
        height:windowWidth*0.04,
        backgroundColor:'#F2F2F2',
        marginTop:windowWidth*0.025,
    },
    buttonContainer:{
        flexDirection:'row',    
        justifyContent:'space-between',  
        alignItems:'center',
        width:windowWidth,
        paddingVertical:windowWidth*0.0213,
        paddingLeft:windowWidth*0.0453,
        paddingRight:windowWidth*0.032,
        borderBottomWidth:0.5,
        borderBottomColor:'#BDBDBD'
    },
    viewInbutton:{
        flexDirection:'row',
        alignItems:'center',
    },
    IconStyle:{
        fontSize:20,
        fontWeight:'bold'
    },
    fontInButton:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:windowWidth*0.026,
    }
})

export default Info;