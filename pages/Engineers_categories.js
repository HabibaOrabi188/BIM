import React from "react"
import { Text, View, ScrollView, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters-ch';
import Icon from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import * as Constants from '../constants/Constants'
import * as Animatable from 'react-native-animatable'
const { width, height } = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Medical_categories extends React.Component {

    xomponentDidMount() {
        Dimensions.addEventListener('change', ({ window }) => {
            const new_width = window.width
            const new_height = window.height
            this.setState({
                Width: new_width,
                Height: new_height,

            });
        });
    }


    constructor(props) {
        super(props)
        {
            this.state = {
                Width: width,
                Height: height,
                engineers_Categorie: [

                    {
                        title: 'كهرباء',
                        img: ''
                    },
                    {
                        title: 'اتصالات',
                        img: ''
                    },
                    {
                        title: 'معمارى',
                        img: ''
                    },
                    {
                        title: 'مدنى',
                        img: ''
                    },
                    {
                        title: 'ميكاترونيكس',
                        img: ''
                    },
                    {
                        title: 'باور ',
                        img: ''
                    },
                    {
                        title: 'حاسبات',
                        img: ''
                    },
                    // {
                    //     title: 'بترول وغاز طبيعى',
                    //     img: ''
                    // },
                    {
                        title: 'ديكور',
                        img: ''
                    },
                    {
                        title: 'زراعة',
                        img: ''
                    },
                ]
            }
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <StatusBar
                    barStyle="light-content"
                    backgroundColor='#7eab9b'
                />
                <View style={{
                    width: '100%',
                    backgroundColor: '#fff',
                    height: 115,
                }}>
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
                            <Animatable.Text animation={'zoomIn'}
                                style={{
                                    fontSize: Constants.fonts.mainFontSize,
                                    fontFamily: Constants.fonts.fontFamily,
                                    color: Constants.fonts.secondaryColor,
                                }}>المهندسين</Animatable.Text>
                        </View>
                        <View style={{ width: width * .1, alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.goBack();
                                }}>
                                <Ionicons
                                    name="arrow-undo"
                                    color={'#fff'}
                                    size={24}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#dfeeec',
                    width: '100%',
                    backgroundColor: '#7eab9b',
                }}>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            borderTopRightRadius: 35,
                            backgroundColor: '#fff',
                        }}>

                        <ScrollView style={{ flex: 1, marginBottom: 70 }}>

                            <View style={{ height: 220, width: '100%', marginTop: 20 }}>
                                <Lottie source={require('../assets/Image/77366-engineering.json')}
                                    autoPlay
                                />
                            </View>
                            <View style={{
                                width: '100%',
                                height: '40%',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                marginTop: 5,
                                paddingHorizontal: 10
                            }}>
                                {
                                    this.state.engineers_Categorie.map((category, index) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.props.navigation.navigate('Search', { person: category, icon: 'engineering' })
                                            }}
                                            style={{
                                                width: width * 0.25,
                                                height: scale(90),
                                                marginTop: scale(20),
                                                backgroundColor: '#7eab9b',
                                                borderRadius: 20,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginBottom: index == this.state.engineers_Categorie.length - 1 ? 100 : 0
                                            }}>

                                            <Image
                                                source={require('../assets/Image/eng.png')}
                                                style={{
                                                    height: '74%',
                                                    width: width * 0.5,
                                                    resizeMode: 'contain'
                                                }} />
                                            <Text
                                                style={{
                                                    fontSize: Constants.fonts.fontSize_14,
                                                    fontFamily: Constants.fonts.fontFamily,
                                                    color: Constants.fonts.secondaryColor,
                                                }}
                                                numberOfLines={1}
                                            >{category.title}</Text>
                                        </TouchableOpacity>
                                    ))
                                }

                            </View>



                        </ScrollView>


                    </View>
                </View>




            </View>



        )
    }
}