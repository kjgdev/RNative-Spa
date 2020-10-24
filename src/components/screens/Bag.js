import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Dimensions,Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
//import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons'
import image1 from '../../assets/images/image1.jpg'
import Success from '../../assets/images/success.png'
import CardChiTietGioHang from '../../custom/CardChiTietGioHang'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data1 = [
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' ,time:'15', price:'$100', choosed:'88%'},
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' ,time:'15', price:'$100', choosed:'88%'},
]

const Bag = () => {
    const renderItem = ({ item }) => (
        <CardChiTietGioHang itemimageBackground={item.itemimageBackground} title={item.title} content={item.content} grade={item.grade}
                            time={item.time} price={item.price} choosed={item.choosed}/>
    );
    return (
        <View style={styles.viewContainer}>           
            <View style={styles.header}>
            <TouchableOpacity>
                    <Icon name='menu' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
                <View style={styles.headerFontContainer}>
                    <Text style={styles.headerFont}>Giỏ hàng</Text>
                </View>             
            </View>
            <FlatList
                data={data1}
                renderItem={renderItem}
                horizontal={false}/>
            <View style={styles.tongTienContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Tổng cộng</Text>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#EB5757',marginLeft:windowHeight*0.02}}>$1000</Text>
                </View>
                <TouchableOpacity style={{width:windowWidth*0.266,height:windowWidth*0.08, backgroundColor:'#EB5757',
                                alignItems:'center',justifyContent:'center',borderRadius:5,marginRight:5,}} 
                                onPress={() => {
                                    
                                }}>
                        <Text style={{fontSize: 14,color:'white'}} >Đặt lịch</Text>
                    </TouchableOpacity>
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',

    },
    header: {
        flexDirection: 'row',
        width: windowWidth,
        height: windowHeight*0.066,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:windowWidth*0.05,
        paddingRight:windowWidth*0.1,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD'
    },
    iconMenu: {
        fontSize: 30,
        color: '#EB5757',        
    },
    headerFontContainer:{      
        flex:1,
        justifyContent: 'center',
        alignItems:"center"
    },
    headerFont:{
        fontSize:20,
        color:'#EB5757',
        fontWeight:'bold',       
    },
    tongTienContainer:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height: windowWidth*0.16,
        width:windowWidth,
        paddingHorizontal:windowWidth*0.04,
        borderColor:'#BDBDBD',
        borderWidth:1,
        borderTopStartRadius:5,
        marginBottom:windowWidth*0.11
    },
})

export default Bag;