import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import CardAppointment from '../../../custom/CardAppointmentDanhGia'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data1 = [
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: 4.8, price: '$100' },
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: 4.8, price: '$100' },
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: 4.8, price: '$400' },
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: 4.8, price: '$500' },
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: -1, price: '$600' },
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: '4.8', price: '$800' },
    { branch: 'CN.Nguyễn Văn Cừ', time: '10h-20/10/2020', rate: -1, price: '$700' },
]
const DaHoanThanh = ({ navigation }) => {
    const renderItem = ({ item }) => (
            <CardAppointment branch={item.branch} rate={item.rate}
                time={item.time} price={item.price} navigation={ navigation }

            />
    );
    return (
        <View >
            <FlatList
                data={data1}
                renderItem={renderItem}
                horizontal={false} />
        </View>
    );
}
export default DaHoanThanh;