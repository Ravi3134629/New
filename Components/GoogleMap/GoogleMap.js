import React from "react";
import "./GoogleMap.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBnFJYQ5wzodrsXiJqOqKyuwhvn78Lqx7U",
  });
  const center = { lat: 44, lng: -80 };

  if (!isLoaded) return <div>Loading</div>;

  return (
    <GoogleMap zoom={8} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMaps;
