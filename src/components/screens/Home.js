import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomIcon from '../customs/CustomIcon';
import image1 from '../../assets/images/image1.jpg'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
    return (
        <View style={styles.viewContainer}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name='arrow-back-ios' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <Icon name='search' style={styles.iconSearch}></Icon>
                    <TextInput placeholder='Search' placeholderTextColor='#BDBDBD' style={styles.textInput} />
                </View>
                <TouchableOpacity>
                    <Icon name='filter-list-alt' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.topCategoryContainer}>
                <View style={styles.titleContent}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Top Categorys</Text>
                    <Text style={{ fontSize: 12, color: '#BDBDBD' }}>View all</Text>
                </View>
                <View style={styles.iconCategoryContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.iconCategory1}>
                            <Icon name='colorize' style={{ fontSize: 25, color: 'white' }} />
                        </View >
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>Chăm sóc tóc</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.iconCategory2} >
                            <Icon name='colorize' style={{ fontSize: 25, color: 'white' }} />
                        </View>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>Dáng người</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.iconCategory3}>
                            <Icon name='colorize' style={{ fontSize: 25, color: 'white' }} />
                        </View>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>Dưỡng da</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.iconCategory4}>
                            <Icon name='colorize' style={{ fontSize: 25, color: 'white' }} />
                        </View>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 4 }}>Massage</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bestContainer}>
                <View style={styles.titleContent}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Best Service</Text>
                    <Text style={{ fontSize: 12, color: '#BDBDBD' }}>View all</Text>
                </View>
                <View style={styles.cardContainer}>
                
                        <Image style={styles.imageCard} source={image1} ></Image>
                        <TouchableOpacity style={styles.buttonBook}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>Book</Text>
                        </TouchableOpacity>
            

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
        height: 50,
        justifyContent: 'center',
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
    searchContainer: {
        height: 25,
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#BDBDBD",
        borderRadius: 8
    },
    iconSearch: {
        fontSize: 20,
        color: '#BDBDBD',
        marginLeft: 9,
    },
    textInput: {
        marginRight: 16,
        height: 22,
        flex: 1,
        fontSize: 12,
        marginLeft: 15,
        padding: 0,
    },
    topCategoryContainer: {
        marginTop: 24,
        height: 103,
        width: windowWidth,
        paddingHorizontal: 25,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    titleContent: {
        height: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    iconCategoryContainer: {
        height: 70,
        marginTop: 13,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 12
    },
    iconFrame: {
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconCategory1: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#2D9CDB'
    },
    iconCategory2: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#F2C94C'
    },
    iconCategory3: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#27AE60'
    },
    iconCategory4: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#EB5757'
    },
    bestContainer: {
        marginTop: 24,
        height: 130,
        width: windowWidth,
        paddingHorizontal: 25,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    cardContainer: {
        height: 120,
        width: 230,
        marginTop: 22,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderRadius: 8
    },
    imageCard: {
        height: 74,
        width: 230,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
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
        borderTopLeftRadius: 4
    }

})

export default Home;