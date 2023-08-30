import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { Provider as PaperProvider } from 'react-native-paper';
import AddUser from './pages/AddUser'
import Home from './pages/Home'
import About from './pages/About'
import Map from './pages/Map'
import Help_and from './pages/Help_and'
import Categories from './pages/Categories'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Forget from './pages/Forget'
import Myaccount from './pages/Myaccount'
import TeachersCategories from './pages/TeachersCategories'
import Medical_categories from './pages/Medical_categories'
import Engineers_categories from './pages/Engineers_categories'
import Edit_profile from './pages/Edit_profile'
import Favorites from './pages/Favorites'
import Opinion from './pages/Opinion'
import Recet_pass from './pages/Recet_pass'
import NewPassword from './pages/NewPassword'
import Search_page from './pages/Search_page'
import Inrtoo from './pages/Introo'
import Verfication_code from './pages/Verfication_code'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const theme = { colors: { primary: '#3498db', accent: '#f1c40f', }, };
const size = 28;


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Intro() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Inrtoo} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="Verify" component={Verfication_code} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Taps" component={MyTaps} />
    </Stack.Navigator>
  )
}

function HomeDetails() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Medical" component={Medical_categories} />
      <Stack.Screen name="Engineers" component={Engineers_categories} />
      <Stack.Screen name="Teachers" component={TeachersCategories} />
      <Stack.Screen name="Search" component={Search_page} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  )
}
function AccountDetails() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Account">
      <Stack.Screen name="Account" component={Myaccount} />
      <Stack.Screen name="Profile" component={Edit_profile} />
      <Stack.Screen name="NewPassword" component={Recet_pass} />
      <Stack.Screen name="Help" component={Help_and} />
      <Stack.Screen name="Opinion" component={Opinion} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  )
}

function MyTaps() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: '#7eab9b',
        tabBarInactiveTintColor: '#c3cfcc',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 8,
          right: 16,
          left: 16,
          borderRadius: 18,
        }
      }}
    >

      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View >
              <FontAwesome5
                name='home'
                size={size}
                color={color} />
            </View>
          ),
        }}
        name='Home' component={HomeDetails} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon2
                name="heart"
                size={size}
                color={color} />
            </View>
          ),
        }}
        name='Favorite' component={Favorites} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon
                name="user-circle-o"
                size={size}
                color={color} />
            </View>
          ),
        }}
        name='Account' component={AccountDetails} />

    </Tab.Navigator>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }




  render() {

    return (
      <>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }} initialRouteName="Intro">
              {/* <Stack.Screen name="Intro" component={Intro} /> */}
              <Stack.Screen name="MyTaps" component={MyTaps} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>

        {/* <Recet_pass/> */}
      </>
    )
  }
}





