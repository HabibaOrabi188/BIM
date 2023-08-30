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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Constants from './Constants'
const { width, height } = Dimensions.get('screen')
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
                {
                    id: 3,
                    name: "مهندس",
                    show: true,
                    image: require('../assets/Image/eng.png'),
                    // nameOfIcon: 'hearto',
                },
                {
                    id: 7,
                    name: "مدرس",
                    show: true,
                    image: require('../assets/Image/teach.png'),
                },
                {
                    id: 2,
                    name: "معمل تحاليل",
                    show: true,
                    image: require('../assets/Image/lab.png'),
                    // nameOfIcon: 'hearto',
                },
                {
                    id: 5,
                    name: "نجار",
                    show: true,
                    image: require('../assets/Image/car.png'),
                },
                {
                    id: 4,
                    name: "مستشفى",
                    show: true,
                    image: require('../assets/Image/hos.png'),
                    // nameOfIcon: 'hearto',
                },

                {
                    id: 6,
                    name: "البريد",
                    show: true,
                    image: require('../assets/Image/post.png'),
                },
                {
                    id: 9,
                    name: "ميكانيكي",
                    show: true,
                    image: require('../assets/Image/mich.png'),
                },
                {
                    id: 8,
                    name: "الصيدلية",
                    show: true,
                    image: require('../assets/Image/phar.png'),
                },


            ],
            enter: 0,
            edit: false
        }
    }
    search(value) {
        let list = this.state.items
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
                <View style={Constants.container}>
                    <View
                        style={[
                            Constants.header.headerStyle,
                        ]}>
                        <View style={{
                            width: width * .1,
                        }}></View>
                        <View style={{ width: width * .7, alignItems: 'center' }}>
                            <Animatable.Text animation={'zoomIn'}
                                style={{
                                    fontSize: Constants.fonts.mainFontSize,
                                    color: Constants.fonts.mainColor,
                                    fontFamily: Constants.fonts.fontFamily
                                }}>الخدمات</Animatable.Text>
                        </View>
                        <View style={{ width: width * .1, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}>
                                <Ionicons
                                    name="arrow-undo"
                                    color={'#7eab9b'}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
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
                    <ScrollView >
                        <View style={{
                            width: "100%",
                            marginTop: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: "wrap",
                            marginBottom: 120,
                            padding: 8
                        }}>
                            {this.show() ?
                                (this.state.items.map((items, index) => (
                                    items.show ?
                                        <TouchableOpacity
                                            onPress={() => {
                                                index == 0 ?
                                                    this.props.navigation.navigate('Medical') :
                                                    index == 1 ?
                                                        this.props.navigation.navigate('Engineers') :
                                                        index == 2 ?
                                                            this.props.navigation.navigate('Teachers') : null
                                            }}>
                                            <View style={{
                                                backgroundColor: '#7eab9b',
                                                height: 90,
                                                width: width * 0.25,
                                                borderRadius: 14,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: 10,
                                            }}>
                                                <Image
                                                    source={items.image}
                                                    style={{
                                                        height: '74%',
                                                        width: width * 0.5,
                                                        resizeMode: 'contain'
                                                    }} />
                                                <Text 
                                                numberOfLines={1}
                                                style={{
                                                    fontSize: Constants.fonts.fontSize_16,
                                                    fontFamily: Constants.fonts.fontFamily,
                                                    color: '#fff'
                                                }}>{items.name}</Text>
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
                                        <Text style={{
                                           fontSize: Constants.fonts.mainFontSize,
                                            color: Constants.fonts.mainColor,
                                            fontFamily:Constants.fonts.fontFamily
                                        }}>لا يوجد عناصر مشابهه !</Text>
                                    </View>
                                )
                            }
                        </View>
                    </ScrollView>

                </View>
            </>
        )
    }
}
