import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  PermissionsAndroid,
  ToastAndroid
} from 'react-native';
const color = '#7eab9b';
import { Dimensions } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
const { width, height } = Dimensions.get('screen');
import * as Constants from './Constants'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Constant from './Constants';
import * as Animatable from 'react-native-animatable'
import ActionSheet from 'react-native-actionsheet';
import * as ImagePicker from 'react-native-image-picker';
export default class Edit_profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      x: false,
      photo_uri: '',
      photo_data: '',
      name: '',
      phone: '',
    };
  }
  componentDidMount() {
    this.requestCameraPermission();
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  selectFromGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary({ options, includeBase64: true }, res => {
      // console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        this.setState({
          photo_data: res.assets[0],
          photo_uri: res.assets[0].uri,
        });
      }
    });
  };

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        this.setState({
          photo_data: res.assets[0],
          photo_uri: res.assets[0].uri,
        });
      }
    });
  };
  notifyMessage(msg) {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Constant.statusBar.backgroundColor}
        />
        <View style={[Constant.container]}>
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
                style={[Constants.fonts,
                {
                  color: Constants.fonts.mainColor,
                  fontSize: Constants.fonts.mainFontSize,
                }
                ]}>الملف الشخصي</Animatable.Text>
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
          <View style={styles.top_view_picture}>
            {this.state.photo_uri == '' ? (
              <TouchableOpacity
                onPress={() =>
                  this.RBSheet.open()
                }
                style={styles.view_picture}>
                <Icon
                  name={'user-circle-o'}
                  size={150}
                  color={color} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.view_picture}>
                <Image
                  source={{ uri: this.state.photo_uri }}
                  style={styles.image_style}
                />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={styles.view_plus}
            onPress={() => {
              this.RBSheet.open();
            }}>
            <Icon
              name={'plus'}
              size={16}
              color={"white"}
              style={{ alignSelf: 'center' }}
            />
          </TouchableOpacity>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={140}
            closeOnDragDown={true}
            closeOnPressMask={true}
            openDuration={200}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
              },
              draggableIcon: {
                backgroundColor: Constants.fonts.mainColor,
                marginTop: -12
              }
            }}>
            <View style={{
              width: width,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
              <TouchableOpacity
                onPress={() => {
                  this.selectFromGallery()
                  this.RBSheet.close()

                }}>
                <Image source={require('../assets/Image/g.png')}
                  style={{ height: 80, width: 80 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.launchCamera()
                  this.RBSheet.close()
                }}>
                <Image source={{ uri: 'https://img.freepik.com/premium-vector/photo-presentation-photo-camera-playback-photo-slides-lens-isolated-vector-render-illustration_660702-131.jpg?w=740' }}
                  style={{ height: 80, width: 80 }}
                />
              </TouchableOpacity>
            </View>
          </RBSheet>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginBottom: 50, marginTop: 40 }}>
            <View style={{ alignItems: 'center', height: height * .6, width: '100%', }}>
              <View style={styles.view_text_input}>
                <Icon
                  name={'user-circle-o'}
                  size={22}
                  color={color}
                  style={styles.icon_text_input}
                />

                <TextInput
                  placeholder="الإسم"
                  color={Constants.fonts.mainColor}
                  placeholderTextColor={'#756e6e'}
                  value={this.state.name}
                  onChangeText={value => {
                    this.setState({ name: value.trim(), x: true });
                  }}
                  style={styles.text_input}
                />
              </View>
              <View style={styles.view_text_input}>
                <Icon1
                  name={'phone-alt'}
                  size={22}
                  color={color}
                  style={styles.icon_text_input}
                />
                <TextInput
                  placeholder="الرقم "
                  color={Constants.fonts.mainColor}
                  placeholderTextColor={'#756e6e'}
                  keyboardType='number-pad'
                  value={this.state.phone}
                  onChangeText={value => {
                    this.setState({ phone: value.trim(), x: true });
                  }}
                  style={styles.text_input}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.notifyMessage('تم التعديل بنجاح .')
                  this.props.navigation.goBack()
                }}
                style={[
                  Constant.touchableOpacityStyle,
                  {
                    backgroundColor: '#7eab9b',
                    marginTop: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Text style={{ fontSize: Constants.fonts.mainFontSize, color: 'white', fontFamily: Constants.fonts.fontFamily }}>
                  تعديل
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  top_view_picture: {
    height: height * 0.24,
    width: width * 0.51,
    marginTop: -50,
    borderRadius: 93,
    borderWidth: 2,
    borderColor: '#7eab9b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_picture: {
    // backgroundColor: '#7eab9b',
    height: height * 0.21,
    width: width * 0.44,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_style: {
    height: '100%',
    width: '100%',
    borderRadius: 95,
  },
  view_plus: {
    backgroundColor: '#7eab9b',
    marginTop: -42,
    marginLeft: 128,
    height: height * 0.05,
    width: width * 0.11,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
  },
  view_text_input: {
    height: height * 0.065,
    width: Constant.search.textInputStyle.width,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#7eab9b',
    marginBottom: 5,
    marginTop: 20,
    borderRadius: 15,
  },
  text_input: {
    width: '86%', marginRight: 20, marginLeft: 5,
    color: Constant.fonts.mainColor, fontFamily: Constants.fonts.fontFamily,
    fontSize: 16
  },
  icon_text_input: {
    height: height * 0.03,
    width: width * 0.08,
    marginLeft: 5,
  },
});
