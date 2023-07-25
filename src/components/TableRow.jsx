import Link from "next/link";

const interpolateColor = (score) => {
  // change value of red and all occureneces to a higher color for brighter and lower for darker
  let red = 220,
    green = 0,
    blue = 0;

  if (score <= 50) {
    red = 220;
    green = Math.floor(220 * (score / 50));
  } else {
    red = Math.floor(220 * ((100 - score) / 50));
    green = 220;
  }

  return `rgb(${red}, ${green}, ${blue})`;
};

export default function TableRow({
  number,
  regionName,
  econ,
  envr,
  country,
  searchParams,
}) {
  return (
    <div className="w-full flex text-center h-8">
      <span className="bg-purple-100 w-1/12 h-full border-x-2 border-black p-2">
        {number}
      </span>
      <Link
        href={{
          pathname: `/dashboard/${country}/${regionName}`,
          // can spread the searchParams!!!! *******
          query: { ...searchParams },
        }}
        className="bg-purple-200 w-5/12 h-full border-r-2 border-black p-2 font-bold hover:text-blue-300"
      >
        {regionName}
      </Link>
      <span className="w-3/12 bg-white h-full p-2 flex items-center ">
        <div className="w-full h-3/4 flex bg-slate-300">
          <div
            className={`h-full`}
            style={{
              backgroundColor: interpolateColor(envr),
              width: `${envr}%`,
            }}
          />
        </div>
      </span>
      {/* new way.. you have to create 10 blocks per province or district.. conciderably more divs but does it effect server side performance? */}
      <span className=" w-3/12 h-full border-x-2 p-2 border-black flex items-center bg-white">
        <div className="relative w-full h-3/4 flex items-center bg-slate-300">
          <div
            className="h-full w-full"
            style={{
              backgroundColor: interpolateColor(econ),
              width: `${econ}%`,
              transition: "width 0.5s ease-in-out",
            }}
          />
          <div className="absolute w-full h-full flex">
            {[...Array(10)].map((_prop, idx) => {
              console.log("idx", idx);
              return (
                <div
                  key={idx}
                  className={`w-[10%] h-full border-r border-white`}
                />
              );
            })}
          </div>
        </div>

        {/*<div className="w-full absolute top-0 h-3/4 flex bg-slate-300 ">
          {[...Array(10).keys()].map((index) => {
            let width = index < Math.ceil(econ / 10) ? "100%" : "0";
            return (
              <div
                key={index}
                className={`w-[10%] h-full ${
                  index < 9 ? "border-r-2 border-white" : null
                }`}
              />
            );
          })}
        </div>*/}
      </span>
      {/* old method of creating the progress bar.. has one div that is filled to show % */}
      {/*<span className="w-3/12 bg-white  p-2 flex items-center border-l-2 border-black">
        <div className="w-full h-3/4 flex bg-slate-300">
          <div
            className={`h-full`}
            style={{
              backgroundColor: envrColor,
              width: `${econ}%`,
            }}
          />
        </div>
        </span>*/}
      {/*<span className="bg-purple-300 w-3/12 border-x-2  border-black p-2">
        {econ}
        </span>*/}
    </div>
  );
}
