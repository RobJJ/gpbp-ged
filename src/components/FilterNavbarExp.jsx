"use client";

import { useSearchParams } from "next/navigation";
import FilterNavbarExpChild from "./FilterNavbarExp-child";
import SwitchComponent from "./MapScatterToggle";

export default function FilterNavbarExp({}) {
  const searchParams = useSearchParams();

  //   console.log("[FilterNavbarExp] : searchParams passed through?", searchParams);

  return (
    <div className="w-full bg-pink-500 flex justify-around gap-5 items-center p-2">
      <SwitchComponent />

      <FilterNavbarExpChild
        yearParam={searchParams.get("year")}
        scoreOneParam={searchParams.get("score_one")}
        scoreTwoParam={searchParams.get("score_two")}
      />
    </div>
  );
}