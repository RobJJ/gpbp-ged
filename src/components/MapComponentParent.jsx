"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { scatterViewType } from "@/lib/atoms";
import { useAtom } from "jotai";

// ** this is the actual map component
// ** setdefault state to province,, and then hold state here...
// ** if params changes, this component will be rerendered by its parent and it will receive new params to search by
// GEO
// ** if (provinceSelected) becomes true is true, then it needs to grab geodata districts that match province_id
// GED
// ** this data changes based on year, and score_one..
// this property must be pulled in based on the {country} selected
// names must match the country name passed in from landing page or url
const defaultPositions = {
  kosovo: [42.5, 20.6456],
  serbia: [44.3, 20.5],
  uzbekistan: [41.377491, 64.585262],
};

export default function MapComponentParent({
  country,
  provinceGeoData,
  districtGeoData,
  gedDataProvince,
  gedDataDistrict,
  mapbox_url,
}) {
  const style = (feature) => {
    return {
      // need add a color matching function and pass in the score of the feature E8E8E8
      fillColor: "#DFDFDF",
      weight: 1,
      opacity: 1,
      color: "#666",
      dashArray: "3",
      fillOpacity: 0.7,
    };
  };
  const [scatterType] = useAtom(scatterViewType);
  // the key allows the GeoJSON component to have a unique id and create different instances off it
  let hashkey = Math.random();

  return (
    <section className="w-full h-full bg-yellow-300 flex flex-col text-lg gap-2">
      <MapContainer
        center={defaultPositions[country]}
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
        // ref={nodeRef}
        // adding hashkey here rerenders another entire map. ie resets pos etc
        // key={hashkey}
      >
        <TileLayer url={mapbox_url} />
        <GeoJSON
          // adding hashkey here just instanciates another GeoJSON component, ie does not render another map
          key={hashkey}
          style={style}
          data={scatterType === "provinces" ? provinceGeoData : districtGeoData}
        />
      </MapContainer>
    </section>
  );
}

// this component needs geo data and also GED data... the GED data starts off as province data, but when we click a province, we will fetch the geo districts inside that province and show it,, but we also need those districts information
