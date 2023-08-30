
import *as React from 'react';
import { StatusBar, View,Image,Text } from "react-native"
import * as Constants from '../constants/Constants'
export default class Splash extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        let home = 1
        setTimeout(() => {
            if (home == 1) {
                this.props.navigation.navigate('Intro')
            } else {
                // this.props.navigation.navigate('')
            }
        }, 3300)
    }

    render() {
        return (
            <>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#7eab9b'}}>
                    <StatusBar backgroundColor='#7eab9b' />
                    {/* <LottieView
                    source={require('../photos/114386-welcome.json')}
                    autoPlay                
                /> */}
                    <Image
                        source={require('../assets/Image/sp7.png')}
                        style={{ width: '85%', height: '50%' }}
                        resizeMode="contain"
                    />
                    <Text style={{
                        fontSize:34,
                        fontFamily:Constants.fonts.fontFamily,
                        textAlign:'center',
                        color:'white',
                        marginTop:15,
                        }} >Provide You Best Service</Text>
                </View>
            </>
        )
    }
}