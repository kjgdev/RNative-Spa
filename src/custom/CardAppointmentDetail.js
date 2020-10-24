import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Modal, TextInput } from 'react-native';
//import image1 from '../../assets/images/image1.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import image1 from '../assets/images/image1.jpg'
import backgroundImage from '../assets/images/image1.jpg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardCustom = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [dissatisfied,setDissatisfied]= useState(true);
    const [satisfied,setSatisfied]= useState(false);
    const [verysatisfied,setVerysatisfied]= useState(false);
    const dissatisfiedPress = ()=>{
        if(dissatisfied == false) {
            setDissatisfied(true);
            setSatisfied(false);
            setVerysatisfied(false);
        }
    }
    const satisfiedPress = ()=>{
        if(satisfied == false) {
            setDissatisfied(false);
            setSatisfied(true);
            setVerysatisfied(false);
        }
    }
    const verysatisfiedPress = ()=>{
        if(verysatisfied == false) {
            setDissatisfied(false);
            setSatisfied(false);
            setVerysatisfied(true);
        }
    }
    const { imageBackground, title, rating, price } = props;
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                       <Text style={{fontSize: 20,color:'#EB5757',fontWeight:'bold'}}>Đánh giá</Text>                 
                        <View style={{flexDirection:'row', justifyContent:'space-between',width:windowWidth*0.603,marginVertical:windowWidth*0.03}}>
                            <TouchableOpacity style={dissatisfied ?styles.choosedIcon : styles.notChoosedIcon} onPress={dissatisfiedPress}>
                                <Icon name='sentiment-very-dissatisfied' style={dissatisfied ?styles.choosedIcon : styles.notChoosedIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={dissatisfied ?styles.choosedIcon : styles.notChoosedIcon} onPress={satisfiedPress}>
                                <Icon name='sentiment-satisfied' style={satisfied ?styles.choosedIcon : styles.notChoosedIcon}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={dissatisfied ?styles.choosedIcon : styles.notChoosedIcon} onPress={verysatisfiedPress}>
                                <Icon name='sentiment-very-satisfied' style={verysatisfied ?styles.choosedIcon : styles.notChoosedIcon}/>
                            </TouchableOpacity>                        
                        </View>
                        <View>
                            <TextInput style={styles.nhanxetContainer} placeholder='Nhận xét của bạn..' multiline={true} numberOfLines={4} />
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:windowWidth*0.037}}>
                            <TouchableOpacity style={{width:windowWidth*0.24,height:windowWidth*0.08, backgroundColor:'#EB5757',
                                    alignItems:'center',justifyContent:'center',borderRadius:8,marginRight:windowWidth*0.186}} 
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                <Text style={{fontSize: 12,color:'white',fontWeight:'bold'}} >Rating All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:windowWidth*0.24,height:windowWidth*0.08, backgroundColor:'#EB5757',
                                    alignItems:'center',justifyContent:'center',borderRadius:8,}} 
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                <Text style={{fontSize: 12,color:'white',fontWeight:'bold'}} >Rating</Text>
                            </TouchableOpacity>
                        </View>
                        
                        
                    </View>
                </View>
        </Modal>
            <View style={styles.cardContent}>
                <View style={styles.content}>
                    <Image source={backgroundImage} style={styles.image}></Image>
                    <View style={{ flexDirection: 'row',width:windowWidth*0.65, marginTop: 2, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{  marginLeft: 5,}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>  
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#EB5757',marginTop:windowWidth*0.012}}>{price}</Text>
                        </View>
                        {rating<0?
                        <TouchableOpacity onPress={() => {
                            setModalVisible(!modalVisible);
                          }}
                            style={{width:windowWidth*0.133,height:windowWidth*0.056,justifyContent:'center', borderRadius:4,backgroundColor:'#EB5757',alignItems:'center'}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:'white'}}>Rating</Text>
                        </TouchableOpacity>
                         :
                        <View style={{width:windowWidth*0.093,height:windowWidth*0.056,justifyContent:'center', borderRadius:4,backgroundColor:'#F2C94C',alignItems:'center'}}>
                            <Text style={{ fontSize: 14,color:'white' }}>{rating}</Text>
                        </View>}                
                    </View>                   
                </View>              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',       
        marginVertical:windowWidth*0.025,
    },
    cardContent: {
        height: windowWidth*0.17,
        width: windowWidth*0.88,
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'#BDBDBD',
    },
    image: {
        height: windowWidth*0.17,
        width: windowWidth*0.17,
        borderRadius:8,
       
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        alignItems:"center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
      },
      modalView: {
        height:windowWidth*0.66,
        width:windowWidth*0.86,
        padding:windowWidth*0.025,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        borderWidth:1,
        borderColor:'#BDBDBD',
      },
      choosedIcon:{
          fontSize:44,
          color:'#EB5757'
      },
      notChoosedIcon:{
        fontSize:44,
        color:'#BDBDBD'
    },
    nhanxetContainer:{       
        width:windowWidth*0.78,
        borderWidth:1,
        borderColor:'#BDBDBD',
        borderRadius:8,
        textAlignVertical:'top'

    }
})

export default CardCustom;