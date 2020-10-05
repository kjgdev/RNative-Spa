import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import image1 from '../../assets/images/image1.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardCustom = (props) => {
    const { imageBackground, title, content, grade } = props;
    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                <View style={styles.content}>
                    <Image source={image1} style={styles.image}></Image>
                    <View style={{ flexDirection: 'row', marginTop: 2, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 10,color:'#BDBDBD' }}>{grade}</Text>
                            <Icon name='star' size={14} color='#F2C94C' />
                        </View>
                    </View>
                    <View style={{ paddingLeft: 12 }}>
                        <Text style={{ fontSize: 10, width: 150, color: '#BDBDBD' }}>{content}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonBook}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Book</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 5
    },
    cardContent: {
        height: 120,
        width: 230,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#EB5757',
        shadowOpacity: 0.5,
        shadowRadius: 0.55,
        elevation: 5
    },
    image: {
        position: 'relative',
        height: 74,
        width: 230,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    buttonBook: {
        height: 20,
        width: 50,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#EB5757',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    content: {
        flexDirection: 'column',
        flex: 1
    }
})

export default CardCustom;