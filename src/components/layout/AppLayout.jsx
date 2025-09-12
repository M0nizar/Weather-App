import { useContext } from "react";
import MainPart from "../common/MainPart";
import Navbar from "../common/Navbar";
import { WeatherContext } from "../../context/WeatherContext";
import SthngWentWrong from "../common/SthngWentWrong";

function AppLayout() {
  const { error } = useContext(WeatherContext);
  return (
    <div className="container">
      <Navbar />
      {error === "something went wrong" ? (
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
