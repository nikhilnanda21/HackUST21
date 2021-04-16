import React, { FC, useState } from 'react';

import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Map: FC = () => {
  const [mapState, setMapState] = useState({
    center: {
      lat: 22.3193,
      lng: 114.1694,
    },
    zoom: 11,
  });

  return (
    <MapContainer>
      <GoogleMapReact
        defaultCenter={mapState.center}
        defaultZoom={mapState.zoom}
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY as string }}
      />
    </MapContainer>
  );
};

export default Map;
