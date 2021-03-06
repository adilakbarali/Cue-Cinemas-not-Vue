import { useEffect, useRef } from "react";
import L from "leaflet";

const MapCard = ({ cityData }) => {
  const mapRef = useRef(null);
  const titleRef = useRef(null);
  const controlRef = useRef(null);
  //   const layerRef = useRef(null);

  titleRef.current = L.tileLayer(
    `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  const mapStyles = {
    overflow: "hidden",
    width: "50%",
    height: "50vh",
  };

  const mapParams = {
    center: [55.873446320605176, -4.133155157915969], // Vue Glasgow Fort
    zoom: 17,
    zoomControl: false,
    maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
    closePopupOnClick: false,
    layers: [titleRef.current],
  };

  useEffect(() => {
    mapRef.current = L.map("map", mapParams);
  });

  useEffect(() => {
    controlRef.current = L.control
      .layers({ OpenStretMap: titleRef.current })
      .addTo(mapRef.current);
    L.control
      .zoom({
        position: "topright",
      })
      .addTo(mapRef.current);
  }, []);

  useEffect(() => {
    mapRef.current.on("zoomstart", () => {
      console.log("ZOOM STARTED");
    });
  }, []);

  return (
    <>
      <div className="placesToGoHeader">
        <h1> Google Map: </h1>
      </div>
      <br />
      <div>
        <div id="map" style={mapStyles} className="center" />
      </div>
    </>
  );
};

export default MapCard;
