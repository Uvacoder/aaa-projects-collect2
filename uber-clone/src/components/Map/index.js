import React, { useEffect, useState, useRef, Fragment } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import  Geocoder from 'react-native-geocoding';

import Search from '../Search';
import Directions from '../Directions';
import Detais from '../Details';
import { getPixelSize } from '../../utils';

import { LocationBox, LocationText, LocationTimeText, LocationTimeTextSmall, LocationTimeBox, Back } from './styles';
import markerImage from '../../assets/marker.png' 
import backImage from '../../assets/back.png' 

Geocoder.init('API_KEY');

function Map(){
  const [currentRegion, setCurrentRegion] = useState(null);
  const [destination, setDestination] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(null);

  let mapView = useRef(null)

  useEffect(() => {
    async function loadInitialPosition(){
     const { granted } = await requestPermissionsAsync();
     if(granted){
       const { coords } = await getCurrentPositionAsync({
         enableHighAccuracy: false //FALSE WIFI, TRUE GPS
       });
       const { latitude, longitude} = coords;
       const response = await Geocoder.from({latitude, longitude});
       const address = response.results[0].formatted_address;
       setCurrentLocation(address.substring(0, address.indexOf(',')));

       setCurrentRegion({
         latitude,
         longitude,
         latitudeDelta: 0.04,
         longitudeDelta: 0.04, 
       })
     }
    }
    loadInitialPosition();
  }, []);

  const handleBack = () => {
    setDestination(null);
  }

  const handleLocationSelected = (data, { geometry }) => {
    const { location: {lat: latitude, lng: longitude } } = geometry;
    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    })
  }
  if(!currentRegion){
    return null;
  }

  return (
    <View style={{flex: 1}} >
      <MapView 
        style={{ flex: 1}}
        initialRegion={currentRegion} 
        showsUserLocation
        loadingEnabled  
        ref={el => {mapView = el}}
      >
        { destination && (
          <>
            <Directions 
              origin={currentRegion}
              destination={destination}
              onReady={result => {
                mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: getPixelSize(50),
                    left: getPixelSize(50),
                    top: getPixelSize(50),
                    bottom: getPixelSize(350),
                  }
                });
                setDuration(Math.floor(result.duration));
              }}
              />
            <Marker 
              coordinate={destination}
              anchor={{ x: 0, y: 0 }}
              image={markerImage}
            >
              <LocationBox>
                <LocationText>{destination.title}</LocationText>
              </LocationBox>
            </Marker>

            <Marker 
              coordinate={currentRegion}
              anchor={{ x: 0, y: 0 }}
            >
              <LocationBox>
                <LocationTimeBox>
                  <LocationTimeText>{duration}</LocationTimeText>
                  <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                </LocationTimeBox>
                <LocationText>{currentLocation}</LocationText>
              </LocationBox>
            </Marker>
          </>
        )}
      </MapView>
      { destination ? (
        <Fragment>
          <Back onPress={handleBack}>
            <Image source={backImage} />
          </Back>
          <Detais />
        </Fragment>
      ) : <Search onLocationSelected={handleLocationSelected} />}
      
    </View>
  )
}
export default Map;