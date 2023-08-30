import *as React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    FlatList,
    Dimensions,
    TextInput,
    AsyncStorage
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import * as Constants from '../constants/Constants'
const { width, height } = Dimensions.get('screen')
const color = '#7eab9b';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            categories: [
                {
                    id: 1,
                    name: "طبيب",
                    show: true,
                    img: require('../assets/Image/doctor.png'),
                },
                {
                    id: 2,
                    name: "مهندس",
                    show: true,
                    img: require('../assets/Image/eng.png'),
                    // nameOfIcon: 'hearto',
                },
                {
                    id: 3,
                    name: "مستشفى",
                    show: true,
                    img: require('../assets/Image/hos.png'),
                    // nameOfIcon: 'hearto',
                },
                {
                    id: 4,
                    name: "نجار",
                    show: true,
                    img: require('../assets/Image/download.jpg'),
                },
                // {
                //     id: 5,
                //     name: "البريد",
                //     show: true,
                //     image: require('../assets/Image/post.png'),
                // },

            ],
            items: [
                {
                    id: 1,
                    name: "Car",
                    show: true,
                    image: 'https://img.icons8.com/nolan/2x/FF5300/45145A/fiat-500.png',
                },
                {
                    id: 2,
                    name: "Camera",
                    show: true,
                    image: 'https://img.icons8.com/nolan/2x/FF5300/45145A/multiple-cameras.png',
                    // nameOfIcon: 'hearto',
                },
                {
                    id: 3,
                    name: "Scooter",
                    show: true,
                    image: 'https://img.icons8.com/nolan/344/scooter.png',
                    // nameOfIcon: 'hearto',
                },
                {
                    id: 4,
                    name: "Laptop",
                    show: true,
                    image: 'https://img.icons8.com/nolan/2x/laptop.png',
                },


            ],
            enter: 0,
            edit: false
        }
    }


    search(value) {
        let list = this.state.categories
        for (let i = 0; i < list.length; i++) {
            if (list[i].name.toLowerCase().includes(value.toLowerCase())) {
                list[i].show = true
            } else {
                list[i].show = false
            }
        }
        this.setState({ items: list })
    }
    show() {
        let list = this.state.items
        for (let i = 0; i < list.length; i++) {
            if (list[i].show) {
                return true
            }
        }
        return false
    }


    render() {
        return (
            <>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={Constants.statusBar.backgroundColor} />
                <ScrollView style={{ flex: 1 }}>
                    <View style={Constants.container}>
                        <View style={Constants.header.headerStyle}>
                            <View style={{ backgroundColor: '#fff', width: 70, height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'center' }}>
                                {this.state.image == '' ? <Icon1
                                    name={'user-circle-o'}
                                    size={50}
                                    color={color} /> :
                                    <Image
                                        source={this.state.image}
                                        style={{
                                            height: 60,
                                            width: 60,
                                            borderRadius: 30,
                                            resizeMode: 'contain'
                                        }} />
                                }

                            </View>
                            <TouchableOpacity
                                disabled={true}
                                onPress={() => {
                                }}>
                                <Entypo name='list' size={28} color='#7eab9b' />
                            </TouchableOpacity>
                        </View>
                        <View style={Constants.search.searchViewStyle}>
                            <Icon name="search" color={'gray'} size={18}
                                style={{
                                    marginRight: 5
                                }} />
                            <TextInput
                                style={Constants.search.textInputStyle}
                                placeholderTextColor={"gray"}
                                placeholder="بحث"
                                onChangeText={(value) => {
                                    this.search(value)
                                }} />
                        </View>
                        <View style={{
                            width: "100%",
                            marginTop: 30,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 50
                        }}>

                            {this.state.categories.map((item, index) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        index == 0 ?
                                            this.props.navigation.navigate('Medical') :
                                            index == 1 ?
                                                this.props.navigation.navigate('Engineers') :
                                                index == 3 ?
                                                    this.props.navigation.navigate('Categories') : null
                                    }}>
                                    <View style={{
                                        backgroundColor: '#7eab9b',
                                        height: 65,
                                        width: width * 0.18,
                                        borderRadius: 18,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginHorizontal: 10,
                                    }}>
                                        {index != 3 ?
                                            <Image
                                                source={item.img}
                                                style={{
                                                    height: '85%',
                                                    width: width * 0.5,
                                                    resizeMode: 'contain'
                                                }} /> :
                                            <Entypo name='dots-three-horizontal' size={28} color='#fff' />
                                        }

                                    </View>
                                    <Text style={{
                                        fontSize: Constants.fonts.fontSize_16,
                                        fontFamily: Constants.fonts.fontFamily2,
                                        marginTop: 5,
                                        color: Constants.fonts.mainColor,
                                        textAlign: 'center'
                                    }}>{index != 3 ? item.name : 'المزيد'}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        {/* </ScrollView> */}
                        <View style={{ width: width }}>
                            <Text style={{
                                marginLeft: 20,
                                marginTop: -10,
                                fontSize: Constants.fonts.fontSize_20,
                                fontFamily: Constants.fonts.fontFamily,
                                textAlign: 'left',
                                color: Constants.fonts.mainColor
                            }}>الأكثر شيوعاً... </Text>
                        </View>
                        <ScrollView horizontal={true}>
                            <View style={{
                                width: "100%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: "wrap",
                                marginTop: 10,
                                marginBottom: 120,
                                padding: 8
                            }}>
                                {this.show() ?
                                    (this.state.categories.map((item, index) => (
                                        item.show ?
                                            <TouchableOpacity
                                                onPress={() => {
                                                    this.props.navigation.navigate('About', { person: item, })
                                                }}>
                                                <View style={{
                                                    backgroundColor: '#7eab9b',
                                                    height: 240,
                                                    width: width * 0.48,
                                                    borderRadius: 18,
                                                    alignItems: "center",
                                                    justifyContent: 'space-around',
                                                    marginBottom: 10,
                                                    margin: 8,
                                                }}>

                                                    <Image
                                                        source={item.img}
                                                        style={{
                                                            height: '65%',
                                                            width: width * 0.4,
                                                            borderRadius: width * 0.04,
                                                            resizeMode: 'contain'
                                                        }} />

                                                    <Text style={{
                                                        fontSize: Constants.fonts.fontSize_20,
                                                        fontFamily: Constants.fonts.fontFamily2,
                                                        color: '#fff',
                                                        marginTop: 5
                                                    }}>{item.name}</Text>

                                                </View>
                                            </TouchableOpacity>
                                            :
                                            null
                                    )))
                                    :
                                    (
                                        <View style={{
                                            height: height * 0.5,
                                            justifyContent: 'center',
                                            padding: 20
                                        }}>
                                            <Text style={[Constants.fonts,
                                            {
                                                color: Constants.fonts.mainColor,
                                                fontSize: Constants.fonts.mainFontSize,
                                            }
                                            ]}>لا يوجد عناصر مشابهه !</Text>
                                        </View>
                                    )
                                }
                            </View>
                        </ScrollView>

                    </View>
                </ScrollView>
            </>
        )
    }
}
