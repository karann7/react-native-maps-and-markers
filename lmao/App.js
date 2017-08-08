import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let { map, marker, radius } = styles;
    return (
      <MapView
        style={map}
        initialRegion={{
          latitude: 38.535913,
          longitude: -121.485651,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          coordinate={{
            latitude: 38.535913,
            longitude: -121.485651,
          }}>
              <View style={radius}>
                <View style={marker} />
              </View>
              <MapView.Callout onPress={() => console.log('boop!')}>
                <Text>Press meeee</Text>
                </MapView.Callout>
        </MapView.Marker>
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
});
