import React from 'react';
import {
    NativeModules,
    Text,
    TouchableOpacity,
    Image,
    View,
    Dimensions,
    FlatList,
    StatusBar
} from 'react-native';
import * as Constants from './Constants'
import { scale, verticalScale } from 'react-native-size-matters-ch';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import _Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Icon2 from 'react-native-vector-icons/AntDesign'

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
//import Images from '../Contants/Images'
const { width, height } = Dimensions.get('window');
const color = '#7eab9b';


export default class Favorites extends React.Component {


    componentDidMount() {
        Dimensions.addEventListener('change', ({ window }) => {
            const new_width = window.width
            const new_height = window.height
            // const arr = this.state.persons.fill(1).map((_, index) => index + 1)
            this.setState({
                Width: new_width,
                Height: new_height,
                // persons: arr

            })

        });



    }


    constructor(props) {
        super(props)

        {
            this.state = {
                Width: width,
                Height: height,
                left_w: 60,
                height_b: 60,
                persons: [
                    {
                        id: 5,
                        name: 'د.سارة احمد',
                        img: require('../assets/Image/images.jpg'),
                        location: '',
                        about: '....و.......',
                        fav: false,
                        select: false,
                        rate: 4,
                        exist: true
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
                    backgroundColor={Constants.statusBar.backgroundColor} />
                <View style={{
                    width: '100%',
                    height: 115,
                    backgroundColor: 'white',
                }}>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            borderBottomLeftRadius: 35,
                            backgroundColor: color,
                            padding: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                        <Animatable.Text animation={'zoomIn'}
                            style={{
                                color: '#fff',
                                fontSize: Constants.fonts.mainFontSize,
                                fontFamily: Constants.fonts.fontFamily,
                                marginRight: 5
                            }}>المفضلين</Animatable.Text>
                        <Icon2
                            name="heart"
                            size={24}
                            color={'red'} />
                    </View>
                </View>
                <View style={{
                    height: height,
                    width: '100%',
                    backgroundColor: color,
                }}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        borderTopRightRadius: 35,
                        backgroundColor: 'white',
                        paddingTop: 35,
                    }}>
                        {
                            this.state.persons.length != 0 ?
                                (
                                    <FlatList
                                        data={this.state.persons}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <Animatable.View
                                                    delay={100 * (index + 1)}
                                                    animation={'flipInX'}
                                                    easing={'ease-in-cubic'}
                                                    style={{
                                                        width: '90%',
                                                        height: scale(95),
                                                        //backgroundColor:'#dfeeec',
                                                        marginBottom: 15,
                                                        alignSelf: 'center',
                                                        flexDirection: 'row',
                                                        borderRadius: 10
                                                    }}>

                                                    <View style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#a1bdb33d',
                                                        alignSelf: 'center',
                                                        borderRadius: 20,
                                                        flexDirection: 'row'
                                                    }}>

                                                        <TouchableOpacity style={{
                                                            width: '85%',
                                                            height: '100%',
                                                            flexDirection: 'row'
                                                        }}>

                                                            <Image
                                                                source={item.img}
                                                                style={{
                                                                    width: '35%',
                                                                    height: '100%',
                                                                    borderTopLeftRadius: 30,
                                                                    alignItems: 'flex-start',
                                                                }}
                                                                resizeMode='stretch'
                                                            />


                                                            <View>

                                                                <Text style={{
                                                                    fontSize: 18,
                                                                    marginLeft: 10,
                                                                    marginTop: 5,
                                                                    color: '#040e46',
                                                                    fontFamily: Constants.fonts.fontFamily3
                                                                }}>
                                                                    {item.name}
                                                                </Text>


                                                                <View style={{ flexDirection: 'row', margin: 8, alignItems: 'center' }}>
                                                                    <Text style={{ marginRight: 3, color: '#040e46', }}>{item.rate}</Text>
                                                                    {
                                                                        item.rate < 1 ?
                                                                            <Icon1 name='star-half-alt'
                                                                                size={14} color='#f59b16ab' /> :
                                                                            <Icon2 name={'star'}
                                                                                size={16} color='#f59b16ab' />}

                                                                    <Icon2 name={item.rate >= 1 ? 'star' : 'staro'}
                                                                        size={16} color={item.rate > 1 ? '#f59b16ab' : 'gray'} />


                                                                    <Icon2 name={item.rate > 2 ? 'star' : 'staro'}
                                                                        size={16} color={item.rate > 2 ? '#f59b16ab' : 'gray'} />


                                                                    <Icon2 name={item.rate > 3 ? 'star' : 'staro'}
                                                                        size={16} color={item.rate > 3 ? '#f59b16ab' : 'gray'} />
                                                                </View>
                                                            </View>

                                                        </TouchableOpacity>
                                                        {
                                                            <TouchableOpacity style={{ width: 40, height: 40, }}
                                                                onPress={() => {
                                                                    let arr = this.state.persons
                                                                    arr.splice(index, 1)
                                                                    this.setState({ persons: arr })
                                                                }}

                                                            >

                                                                <Icon1 name='times' color='gray'
                                                                    size={20} style={{ margin: 5 }} />
                                                            </TouchableOpacity>

                                                        }

                                                    </View>



                                                </Animatable.View>


                                            )
                                        }}
                                    />
                                )
                                :
                                <>
                                    <Image
                                        style={{ width: 240, height: 240, marginTop: scale(80), alignSelf: 'center' }}
                                        source={require('../assets/Image/f.png')}
                                        resizeMode='stretch'
                                    />

                                    <Text style={{
                                        alignSelf: 'center',
                                        fontSize: 20,
                                        color: Constants.fonts.mainColor,
                                        fontFamily: Constants.fonts.fontFamily,
                                        marginTop: 20
                                    }}
                                    >لا يوجد محتوى  :(</Text>
                                </>
                        }

                    </View>
                </View>
            </View>

        )
    }

}

