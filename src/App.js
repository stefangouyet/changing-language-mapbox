import React, { useRef, useState } from "react";
import MapGL from "react-map-gl";
import Sidebar from "./sidebar";
import "./App.css";

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.67,
    longitude: -103.59,
    zoom: 3,
    bearing: 0,
    pitch: 0,
  });

  const [mapLanguage, setMapLanguage] = useState("en");
  const mapRef = useRef();
  let mapboxSource;

  const handleChangeMapLanguage = async (e) => {
    setMapLanguage(e.value);
    mapboxSource = await mapRef.current.getMap();
    await mapboxSource.setLayoutProperty("country-label-lg", "text-field", [
      "get",
      "name_" + e.value,
    ]);
    await mapboxSource.setLayoutProperty("state-label-lg", "text-field", [
      "get",
      "name_" + e.value,
    ]);
    await mapboxSource.setLayoutProperty("place-city-lg", "text-field", [
      "get",
      "name_" + e.value,
    ]);
    await mapboxSource.setLayoutProperty(
      "marine-label-sm-pt",
      "text-field",
      `{name_${e.value}}`
    );
    await mapboxSource.setLayoutProperty(
      "marine-label-md-pt",
      "text-field",
      `{name_${e.value}}`
    );
    await mapboxSource.setLayoutProperty(
      "marine-label-lg-pt",
      "text-field",
      `{name_${e.value}}`
    );
    // Can add many more labels, to cover all scenarios
  };

  return (
    <>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
        ref={mapRef}
      />
      <Sidebar
        handleChangeMapLanguage={handleChangeMapLanguage}
        currentLanguage={mapLanguage}
      />
    </>
  );
};

export default App;
