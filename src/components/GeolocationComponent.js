import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {PermissionsAndroid} from 'react-native';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'My App Location Permission',
        message:
          'This App needs access to your Location ' +
          'so that we get your live loation',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
export default class GeolocationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    requestLocationPermission();
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  setLocation(){
      setLocation
  }

  render() {
    return (
      <View style={{alignItems: 'center',  }}>
        <Text style={styles.textStyle}>Latitude: {this.state.latitude}</Text>
        <Text style={styles.textStyle} >Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    textStyle : {
        color:'#fff',
        fontSize:14
    }
})