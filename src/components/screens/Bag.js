import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Dimensions,Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import IconMenu from 'react-native-vector-icons/MaterialCommunityIcons'
import image1 from '../../assets/images/image1.jpg'
import Success from '../../assets/images/success.png'
import CardChiTietGioHang from '../../custom/CardChiTietGioHang'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data1 = [
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15min', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15min', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15min', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15min', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8', time:'15min', price:'$100', choosed:'88%' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' ,time:'15min', price:'$100', choosed:'88%'},
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' ,time:'15min', price:'$100', choosed:'88%'},
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
                horizontal={false}
        />
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
    
})

export default Bag;