// this is a automatic suspence wrapper around the page.js of the CountryPage -> very cool,, handling spinner here
import Image from "next/image";
// import Spinner from "../../../components/Spinner-normal-size.svg";
import Spinner from "../../../public/Spinner-normal-size.svg";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-full bg-slate-100 rounded">
      <Image priority src={Spinner} alt="loading spinner" />
    </div>
  );
}
