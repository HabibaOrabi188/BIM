import * as React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid
} from 'react-native';
const color = '#7eab9b';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
import * as Animatable from 'react-native-animatable'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Constants from '../constants/Constants'
export default class Help_and extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opinioon: '',
    };
  }
  notifyMessage(msg) {
    ToastAndroid.showWithGravityAndOffset(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
}
  // post_data() {
  //   data_to_send = {user_name: this.state.opinioon};
  //   axios
  //     .post(
  //       'https://esraatarek.000webhostapp.com/attends/SignUp%20(1).php',
  //       data_to_send,
  //     )
  //     .then(res => {
  //       if (res.status == 200) {
  //         console.log(res.data);
  //         this.setState({id: res.data});
  //       }
  //     });
  // }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Constants.statusBar.backgroundColor}
        />
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <View
            style={[
              Constants.header.headerStyle,
              {
                marginBottom: 40
              },
            ]}>
            <View style={{
              width: width * .1,
            }}></View>
            <View style={{ width: width * .7, alignItems: 'center' }}>
              <Animatable.Text animation={'zoomIn'}
                style={{
                  color: Constants.fonts.mainColor,
                  fontSize: Constants.fonts.mainFontSize,
                  fontFamily: Constants.fonts.fontFamily
                }}>الإقتراحات</Animatable.Text>
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
          <View style={styles.TextInput_style}>
            <TextInput
              style={{
                fontSize: Constants.search.textInputStyle.fontSize,
                fontFamily: Constants.search.textInputStyle.fontFamily,
                color: Constants.search.textInputStyle.color,
              }}
              placeholder="  ادخل إقتراحك .."
              placeholderTextColor={'#756e6e'}
              multiline={true}
              value={this.state.opinioon}
              onChangeText={value => {
                this.setState({ opinioon: value });
              }}
            />
          </View>
          <TouchableOpacity
           onPress={() => { this.notifyMessage('تم إرسال إقتراحك بنجاح .') }}
            style={[
              Constants.touchableOpacityStyle,
              {
                backgroundColor: '#7eab9b',
                marginTop: 45,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              },
            ]}>
            <Text
              style={[Constants.fonts,
              {
                color: Constants.fonts.secondaryColor,
                fontSize: Constants.fonts.mainFontSize,
              }
              ]}>
              إرسال
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  TextInput_style: {
    padding: 7,
    width: Constants.search.textInputStyle.width,
    backgroundColor: '#dfeeec',
    borderRadius: 15,
    alignSelf: 'center',

    height: height * 0.3,
  },
});
