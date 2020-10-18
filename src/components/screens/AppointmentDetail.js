import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Dimensions,Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconDiscount from 'react-native-vector-icons/MaterialCommunityIcons' 
import IconCrown from 'react-native-vector-icons/FontAwesome5' 
import image1 from '../../assets/images/image1.jpg'
import Success from '../../assets/images/success.png'
import CardAppointmentDetail from '../../custom/CardAppointmentDetail'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const dataBranch = {branch:'Nguyễn Văn Cừ',time:'10h 15/10/2020',roomtype:0};

const data1 = [
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: 5, price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: -1, price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: 4.8, price: '$100' },      
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: 4.6, price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: 4.6, price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: 4.6, price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', rating: 4.6, price: '$100' },


]

const AppointmentDetail = ({navigation}) => {
    const renderItem = ({ item }) => (
        <CardAppointmentDetail itemimageBackground={item.itemimageBackground} title={item.title} rating={item.rating} price={item.price} />
    );
    return(
        <View View style={styles.viewContainer}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name='arrow-back-ios' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
                <View style={styles.headerFontContainer}>
                    <Text style={styles.headerFont}>Chi Tiết</Text>
                </View>             
            </View>
            <ScrollView >
                <View style={styles.thongTinContainer}>
                    <View >
                        <Text style={styles.tieuDeStyle}>Thông tin</Text>
                    </View>
                    <View style={styles.chitietContainer}>
                        <View style={styles.chiTietStyles}>
                            <Text style={styles.fontChiTiet}>Chi Nhanh</Text>
                            <View style={styles.separate}/>
                            <Text style={styles.fontChiTiet2}>{dataBranch.branch}</Text>
                        </View>
                        <View style={styles.chiTietStyles}>
                            <Text style={styles.fontChiTiet}>Thời Gian</Text>
                            <View style={styles.separate}/>
                                <Text style={styles.fontChiTiet2}>{dataBranch.time}</Text>
                        </View>
                        <View style={styles.chiTietStyles}>
                            <Text style={styles.fontChiTiet}>Phòng</Text>
                            <View style={styles.separate}/>
                            {dataBranch.roomtype==0?
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={styles.fontChiTiet2}>VIP</Text>
                                <IconCrown name='crown' style={{fontSize:14,color:'#FFC02E',marginLeft:windowWidth*0.015}}/>
                            </View> 
                            :
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={styles.fontChiTiet2}>Thường</Text>                               
                            </View> 
                            }
                                                    
                        </View>                
                    </View>                   
                </View>
                <View style={styles.dichVuContainer}>
                    <Text style={styles.tieuDeStyle}>Dịch vụ</Text>
                    <View>
                        <FlatList
                            data={data1}
                            renderItem={renderItem}
                            horizontal={false}/>
                    </View>
                </View>             
            </ScrollView>
            <View style={styles.tongTienContainer}>
                <View style={{flexDirection:'row',marginBottom:windowWidth*0.04,width:windowWidth*0.42,justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Khuyến mãi</Text>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#EB5757',marginLeft:windowHeight*0.02}}>$100</Text>
                </View>
                <View style={{flexDirection:'row',width:windowWidth*0.42,justifyContent:'space-between'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Tổng cộng</Text>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#EB5757',marginLeft:windowHeight*0.02}}>$1000</Text>
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center'
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
        fontSize: 25,
        color: '#EB5757',
        
        
    },
    headerFontContainer:{
        
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerFont:{
        fontSize:20,
        color:'#EB5757',
        fontWeight:'bold',       
    },
    thongTinContainer:{
        width: windowWidth,
        height: windowWidth*0.45,     
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD'
    },
    dichVuContainer:{ 
        marginHorizontal: 16,
    },
    
    tongTienContainer:{   
        alignItems:'flex-end',
        height: windowWidth*0.27,
        width:windowWidth,
        paddingRight:windowWidth*0.06,
        paddingTop:windowWidth*0.045,
        borderColor:'#BDBDBD',
        borderTopWidth:0.5,
        borderTopLeftRadius:10

    },
    tieuDeStyle:{      
        justifyContent: 'flex-start',
        marginTop:windowWidth*0.02,
        fontSize:14,
        fontWeight:'bold',
    },
    chitietContainer:{      
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems:'center'
    },
    chiTietStyles:{
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems:'center',
        backgroundColor:'#EB5757',
        borderRadius:8,
        width:windowWidth*0.88,
        height:windowWidth*0.08,
        paddingHorizontal:windowWidth*0.04,
        marginVertical:windowWidth*0.02,
    },
    fontChiTiet:{
        width:windowWidth*0.21,
        fontSize:14,
        fontWeight:'bold',
        color:'white',
    },
    fontChiTiet2:{
        fontSize:14,
        fontWeight:'bold',
        color:'white',
    },
    separate:{
        height:windowWidth*0.08,
        width:1,
        backgroundColor:'white',
        marginRight:windowWidth*0.04
    },
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
       
      },
      modalView: {
        height:windowWidth*1.245,
        width:windowWidth,
        marginBottom:-10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
      },
})

export default AppointmentDetail;