import DailySection from "../DailySection/DailySection";
import GeneralSection from "../GeneralSection/GeneralSection";
import HourlySection from "../HourlySection/HourlySection";
import Search from "../SearchBar/Search";
import styles from "./MainPart.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../../context/WeatherContext";
import NoSearchResult from "../NoSearchResult/NoSearchResult";

function MainPart() {
  const { error, weatherData, isLoading } = useContext(WeatherContext);
  return (
    <div className={styles.mainPartContainer}>
      <Search />
      {error === "City not found. Please try another city." ||
      (!weatherData && !isLoading) ? (
        <NoSearchResult />
      ) : (
        <div className={styles.dataSection}>
          <div className={styles.left}>
            <GeneralSection />
            <DailySection />
          </div>
          <div className={styles.right}>
            <HourlySection />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPart;
