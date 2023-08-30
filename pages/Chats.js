
import *as React from 'react';
import { StatusBar, View, Image, Text } from "react-native"
import * as Constants from './Constants'
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
                // this.props.navigation.navigate('')
            } else {
                // this.props.navigation.navigate('')
            }
        }, 3300)
    }

    render() {
        return (
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#7eab9b' }}>
                    <StatusBar backgroundColor='#7eab9b' />
                </View>
            </>
        )
    }
}