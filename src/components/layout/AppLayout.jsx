import { useContext } from "react";
import MainPart from "../common/MainPart";
import Navbar from "../common/Navbar";
import { WeatherContext } from "../../context/WeatherContext";
import SthngWentWrong from "../common/SthngWentWrong";

function AppLayout() {
  const { error } = useContext(WeatherContext);
  console.log(error);
  return (
    <div className="container">
      <Navbar />
      {error !== "City not found. Please try another city." && error ? (
        <SthngWentWrong />
      ) : (
        <>
          <p className="title">How’s the sky looking today?</p>
          <MainPart />
        </>
      )}
    </div>
  );
}

export default AppLayout;
