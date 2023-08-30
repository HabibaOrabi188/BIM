import *as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    Linking,
} from "react-native"
import Icon2 from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import call from 'react-native-phone-call'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');
import * as Constants from '../constants/Constants'
const { width, height } = Dimensions.get('screen')
const size = 24
const color = '#7eab9b';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    name: "طبيب",
                    show: true,
                    image: require('../assets/Image/doctor.png'),
                },
            ],
            enter: 0,
            edit: false,
            mobileNumber: '01095457439',
            message: '',
            position: {
                latitude: 10,
                longitude: 10,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
            }
        }
    }

    componentDidMount() {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            let position = {
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            }
            this.setState({ position: position });
        })
    }
    call() {
        const args = {
            number: this.state.mobileNumber,
            prompt: true,
            skipCanOpen: true
        }

        call(args).catch(console.error)
    }

    openWhatsApp() {
        let msg = this.state.message;
        let mobile = this.state.mobileNumber;
        if (mobile.length != 11) {
            alert('Please insert correct WhatsApp number');
            return;
        }
        let url =
            'whatsapp://send?text=' +
            this.state.message +
            '&phone=20' + this.state.mobileNumber;
        Linking.openURL(url)
            .then((data) => {
                console.log('WhatsApp Opened successfully');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            });
    };
    render() {
        const { person, categori } = this.props.route.params;
        console.log(categori)
        return (
            <>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={Constants.statusBar.backgroundColor}
                />
                {/* <ScrollView> */}
                <View style={styles.top}>
                    <View style={[
                        Constants.header.headerStyle,
                        {
                            width: '100%',
                            height: '100%',
                            borderBottomLeftRadius: 35,
                            backgroundColor: '#7eab9b',
                        },
                    ]}>
                        <View style={{
                            width: width * .1,
                        }}></View>
                        <View style={{ width: width * .7, alignItems: 'center' }}>
                        </View>
                        <View style={{ width: width * .1, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}>
                                <Ionicons name="arrow-undo" color={'white'} size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >

                <View style={styles.container}>
                    <View
                        style={{
                            width: width,
                            height: height,
                            borderTopRightRadius: 35,
                            backgroundColor: 'white',
                            paddingTop: 25,
                            alignItems: 'center'
                        }}>
                        <View style={{
                            height: 140,
                            width: 140,
                            backgroundColor: 'lightgray',
                            borderRadius: 70,
                            marginTop: -90
                        }}>
                            <Image
                                source={person.img}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    borderRadius: 70,
                                    resizeMode: 'contain'
                                }} />
                        </View>
                        <ScrollView style={{
                            height: height,
                            width: width,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <View style={{ width: '62%' }}>
                                    <Text
                                        numberOfLines={1}
                                        style={[Constants.fonts,
                                        {
                                            color: Constants.fonts.mainColor,
                                            fontSize: Constants.fonts.mainFontSize,
                                            marginTop: 20
                                        }
                                        ]}>
                                        {person.name}
                                    </Text>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            fontSize: 20,
                                            color: 'gray',
                                            fontFamily: Constants.fonts.fontFamily
                                        }}>{categori}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                        {person.rate < 1 ?
                                            <Icon name='star-half-alt'
                                                size={20} color='#f59b16ab' style={{ margin: 1 }} /> :
                                            <Icon1 name={'star'}
                                                size={22} color='#f59b16ab' style={{ margin: 1 }} />}

                                        <Icon1 name={person.rate >= 1 ? 'star' : 'staro'}
                                            size={22} color={person.rate > 1 ? '#f59b16ab' : 'gray'} style={{ margin: 1 }} />


                                        <Icon1 name={person.rate > 2 ? 'star' : 'staro'}
                                            size={22} color={person.rate > 2 ? '#f59b16ab' : 'gray'} style={{ margin: 1 }} />


                                        <Icon1 name={person.rate > 3 ? 'star' : 'staro'}
                                            size={22} color={person.rate > 3 ? '#f59b16ab' : 'gray'} style={{ margin: 1 }} />

                                    </View>

                                </View>
                                <View style={{ width: '30%', height: 40, flexDirection: 'row', justifyContent: 'flex-end', }}>


                                    <TouchableOpacity
                                        style={{
                                            width: 45,
                                            height: 40,
                                            borderRadius: 10,
                                            backgroundColor: '#0cd414',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onPress={() => {
                                            this.openWhatsApp()
                                        }}>
                                        <Icon2
                                            name={'whatsapp'}
                                            size={26}
                                            color={'#fff'}
                                            style={styles.icon_text_input}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 45,
                                            height: 40,
                                            borderRadius: 10,
                                            backgroundColor: color,
                                            marginLeft: 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                        onPress={() => {
                                            this.call()
                                        }}>
                                        <Icon
                                            name={'phone-alt'}
                                            size={22}
                                            color={'#fff'}
                                            style={styles.icon_text_input}
                                        />
                                    </TouchableOpacity>

                                </View>

                            </View>
                            <View style={{ width: width * .9, height: .8, backgroundColor: '#f0eaea', marginTop: 20 }}></View>
                            {/* <ScrollView style={{ height: height*2 }}> */}

                            <View style={{
                                width: Constants.search.textInputStyle.width,
                                borderRadius: 15,
                                alignSelf: 'center',
                                marginTop: 20,
                                height: height * 0.22,
                            }}>
                                <Text
                                    style={[Constants.fonts,
                                    {
                                        color: Constants.fonts.mainColor,
                                        fontSize: Constants.fonts.mainFontSize,
                                        marginBottom: 5
                                    }
                                    ]}
                                >About </Text>

                                <Text numberOfLines={4}

                                    style={[Constants.fonts,
                                    {
                                        color: 'gray',
                                        fontSize: 20,
                                        marginBottom: 5
                                    }
                                    ]}>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Text>
                            </View>
                            <View style={{ width: width * .9, height: .8, backgroundColor: '#f0eaea' }}></View>
                            <View style={{
                                width: Constants.search.textInputStyle.width,
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignSelf:'center',
                                justifyContent: 'space-between',
                                height: height * 0.12,
                                marginTop: 20
                            }}>
                                <Text style={[Constants.fonts,
                                {
                                    color: Constants.fonts.mainColor,
                                    fontSize: Constants.fonts.mainFontSize,
                                }
                                ]}>الموقع : </Text>
                                <TouchableOpacity
                                    style={{
                                        width: '40%',
                                        height: '50%',
                                        borderRadius: 10,
                                        backgroundColor: '#289b2c',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    onPress={() => {
                                        this.props.navigation.navigate('Map')
                                    }}>
                                    <Entypo
                                        name={'location'}
                                        size={30}
                                        color={'#fff'}
                                        style={styles.icon_text_input}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
        backgroundColor: color,
    },
    top: {
        width: '100%',
        height: 115,
        backgroundColor: 'white',
    },
    text_myaccount_style: {
        fontSize: Constants.fonts.mainFontSize,
        fontFamily: Constants.fonts.fontFamily,
        Color: Constants.fonts.mainColor,
    },
    view_item: {
        height: height * 0.09,
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 7,
    },
    icon_: { height: '42%', width: '42%' },
    TouchableOpacity_arrow: {
        width: width * 0.13,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    View_text_icon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: width * 0.7,
        height: 45,
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
