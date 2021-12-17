import "mapbox-gl/dist/mapbox-gl.css";

import React, { useState } from "react";
import ReactMapGl, { Popup } from "react-map-gl";

const StyledMap = () => {
  const [viewport, setViewport] = useState({
    latitude: -30.946,
    longitude: -52.699,
    zoom: 3.81,
    width: "100%",
    height: "100%",
  });

  return (
    <div className="styled-map">
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidGhhdWFlbmdlbG1hbm4iLCJhIjoiY2t3MnM1dW9lMGdmMDJxcHh5d29pYXh2cSJ9.bQcnJJTOUGgGL34VGuGZRA"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/thauaengelmann/ckw2s8g51165614o4skrmbf9m"
      >
        <Popup
          className="info"
          latitude={-29.626295}
          longitude={-50.95988}
          closeButton={false}
          anchor={"top-left"}
          width={viewport.zoom * 3}
          height={viewport.zoom * 3}
        >
          <p style={{ color: "#333" }}>Hey, I am here!</p>
        </Popup>
      </ReactMapGl>
    </div>
  );
};

export default StyledMap;
