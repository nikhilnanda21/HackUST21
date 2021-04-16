import 'styles/Map.css';

import React, { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from 'react';

import { IconButton, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';

import GoogleMapReact, { Coords } from 'google-map-react';
import { setMapCenter, setNotification, setMapZoom, setMapMarker } from 'models';
import { selectCurrentMapMarker, selectCurrentMapPos } from 'models/selectors';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const RecyclingContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
  display: flex;
  width: calc(100% - 16px);
  justify-content: center;
`;

const CurrentLocation: FC<Coords> = () => (
  <div className="dot med">
    <span className="point">
      <span className="pulse" />
    </span>
  </div>
);

const MapMarker: FC<Coords> = () => <div className="marker" />;

const RecyclingOptions: FC = () => {
  const dispatch = useDispatch();
  const options = useMemo(
    () => [
      { label: 'Cardboard' },
      { label: 'Metal' },
      { label: 'Plastic' },
      { label: 'Glass' },
      { label: 'Trash' },
    ],
    [],
  );

  const onChange = useCallback((e: ChangeEvent<{}>, value: any) => {
    console.log(value?.label ?? null);
  }, []);

  const onSearch = useCallback(() => {
    dispatch(
      setMapCenter({
        lat: 22.3251,
        lng: 114.2562,
      }),
    );
    dispatch(
      setMapMarker({
        lat: 22.3251,
        lng: 114.2562,
      }),
    );
    dispatch(setMapZoom(17));
  }, [dispatch]);

  return (
    <RecyclingContainer>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => (option as any).label}
        style={{ width: 300 }}
        onChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Recycling Options"
            variant="outlined"
            size="small"
            style={{ backgroundColor: 'white', marginRight: 4 }}
          />
        )}
      />
      <IconButton style={{ padding: 8 }} onClick={onSearch}>
        <Search />
      </IconButton>
    </RecyclingContainer>
  );
};

const Map: FC = () => {
  const dispatch = useDispatch();
  const mapPos = useSelector(selectCurrentMapPos);
  const mapMarker = useSelector(selectCurrentMapMarker);
  console.log({ mapMarker });
  const [center, setCenter] = useState<Coords>(mapPos.center);
  // eslint-disable-next-line no-undef
  const positionCallback: PositionCallback = useCallback(
    (position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      setCenter({ lat: latitude, lng: longitude });
      dispatch(setMapCenter({ lat: latitude, lng: longitude }));
    },
    [dispatch],
  );

  useEffect(() => {
    // Get Current Location
    const getLocation = () => {
      if (navigator.geolocation) {
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
      <RecyclingOptions />
      <GoogleMapReact
        {...mapPos}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY as string }}
        options={{ fullscreenControl: false }}
      >
        <CurrentLocation {...center} />
        {mapMarker && <MapMarker {...mapMarker} />}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
