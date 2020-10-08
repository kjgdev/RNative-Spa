import React, { Component,useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Dimensions,Modal } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconDiscount from 'react-native-vector-icons/MaterialCommunityIcons'
import image1 from '../../assets/images/image1.jpg'
import Success from '../../assets/images/success.png'
import CardChiTietBook3 from '../../custom/CardChiTietBook3'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data1 = [
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },      
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', time: '15 min', price: '$100' },


]

const Book3 = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = ({ item }) => (
        <CardChiTietBook3 itemimageBackground={item.itemimageBackground} title={item.title} time={item.time} price={item.price} />
    );
    
    return (    
        <View style={styles.viewContainer}>            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={Success} style={{height:windowWidth*0.34,width:windowWidth*0.55}}/>                  
                        <View >
                            <Text style={{fontSize:20,fontWeight:"600", color:'#EB5757', marginTop:windowWidth*0.1,
                                        height:windowWidth*0.128,width:windowWidth*0.46,textAlign:'center'}} >
                                Bạn đã đặt lịch thành công
                            </Text>
                        </View>
                        <View >
                            <Text style={{fontSize:14,fontWeight:"600", color:'#BDBDBD', marginTop:windowWidth*0.03,
                                        height:windowWidth*0.128,width:windowWidth*0.46,textAlign:'center'}} >
                                Bạn có thể theo dõi lịch hẹn tại Appointment
                            </Text>
                        </View>
                        <TouchableOpacity style={{width:windowWidth*0.61,height:windowWidth*0.09, backgroundColor:'#EB5757',
                                 alignItems:'center',justifyContent:'center',borderRadius:8,marginTop:windowWidth*0.09}} 
                                 onPress={() => {
                                    setModalVisible(!modalVisible);
                                  }}>
                            <Text style={{fontSize: 14,color:'white'}} >Back to Appointment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:windowWidth*0.61,height:windowWidth*0.09, borderColor:'#EB5757', borderWidth:1,
                                 alignItems:'center',justifyContent:'center',borderRadius:8,marginTop:windowWidth*0.05}} 
                                 onPress={() => {
                                    setModalVisible(!modalVisible);
                                  }}>
                            <Text style={{fontSize: 14,color:'#EB5757'}} >Home</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
      </Modal>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name='arrow-back-ios' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
                <View style={styles.headerFontContainer}>
                    <Text style={styles.headerFont}>Đặt lịch</Text>
                </View>             
            </View>
            <ScrollView>
                <View style={styles.thongTinContainer}>
                    <View >
                        <Text style={styles.tieuDeStyle}>Thông tin</Text>
                    </View>
                    <View style={styles.chitietContainer}>
                        <View style={styles.chiTietStyles}>
                            <Text style={styles.fontChiTiet}>Chi Nhanh</Text>
                            <View style={styles.separate}/>
                            <Text style={styles.fontChiTiet2}>Nguyễn Văn Cừ</Text>
                        </View>
                        <View style={styles.chiTietStyles}>
                            <Text style={styles.fontChiTiet}>Thời Gian</Text>
                            <View style={styles.separate}/>
                            <Text style={styles.fontChiTiet2}>11:00 22/11/2020</Text>
                        </View>
                        <View style={styles.chiTietStyles}>
                            <Text style={styles.fontChiTiet}>Phòng</Text>
                            <View style={styles.separate}/>
                            <Text style={styles.fontChiTiet2}>VIP</Text>
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
            <View >
                <TouchableOpacity style={styles.khuyenMaiContainer}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <IconDiscount name='ticket' style={{fontSize: 25,marginRight:5}}/>
                        <Text style={{fontSize: 16,fontWeight:'bold'}}>Khuyến mãi</Text>
                    </View>
                    <View style={{width:windowWidth*0.52,height:windowHeight*0.033, borderWidth:1,
                                 borderColor:'#BDBDBD',alignItems:'center',justifyContent:'center',borderRadius:5}}>
                        <Text style={{fontSize: 12,color:'#BDBDBD'}} >Nhập mã</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.tongTienContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Tổng cộng</Text>
                    <Text style={{fontSize:16,fontWeight:'bold',color:'#EB5757',marginLeft:windowHeight*0.02}}>$1000</Text>
                </View>
                <TouchableOpacity style={{width:windowWidth*0.35,height:windowWidth*0.1, backgroundColor:'#EB5757',
                                 alignItems:'center',justifyContent:'center',borderRadius:5,marginRight:5}} 
                                 onPress={() => {
                                    setModalVisible(!modalVisible);
                                  }}>
                        <Text style={{fontSize: 14,color:'white'}} >Thanh toán</Text>
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
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        width: windowWidth,
        height: windowHeight*0.066,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
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
    khuyenMaiContainer:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height: windowHeight*0.066,
        width:windowWidth,
        paddingHorizontal:windowWidth*0.04,
        borderWidth: 1,
        borderTopColor:'#BDBDBD',
        borderBottomColor:'white',
        marginBottom:-5
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
        borderTopStartRadius:5

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
export default Book3;