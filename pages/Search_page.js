import React from 'react';
import {
    NativeModules,
    Text,
    TouchableOpacity,
    Image,
    View,
    Dimensions,
    TextInput,
    FlatList,
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters-ch';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Constants from '../constants/Constants'
import * as Animatable from 'react-native-animatable'
import Icon1 from 'react-native-vector-icons/FontAwesome5';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
const { width, height } = Dimensions.get('window');




export default class Search_page extends React.Component {
    componentDidMount() {
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
                left_w: 60,
                height_b: 60,
                persons: [
                    {
                        id: 1,
                        name: 'د.محمد اسلام',
                        img: require('../assets/Image/download.jpg'),
                        location: '',
                        about: '....د.....',
                        fav: false,
                        select: false,
                        rate: 4,
                        exist: true
                    },
                    {
                        id: 2,
                        name: 'د.ندى احمد',
                        img: require('../assets/Image/images.jpg'),
                        location: '',
                        about: '....و.......',
                        fav: false,
                        select: false,
                        rate: 3.3,
                        exist: true
                    },
                    {
                        id: 3,
                        name: 'د.اسلام محمد',
                        img: require('../assets/Image/images(1).jpg'),
                        location: '',
                        about: '.......و.......',
                        fav: false,
                        select: false,
                        rate: 2.5,
                        exist: true
                    },
                    {
                        id: 4,
                        name: 'د.نادر احمد',
                        img: require('../assets/Image/download.jpg'),
                        location: '',
                        about: '.....د.......',
                        fav: false,
                        select: false,
                        rate: .77,
                        exist: true
                    },
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
                    {
                        id: 6,
                        name: 'د.احمد محمد',
                        img: require('../assets/Image/images(1).jpg'),
                        location: '',
                        about: '.......و.......',
                        fav: false,
                        select: false,
                        rate: 2.5,
                        exist: true
                    },

                ],
                Fav_persons: [],

                Tap1: [
                    {
                        titlt: 'الكل',
                        value: true
                    },
                    {
                        titlt: 'المفضلين',
                        value: false
                    },
                ],
                TopTab_press: 0,
                search_val: '',
                categori: '',
                x: 0
            }
        }
    }
    Add_to_fav(index) {
        let arr = this.state.persons
        let fav_arr = this.state.Fav_persons
        let obj = {
            id: arr[index].id,
            name: arr[index].name,
            img: arr[index].img,
            location: arr[index].location,
            about: arr[index].about,
            fav: arr[index].fav,
            select: arr[index].select,
            rate: arr[index].rate,
            exist: true
        }
        if (arr[index].fav) {
            fav_arr.push(obj)
        }
        else {
            for (let i = 0; i < fav_arr.length; i++) {
                if (arr[i].fav == obj.fav)
                    fav_arr.splice(i, 1)
            }
        }
    }

    componentDidMount() {
        this.common()
    }

    common() {
        let arr = this.state.persons
        let old_arr = []
        let common_arr = []

        for (let i = 0; i < arr.length; i++) {
            let x = arr[i]
            old_arr.splice(i, 0, x)
        }

        for (let i = 0; i < arr.length; i++) {
            let x = arr[i]
            let temp
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j].rate >= x.rate) {
                    temp = x
                    x = arr[j]
                    arr[j] = temp

                }
            }
            common_arr.push(x)
        }
        this.setState({ persons: common_arr })

    }


    Search(value) {
        let arr = this.state.persons
        let found = false
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].name.includes(value)) {
                arr[i].exist = true
                found = true
            }
            else {
                arr[i].exist = false
            }
        }
        this.setState({ persons:arr })

    }


    // FlatList_body(item, index) {
    //     return (

    //     )
    // }


    render() {
        const { person } = this.props.route.params;
        const { icon } = this.props.route.params;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View
                    style={[Constants.header.headerStyle, { justifyContent: 'space-between', height: height * .14 }]}>
                     <View style={{ width: width * .1, alignItems: 'center' }}>
                    {icon=='engineering'?
                    <Icon3 name={icon} size={30} color='#7eab9b' />:
                    <Icon name={icon} size={30} color='#7eab9b' />
                    }
                    </View>
                    <Animatable.View
                        animation={'zoomIn'}
                        style={{
                            width: width * .7,
                            alignItems:'center'
                        }}>
                        <Text style={{
                            fontSize:24,
                            fontFamily:Constants.fonts.fontFamily,
                            color: Constants.fonts.mainColor,
                        }}>{person.title}</Text>
                    </Animatable.View>
                    <View style={{ width: width * .1, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}>
                        <Ionicons name="arrow-undo" color={'#7eab9b'} size={24} />
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={[Constants.search.searchViewStyle, { alignSelf: 'center', backgroundColor: "#E9EFF3", }]}>
                    <Icon name="search" color={'gray'} size={18}
                        style={{
                            marginRight: 5
                        }} />
                    <TextInput
                        style={[Constants.search.textInputStyle, { backgroundColor: "#E9EFF3", }]}
                        placeholderTextColor={"gray"}
                        placeholder="بحث"
                        value={this.state.search_key}
                        onChangeText={value => {
                            this.setState({ search_val: value })
                            this.Search(value)
                        }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    justifyContent: 'space-around',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    marginRight: 10

                }}>
                    {
                        this.state.Tap1.map((tab, index) => (
                            <TouchableOpacity style={{
                                width: verticalScale(100),
                                height: scale(45),
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                                onPress={() => {
                                    let arr = this.state.Tap1
                                    for (let i = 0; i < arr.length; i++) {
                                        if (i != index)
                                            arr[i].value = false
                                    }
                                    arr[index].value = true
                                    this.setState({ TopTab_press: index, Tap1: arr, common: true })
                                    if (index == 0) {
                                        this.common()
                                    }
                                }}
                            >
                                <Text style={{ 
                                color:Constants.fonts.mainColor,
                                 fontSize: Constants.fonts.fontSize_18, 
                                 
                                 fontFamily: tab.value ? Constants.fonts.fontFamily2 : Constants.fonts.fontFamily3 
                                 }}>
                                    {tab.titlt}</Text>
                                {
                                    tab.value ?
                                        <View style={{
                                            width: tab.titlt.length > 5 ? '100%' : '70%',
                                            height: 1,
                                            backgroundColor: '#040e46',
                                            marginTop: 2
                                        }}>



                                        </View>
                                        :
                                        null
                                }
                            </TouchableOpacity>
                        )
                        )
                    }


                </View>


                {
                    //       persoooooooooooooooooooooooooooooooooooooooooons
                }

                <View style={{ width: '100%', height: '80%', }}>

                    {

                            this.state.TopTab_press == 0 ?
                                <FlatList
                                    data={this.state.persons}
                                    style={{ marginBottom: 140 }}
                                    renderItem={({ item, index }) => {
                                        return (

                                            item.exist == true ?
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
                                                        borderRadius: 20
                                                    }}>




                                                    <View style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: '#a1bdb33d',
                                                        alignSelf: 'center',
                                                        borderRadius: 20,
                                                        flexDirection: 'row'
                                                    }}>

                                                        <TouchableOpacity
                                                            onPress={() => {
                                                                this.setState({ categori: person.title })
                                                                this.props.navigation.navigate('About', { person: item, categori: this.state.categori })
                                                            }}
                                                            style={{
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
                                                                    fontSize: Constants.fonts.fontSize_18,
                                                                    marginLeft: 10,
                                                                    marginTop: 5,
                                                                    color:Constants.fonts.mainColor,
                                                                    fontFamily:Constants.fonts.fontFamily3

                                                                }}>
                                                                    {item.name}
                                                                </Text>


                                                                <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
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
                                                            <TouchableOpacity style={{ width: 50, height: 50, alignItems: 'flex-start' }}
                                                                onPress={() => {
                                                                    let x = this.state.x
                                                                    x++
                                                                    this.setState({ x: x })
                                                                    let arr = this.state.persons
                                                                    let obj = {
                                                                        id: item.id,
                                                                        name: item.name,
                                                                        img: item.img,
                                                                        location: item.location,
                                                                        about: item.about,
                                                                        fav: !item.fav,
                                                                        select: item.select,
                                                                        rate: item.rate,
                                                                        exist: true
                                                                    }
                                                                    for (let i = 0; i < arr.length; i++) {
                                                                        if (i == index) {
                                                                            arr.splice(i, 1, obj)
                                                                        }
                                                                    }
                                                                    this.setState({ persons: arr })
                                                                    this.Add_to_fav(index)
                                                                }}

                                                            >

                                                                <Icon name={item.fav ? 'heart' : 'heart-o'} color={item.fav ? '#b32f26' : 'gray'}
                                                                    size={24} style={{ margin: 10 }} />
                                                            </TouchableOpacity>

                                                        }

                                                    </View>


                                                </Animatable.View>
                                                : null
                                        )
                                    }}

                                /> :
                                this.state.TopTab_press == 1 && this.state.x > 0 ?
                                    <FlatList
                                        data={this.state.persons}
                                        style={{ marginBottom: 140 }}
                                        renderItem={({ item, index }) => {
                                            return (
                                                item.fav == 1 ?
                                                    (
                                                        <View
                                                            delay={1000 * (index + 1)}
                                                            animation={'flipInX'}
                                                            easing={'ease-in-cubic'} style={{
                                                                width: '90%',
                                                                height: scale(95),
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

                                                                <TouchableOpacity
                                                                    onPress={() => {
                                                                        this.setState({ categori: person.title })
                                                                        this.props.navigation.navigate('About', { person: item, categori: this.state.categori })
                                                                    }}
                                                                    style={{
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
                                                                            fontSize: Constants.fonts.fontSize_18,
                                                                            marginLeft: 10,
                                                                            marginTop: 5,
                                                                            color:Constants.fonts.mainColor,
                                                                            fontFamily:Constants.fonts.fontFamily3

                                                                        }}>
                                                                            {item.name}
                                                                        </Text>


                                                                        <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
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
                                                                    <TouchableOpacity style={{ width: 50, height: 50, alignItems: 'flex-start' }}
                                                                        onPress={() => {
                                                                            let x = this.state.x
                                                                            x--
                                                                            this.setState({ x: x })
                                                                            let arr = this.state.persons
                                                                            let obj = {
                                                                                id: item.id,
                                                                                name: item.name,
                                                                                img: item.img,
                                                                                location: item.location,
                                                                                about: item.about,
                                                                                fav: !item.fav,
                                                                                select: item.select,
                                                                                rate: item.rate,
                                                                                exist: true
                                                                            }
                                                                            for (let i = 0; i < arr.length; i++) {
                                                                                if (i == index) {
                                                                                    arr.splice(i, 1, obj)
                                                                                }
                                                                            }
                                                                            this.setState({ persons: arr })
                                                                            this.Add_to_fav(index)
                                                                        }}

                                                                    >

                                                                        <Icon name={item.fav ? 'heart' : 'heart-o'} color={item.fav ? '#b32f26' : 'gray'}
                                                                            size={24} style={{ margin: 10 }} />
                                                                    </TouchableOpacity>

                                                                }

                                                            </View>


                                                        </View>

                                                    ) : null
                                            )
                                        }} /> :
                                    <>
                                        <Image
                                            style={{ width: 240, height: 240, marginTop: scale(80), alignSelf: 'center' }}
                                            source={require('../assets/Image/f.png')}
                                            resizeMode='stretch'
                                        />

                                        <Text style={{
                                            alignSelf: 'center',
                                            fontSize: Constants.fonts.fontSize_20,
                                            color:Constants.fonts.mainColor,
                                            fontFamily:Constants.fonts.fontFamily,
                                            marginTop: 20
                                        }}
                                        >لا يوجد محتوى  :(</Text>
                                    </>
                    }


                </View >

            </View >

        )
    }
}



                                            //             :

