import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import backgroundImage from '../assets/images/image1.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CardCustom = (props) => {
    const { imageBackground, title, content, grade, price, time, choosed} = props;
    
    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                <View style={styles.content}>
                    <Image source={backgroundImage} style={styles.image}></Image>
                    <View style={{paddingLeft:windowWidth*0.01 }}>                       
                        <View style={{ flexDirection: 'row',width:windowWidth*0.65,height:windowWidth*0.13,  justifyContent: 'space-between',}}>
                            <View style={{}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{title}</Text>   
                                <Text style={{ fontSize: 10, width: windowWidth*0.4, color: '#BDBDBD' }}>{content}</Text>                         
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{price}</Text>   
                                    <Text style={{ fontSize: 10, color: '#BDBDBD' }}>{time}</Text>  
                            </View>  
                        </View>                             
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{width:windowWidth*0.06,height:windowWidth*0.04, borderRadius:4,backgroundColor:'#F2C94C',alignItems:'center'}}>
                                <Text style={{ fontSize: 10,color:'white' }}>{grade}</Text>
                            </View>
                            <View style={styles.separate} />
                            <Text style={{ fontSize: 10,color:'#BDBDBD' }}>{choosed}</Text>                              
                        </View>         
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
        
    },
    cardContent: {
        height: windowWidth*0.24,
        width: windowWidth*0.93,
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'#BDBDBD',
        marginVertical:windowWidth*0.025
    },
    image: {
        position: 'relative',
        height: windowWidth*0.2,
        width: windowWidth*0.2,
        borderRadius:8,
        marginHorizontal:windowWidth*0.02
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        alignItems:"center"
    },
    separate:{
        height:windowWidth*0.034,
        width:1,
        backgroundColor:'#BDBDBD',
        marginHorizontal:windowWidth*0.03
    },
})

export default CardCustom;