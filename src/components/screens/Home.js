import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import image1 from '../../assets/images/image1.jpg'
import CardCustom from '../../custom/CardCustom'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data1 = [
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' },
    { imageBackground: { image1 }, title: 'Tắm trắng toàn thân', content: 'Trị liệu toàn thân bằng các loại thảo mộc quý hiếm', grade: '4.8' },

]
const Home = () => {

    const renderItem = ({ item }) => (
        <CardCustom itemimageBackground={item.itemimageBackground} title={item.title} content={item.content} grade={item.grade} />
    );
    return (
        <View style={styles.viewContainer}>

            <View style={styles.header}>
                {/* <TouchableOpacity>
                    <Icon name='arrow-back-ios' style={styles.iconMenu}></Icon>
                </TouchableOpacity> */}
                <View style={styles.searchContainer}>
                    <Icon name='search' style={styles.iconSearch}></Icon>
                    <TextInput placeholder='Search' placeholderTextColor='#BDBDBD' style={styles.textInput} />
                </View>
                <TouchableOpacity>
                    <Icon name='filter-list-alt' style={styles.iconMenu}></Icon>
                </TouchableOpacity>
            </View>
            <ScrollView style={{marginBottom:100}}>
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
                    <View style={{ marginTop: 15, height: 130, alignItems: 'center', }}>
                        <FlatList
                            data={data1}
                            renderItem={renderItem}
                            horizontal={true}
                        />
                    </View>
                </View>
                <View style={styles.bestContainer}>
                    <View style={styles.titleContent}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>New Service</Text>
                        <Text style={{ fontSize: 12, color: '#BDBDBD' }}>View all</Text>
                    </View>
                    <View style={{ marginTop: 15, height: 130, alignItems: 'center', }}>
                        <FlatList
                            data={data1}
                            renderItem={renderItem}
                            horizontal={true}
                        />
                    </View>
                </View>
                <View style={styles.bestContainer}>
                    <View style={styles.titleContent}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>New Service</Text>
                        <Text style={{ fontSize: 12, color: '#BDBDBD' }}>View all</Text>
                    </View>
                    <View style={{ marginTop: 15, height: 130, alignItems: 'center', }}>
                        <FlatList
                            data={data1}
                            renderItem={renderItem}
                            horizontal={true}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
     
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
        marginLeft: 0,
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
        height: 170,
        width: windowWidth,
        paddingHorizontal: 25,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    cardContainer: {
        height: 120,
        width: 230,
        marginTop: 22,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#EB5757',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 7
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