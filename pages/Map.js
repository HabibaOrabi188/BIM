import React from 'react';
import { StyleSheet, Text,TouchableOpacity ,Image} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { View } from 'react-native-animatable';
navigator.geolocation = require('@react-native-community/geolocation');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position:{
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      }
      ,mapSnapshot:{
        uri:''
      }
    };
  }
// const App = () => {
//   const [position, setPosition] = useState({
//     latitude: 10,
//     longitude: 10,
//     latitudeDelta: 0.001,
//     longitudeDelta: 0.001,
//   });

  // useEffect(() => {
  //   Geolocation.getCurrentPosition((pos) => {
  //     const crd = pos.coords;
  //     setPosition({
  //       latitude: crd.latitude,
  //       longitude: crd.longitude,
  //       latitudeDelta: 0.0421,
  //       longitudeDelta: 0.0421,
  //     });
  //   })
  // }, []);
  componentDidMount() { 
    Geolocation.getCurrentPosition((pos) => {
          const crd = pos.coords;
          let position={
            latitude: crd.latitude,
            longitude: crd.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          }
          this.setState({ position : position});
        })
  }

render() {
  return (
    <>
    <MapView
      style={styles.map}
      initialRegion={this.state.position}
      showsUserLocation={true}
      showsMyLocationButton={true}
      followsUserLocation={true}
      showsCompass={true}
      scrollEnabled={true}
      zoomEnabled={true}
      pitchEnabled={true}
      rotateEnabled={true}>
       <Marker
       title='Yor are here'
       description='This is a description'
       coordinate={this.state.position}/>
       </MapView>
</>
  );
};
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
