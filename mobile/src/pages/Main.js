import React, { useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import Mapview, { Marker } from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from 'expo-location';

// import { Container } from './styles';
function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const coords = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        const { latitude, longitude } = coords.coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) return null;

  return (
    <Mapview initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -30.0446599, longitude: -51.2108403 }} />
      {/* <Image
          stle={styles.avatar}
          source={{
            uri: 'https://avatars0.githubusercontent.com/u/30526312?s=460&v=4'
          }}
        />
      </Marker> */}
    </Mapview>
  );
}
const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFFFFF'
  }
});
export default Main;
