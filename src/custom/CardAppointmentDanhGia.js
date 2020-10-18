import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import backgroundImage from '../assets/images/ChiNhanh.png'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CardCustom = (props) => {
    const { branch, time, price, rate} = props;
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.cardContent}>
                <View style={styles.content}>
                    <Image source={backgroundImage} style={styles.image}></Image>
                    <View style={{paddingLeft:windowWidth*0.02 }}>                       
                        <View style={{ flexDirection: 'row',width:windowWidth*0.55, justifyContent: 'space-between',alignItems:'center'}}>
                            <View style={{justifyContent:'space-between',height:windowWidth*0.16}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name='location-pin' fontSize='14'/>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold',paddingLeft:windowWidth*0.015 }}>{branch}</Text>   
                                </View>  
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Icon name='timer' fontSize='14'/>
                                    <Text style={{ fontSize: 12, paddingLeft:windowWidth*0.015,color:'black' }}>{time}</Text>   
                                </View>  
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>                                   
                                        <Icon name='assignment-turned-in' fontSize='14'/>
                                    {(rate < 0 ) ?  
                                    (
                                        <Text style={{ fontSize: 12,color:'#EB5757',paddingLeft:windowWidth*0.015 }}>Chưa Đánh Giá</Text>     
                                    )
                                    :
                                    (<View style={{width:windowWidth*0.06,height:windowWidth*0.04,marginLeft:windowWidth*0.015,justifyContent:'center', borderRadius:4,backgroundColor:'#F2C94C',alignItems:'center'}}>
                                        <Text style={{ fontSize: 10,color:'white' }}>{rate}</Text>
                                    </View>)}
                                </View>
                                                                                                                                                                                         
                            </View>  
                            <View style={{}}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold',color:'#EB5757' }}>{price}</Text>                    
                            </View>
                        </View>                                                          
                    </View>                   
                </View>              
            </TouchableOpacity>
            
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
        height: windowWidth*0.2,
        width: windowWidth*0.86,
        borderRadius: 8,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'#BDBDBD',
        marginVertical:windowWidth*0.025
    },
    image: {
        position: 'relative',
        height: windowWidth*0.16,
        width: windowWidth*0.16,
        borderRadius:8,
        marginHorizontal:windowWidth*0.02
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        alignItems:"center",
        
    },
    separate:{
        height:windowWidth*0.034,
        width:1,
        backgroundColor:'#BDBDBD',
        marginHorizontal:windowWidth*0.03
    },
})

export default CardCustom;