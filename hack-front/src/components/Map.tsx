import 'styles/Map.css';

import React, { FC, useCallback, useEffect, useState } from 'react';

import GoogleMapReact, { Coords } from 'google-map-react';
import { setNotification } from 'models';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const CurrentLocation: FC<Coords> = () => (
  <div className="dot med">
    <span className="point">
      <span className="pulse" />
    </span>
  </div>
);

const Map: FC = () => {
  const dispatch = useDispatch();
  const [mapState, setMapState] = useState({
    center: {
      lat: 22.3193,
      lng: 114.1694,
    },
    zoom: 11,
  });
  const [center, setCenter] = useState(mapState.center);

  // eslint-disable-next-line no-undef
  const positionCallback: PositionCallback = useCallback((position: GeolocationPosition) => {
    const {
      coords: { latitude, longitude },
    } = position;
    setCenter({ lat: latitude, lng: longitude });
  }, []);

  useEffect(() => {
    // Get Current Location
    const getLocation = () => {
      if (navigator.geolocation) {
        console.log('navigator.geolocation');
        navigator.geolocation.getCurrentPosition(positionCallback, (positionError) => {
          dispatch(
            setNotification({
              message: positionError.message,
              severity: 'error',
            }),
          );
        });
      } else {
        dispatch(
          setNotification({
            message: 'GeoLocation not supported, falling back to mock data',
            severity: 'info',
          }),
        );
      }
    };
    getLocation();
  }, []);

  return (
    <MapContainer>
      <GoogleMapReact
        defaultCenter={mapState.center}
        center={center}
        defaultZoom={mapState.zoom}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY as string }}
      >
        <CurrentLocation {...center} />
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
