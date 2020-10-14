import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button,TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = ({ navigation }) => {
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
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        height:windowHeight,
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
})

export default Search;