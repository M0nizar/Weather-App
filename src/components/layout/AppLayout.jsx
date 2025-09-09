import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import MainPart from "../common/MainPart";
import Navbar from "../common/Navbar";

function AppLayout() {
  const { weatherData } = useContext(WeatherContext);
  console.log(weatherData);
  return (
    <div className="container">
      <Navbar />
      <p className="title">How’s the sky looking today?</p>
      <MainPart />
    </div>
  );
}

export default AppLayout;
