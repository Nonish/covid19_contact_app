import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapData } from "../utils/types";

const customIcon = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
  iconSize: [32, 32],
});

interface MapProps {
  mapData: MapData;
}

const Map: React.FC<MapProps> = ({ mapData }) => {
  const position: [number, number] = [0, 0];
  return (
    <div className="relative flex w-full flex-col items-center gap-0 rounded-lg  bg-slate-200">
      <h1 className="text-2xl font-semibold mt-5">World Map</h1>
      <div className="w-full px-4 py-10">
        <MapContainer
          center={position}
          zoom={2}
          className="h-[300px] w-full md:h-[500px] "
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {mapData.map((item) => (
            <Marker
              position={[item.countryInfo.lat, item.countryInfo.long]}
              icon={customIcon}
              key={item.countryInfo._id}
            >
              <Popup>
                <p className="text-xl font-bold capitalize">{item.country}</p>
                <ul>
                  <li className="font-semibold text-blue-400">
                    Active: {item.active}
                  </li>
                  <li className="font-semibold text-red-400">
                    Deaths: {item.deaths}
                  </li>
                  <li className="font-semibold text-green-500">
                    Recovered: {item.recovered}
                  </li>
                </ul>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
