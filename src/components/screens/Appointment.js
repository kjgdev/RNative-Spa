import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, FlatList, ScrollView } from 'react-native';
import DangHenScreen from '../screens/appointmentscreen/DangHen'
import DaHoanThanhScreen from '../screens/appointmentscreen/DaHoanThanh'
import DanhGiaScreen from '../screens/appointmentscreen/DanhGia'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data1 = [
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100' },
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100' },
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100' },
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100' },
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100' },
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100'},
    { branch:'CN.Nguyễn Văn Cừ', time:'10h-20/10/2020' , status: 'Đã hẹn', price:'$100'},
]


const Appointment = ({navigation}) => { 
    
    const [dgHen,setDgHen]= useState(true);
    const [daHoanThanh,setDaHoanThanh]= useState(false);
    const [danhGia,setDanhGia]= useState(false);
    const dagHenPress = ()=>{
        if(dgHen == false) {
            setDgHen(true);
            setDaHoanThanh(false);
            setDanhGia(false);
        }
    }
    const daHoanThanhPress = ()=>{
        if(daHoanThanh == false) {
            setDgHen(false);
            setDaHoanThanh(true);
            setDanhGia(false);
        }
    }
    const danhGiaPress = ()=>{
        if(danhGia == false) {
            setDgHen(false);
            setDaHoanThanh(false);
            setDanhGia(true);
        }
    }
    return (
        <View style={{backgroundColor:'white'}} >
            <View style={{flexDirection:'row',borderBottomColor:'#BDBDBD', borderBottomWidth:1, }}>
                <TouchableOpacity style={dgHen ?styles.press : styles.notPress} onPress={dagHenPress}>
                    <Text style={dgHen ? {fontWeight:'bold',color:'black'}:{fontWeight:'normal',color:'gray'}}>Đang hẹn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={daHoanThanh ?styles.press : styles.notPress} onPress={daHoanThanhPress}>
                    <Text style={daHoanThanh ? {fontWeight:'bold',color:'black'}:{fontWeight:'normal',color:'gray'}}>Đã hoàn thành</Text>
                </TouchableOpacity>
                <TouchableOpacity style={danhGia ?styles.press : styles.notPress} onPress={danhGiaPress}>
                    <Text style={danhGia ? {fontWeight:'bold',color:'black'}:{fontWeight:'normal',color:'gray'}}>Đánh giá</Text>
                </TouchableOpacity>
            </View>
            <View style={{height:windowWidth*0.088, width:windowWidth,borderBottomColor:'#BDBDBD',borderBottomWidth:1}}>

            </View>
            <View style={{height:windowWidth*1.5,}}>
                {dgHen? <DangHenScreen/>:null}
                {daHoanThanh? <DaHoanThanhScreen/>:null}
                {danhGia? <DanhGiaScreen/>:null}
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    press:{
        marginHorizontal:windowWidth*0.05,
        height:windowWidth*0.1,
        borderBottomColor:'#EB5757',
        borderBottomWidth:3,       
        alignItems:'center',
        justifyContent:'center'
    },
    notPress:{
        marginHorizontal:windowWidth*0.05,
        height:windowWidth*0.1,        
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Appointment;