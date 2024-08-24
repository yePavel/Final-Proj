import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{fontSize: '2em'}}>{text}</div>;

export function Map(){
  const [ coords, setCoords ] = useState({lat: 32.0853, lng: 34.7818})
  const zoom = 11

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  function onHandleClick(lat, lng){
    setCoords({lat, lng})
  }

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC5YkgsLkBgVEZ1-gZjC-aKT-mKw_pc_JI" }}
        defaultCenter={coords}
        defaultZoom={zoom}
        onClick={onHandleClick}
      >
        <AnyReactComponent
          lat={coords.lat}
          lng={coords.lng}
          text="🚩"
        />
      </GoogleMapReact> 
    </div>
  );
}