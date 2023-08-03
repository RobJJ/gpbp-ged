"use client";

import { useParams, useSearchParams } from "next/navigation";
import MapComponentParent from "./MapComponentParent";
import ScatterComponentParent from "./ScatterComponentParent";
import { useAtom } from "jotai";
import { visualTypeSelected } from "@/lib/atoms";
import { useQuery } from "react-query";
import { getProvinceId } from "@/lib/utils";
import { cache, useEffect, useState } from "react";
import { useGedData } from "@/lib/hooks/getGedDataQuery";
import LoadingSpinner from "./LoadingComponent";
import ScatterComponentParentV2 from "./ScatterComponentParentV2";

// this component receives initial data from server (geoprovince, and gedprovince data)
// it also determines which visual to show, map or scatter based on the visualType from atom

export default function VisualComponentClientParentV2({
  geojsonDataProvince,
  gedDataDistrict,
  gedDataProvince,
  country,
}) {
  // console.log("[VisualComponentClientParent] : rendered");
  const params = useParams();
  const searchParams = useSearchParams();
  const [visualType] = useAtom(visualTypeSelected);

  return (
    <div className="w-full h-full">
      {visualType === "map" && (
        <MapComponentParent
          geojsonDataProvince={geojsonDataProvince}
          // geojsonDataDistrict={geojsonDataDistrict}
          gedDataProvince={gedDataProvince}
        />
      )}
      {visualType === "scatter" && (
        <ScatterComponentParentV2
          gedDataProvince={gedDataProvince}
          gedDataDistrict={gedDataDistrict}
          country={country}
        />
      )}
    </div>
  );
}
