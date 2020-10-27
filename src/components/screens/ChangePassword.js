import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconEye from 'react-native-vector-icons/MaterialCommunityIcons'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ChangePassword = ({ navigation }) => {

    return (
        <View style={styles.viewContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                        navigation.goBack()                  }}>
                    <Icon name='arrow-back-ios' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
                <View style={styles.headerFontContainer}>
                    <Text style={styles.headerFont}>Đổi mật khẩu</Text>
                </View>
            </View>
            <View style={styles.input}  >
                <TextInput underlineColorAndroid='transparent' placeholder='Old Password' 
                fontFamily='Lato'>
                </TextInput>
            </View>
            <View style={styles.input}  >
                <TextInput underlineColorAndroid='transparent' placeholder='New Password' fontFamily='Lato' >
                </TextInput>
            </View>
            <View style={styles.input}  >
                <TextInput underlineColorAndroid='transparent' placeholder='Confirm Password' fontFamily='Lato' >
                </TextInput>
            </View>
            <TouchableOpacity style={styles.xacNhanButton}>
                <Text style={{ fontSize: 14, color: 'white', fontWeight: 'bold', fontFamily: 'Lato' }} >Xác nhận</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        width: windowWidth,
        height: windowHeight * 0.066,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: windowWidth * 0.05,
        paddingRight: windowWidth * 0.1,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        marginBottom: windowWidth * 0.015
    },
    iconMenu: {
        fontSize: 26,
        color: '#EB5757',
    },
    headerFontContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    headerFont: {
        fontSize: 20,
        color: '#EB5757',
        fontWeight: 'bold',
    },
    input: {
        flexDirection: 'row',
        width: windowWidth * 0.86,
        height: windowWidth * 0.093,
        fontSize: 16,
        fontFamily: 'Lato',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth * 0.045,
        marginTop: windowWidth * 0.0586,
    },
    btnEye: {
        color: 'gray',
        fontSize: 26,
    },
    xacNhanButton: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.08,
        backgroundColor: '#EB5757',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: windowWidth * 0.104
    }
}
)
export default ChangePassword;