import DailySection from "../DailySection/DailySection";
import GeneralSection from "../GeneralSection/GeneralSection";
import HourlySection from "../HourlySection/HourlySection";
import Search from "../SearchBar/Search";
import styles from "./MainPart.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import DisplayedText from "../DisplayedText/DisplayedText";

function MainPart() {
  const { error, weatherData, isLoading, denied } = useContext(WeatherContext);
  return (
    <div className={styles.mainPartContainer}>
      <Search />
      {denied ? (
        <DisplayedText
          text={
            "You just denied or forget to accept out access to your location, please start searching to see result."
          }
        />
      ) : error === "City not found. Please try another city." ||
        (!weatherData && !isLoading) ? (
        <DisplayedText text={"No search result found!"} />
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
