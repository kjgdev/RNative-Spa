import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, FlatList, ScrollView } from 'react-native';
import CardAppointment from '../../../custom/CardAppointment'

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
const DangHen = () => {
    const renderItem = ({ item }) => (
        <CardAppointment  branch={item.branch} status={item.status} 
                            time={item.time} price={item.price} />
    );
    return (
        <View style={{height:windowWidth*1.6}}>
                <FlatList
                    data={data1}
                    renderItem={renderItem}
                    horizontal={false}/>
            </View>
    );
}
export default DangHen;