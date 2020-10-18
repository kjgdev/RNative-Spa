import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
//import image1 from '../../assets/images/image1.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';
import image1 from '../assets/images/image1.jpg'
import backgroundImage from '../assets/images/image1.jpg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardCustom = (props) => {
    const { imageBackground, title, rating, price } = props;
    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                <View style={styles.content}>
                    <Image source={backgroundImage} style={styles.image}></Image>
                    <View style={{ flexDirection: 'row',width:windowWidth*0.65, marginTop: 2, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{  marginLeft: 5,}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>  
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#EB5757',marginTop:windowWidth*0.012}}>{price}</Text>
                        </View>
                        {rating<0?
                        <View style={{width:windowWidth*0.133,height:windowWidth*0.056,justifyContent:'center', borderRadius:4,backgroundColor:'#EB5757',alignItems:'center'}}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color:'white'}}>Rating</Text>
                        </View>
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
        position: 'relative',
        height: 50,
        width: 50,
        borderRadius:8,
        marginHorizontal:windowWidth*0.02
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        alignItems:"center"
    }
})

export default CardCustom;