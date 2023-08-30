import * as React from "react"
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    ToastAndroid,
} from "react-native"
const color = '#7eab9b'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import validator from 'validator'
const { width, height } = Dimensions.get('screen')
import PhoneInput from "react-native-phone-number-input";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts, touchableOpacityStyle, Colors, icons } from "../constants/Constants"
export default class Forget extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_phone: '',
            error_phone: '',
        }
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
    validatePhoneNumber = (number) => {
        const isValidPhoneNumber = validator.isMobilePhone(number)
        return (isValidPhoneNumber)
    }
    handleFocus = () => this.setState({ isFocused: true });

    handleBlur = () => this.setState({ isFocused: false });
    render() {

        return (
            <View style={styles.view_continer}>
                <StatusBar backgroundColor='#fff' />
                <View style={{
                    height: height * 0.1,
                    width: width,
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingHorizontal: width * .05,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{ width: width * .73 }}></View>
                    <View style={{ width: width * .1, alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack()
                            }}>
                            <Ionicons name="arrow-undo" color={'#7eab9b'} size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: '44%', alignItems: 'center', justifyContent: 'center' ,marginTop:-30}}>
                    <Image
                        source={require('../assets/Image/forget.png')}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="contain"
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                    }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Text
                            style={styles.text1}>
                            هل نسيت كلمة المرور
                        </Text>
                        <Text
                            style={styles.text2}>
                            الرجاء ادخال رقم الهاتف الخاص بك لارسال كود التاكيد
                        </Text>
                        <View
                            style={{
                                width: '90%',
                                height: 40,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: 30,
                                borderBottomWidth: 1.5,
                                borderBottomColor: this.state.isFocused && this.state.user_phone != ''
                                    ? color
                                    : '#eee',
                            }}>
                            <PhoneInput
                                ref={this.state.phoneInput}
                                placeholder='Phone number'
                                defaultValue={this.state.user_phone}
                                defaultCode='EG'
                                // layout="first"
                                onChangeText={(phone) => {
                                    this.setState({ user_phone: phone, isFocused: true })
                                    setTimeout(() => {
                                        if (this.state.user_phone == '') {
                                            this.setState({ checkphone: 0 });
                                        } else {
                                            this.setState({ checkphone: 1 });
                                        }
                                    }, 100);
                                    if (this.validatePhoneNumber(this.state.user_phone)) {
                                        this.setState({ error_phone: '' });
                                    } else {
                                        this.setState({ error_phone: 'رقم الهاتف غير صحيح !' })
                                    }
                                }}
                                onChangeFormattedText={(text) => {
                                    this.setState({ formattedValue: text })
                                }}
                                containerStyle={{
                                    width: '100%',
                                    height: 40,
                                    marginBottom: 2,
                                }}
                                codeTextStyle={{
                                    height: 20,
                                }}
                                flagButtonStyle={{
                                    width: 55
                                }}
                                textInputStyle={{
                                    width: '80%',
                                    height: 40,
                                }}
                                withDarkTheme
                                withShadow
                                autoFocus
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            />
                        </View>
                        {this.state.error_phone.length > 0 && (
                            <Text
                                style={{
                                    fontSize: fonts.fontSize_14,
                                    color: "#f00",
                                    fontFamily: fonts.fontFamily3,
                                    marginTop: 4,
                                    textAlign: "center"
                                }}>
                                {this.state.error_phone}
                            </Text>
                        )}
                        <TouchableOpacity style={[styles.touchableopicty2, { backgroundColor: this.state.user_phone == '' ? '#888' : color }]}
                            disabled={this.state.user_phone != '' ? false : true}
                            onPress={() => {
                                let phoneError = this.state.error_phone;
                                let phone = this.state.user_phone;
                                if (phone.length > 12) {
                                    phoneError = 'رقم الهاتف يجب ألا يزيد عن 12 رقم';
                                } else {
                                    this.props.navigation.navigate('Verify');
                                    this.notifyMessage(' تم إرسال كود التاكيد')
                                }

                                this.setState({
                                    error_phone: phoneError,
                                });

                            }}>
                            <Text
                                style={[styles.text1, { color: "#fff", }]}
                            >إرسال
                            </Text>

                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view_continer: {
        flex: height,
        backgroundColor: "#fff",
        paddingHorizontal: 14
    },
    text1: {
        fontSize: fonts.mainFontSize,
        fontFamily: fonts.fontFamily,
        color: fonts.mainColor,
        textAlign: 'center',
        marginBottom: 5,
    },
    text2: {
        fontSize: fonts.fontSize_18,
        fontFamily: fonts.fontFamily3,
        color: "gray",
        textAlign: 'center',
        marginBottom: 5,
    },
    touchableopicty2: {
        width: touchableOpacityStyle.width,
        height: 40,
        alignSelf: "center",
        marginTop: 60,
        borderRadius: touchableOpacityStyle.borderRadius,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },

})