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
                    <View style={{paddingLeft:windowWidth*0.02, }}>                       
                        <View style={{ flexDirection: 'row',width:windowWidth*0.63,justifyContent: 'space-between'}}>
                            <View style={{height:windowWidth*0.18,  justifyContent: 'space-between'}}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>   
                                <Text style={{ fontSize: 12, width: windowWidth*0.4, color: '#BDBDBD' }}>{content}</Text>   
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{width:windowWidth*0.06,height:windowWidth*0.04,justifyContent:'center', borderRadius:4,backgroundColor:'#F2C94C',alignItems:'center'}}>
                                        <Text style={{ fontSize: 10,color:'white' }}>{grade}</Text>
                                    </View>
                                <View style={styles.separate} />
                                <Text style={{ fontSize: 10,color:'#BDBDBD' }}>{choosed}</Text>                              
                        </View>                      
                            </View>
                            <View style={{}}>
                                <Text style={{ fontSize: 16,  }}>{price}</Text>   
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{ fontSize: 12, color: '#BDBDBD' }}>/</Text>  
                                    <Text style={{ fontSize: 12, color: '#BDBDBD' }}>{time}</Text>
                                    <Text style={{ fontSize: 12, color: '#BDBDBD' }}>min</Text>
                                </View>
                                  
                            </View>  
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
        height: windowWidth*0.24,
        width: windowWidth*0.24,
        borderRadius:8,
        
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