import GeneralStatusCard from "./GeneralStatusCard";
import styles from "./GeneralSection.module.css";
import { useContext } from "react";
import {
  formatDate,
  setUnitString,
  WeatherContext,
  weatherIcon,
} from "../../context/WeatherContext";

function GeneralSection() {
  const {
    weatherData,
    tempiratureUnit,
    windSpeedUnit,
    percipitationUnit,
    theCountry,
    theCity,
  } = useContext(WeatherContext);
  console.log(theCity, theCountry, weatherData);

  const currentDaySting = weatherData?.current.time.slice(0, 10);
  const currentDayData = formatDate(currentDaySting);
  return (
    <div className={styles.generalSection}>
      <div className={styles.generalSectionCard}>
        <div className={styles.generalSectionCardLeft}>
          <p>
            {theCity}, {theCountry}
          </p>
          <p>
            {currentDayData[0]}, {currentDayData[1]?.slice(0, 3)}{" "}
            {currentDaySting?.slice(8, 10)} , {currentDaySting?.slice(0, 4)}
          </p>
        </div>
        <div className={styles.generalSectionCardRight}>
          <div className={styles.generalSectionCardRightImage}>
            <img
              src={weatherIcon(weatherData?.current.weather_code)}
              alt="image"
            />
          </div>
          <p>{`${weatherData?.daily.temperature_2m_max[0]}${setUnitString(
            tempiratureUnit
          )}`}</p>
        </div>
      </div>
      <div className={styles.generalSectionStatusList}>
        <GeneralStatusCard
          title={"Feels Like"}
          value={`${weatherData?.current.temperature_2m}${setUnitString(
            tempiratureUnit
          )}`}
        />
        <GeneralStatusCard
          title={"Humidity"}
          value={`${weatherData?.current.relative_humidity_2m} %`}
        />
        <GeneralStatusCard
          title={"Wind"}
          value={`${weatherData?.current.wind_speed_10m} ${setUnitString(
            windSpeedUnit
          )}`}
        />
        <GeneralStatusCard
          title={"Precipitation"}
          value={`${weatherData?.current.precipitation} ${setUnitString(
            percipitationUnit
          ).slice(0, 2)}`}
        />
      </div>
    </div>
  );
}

export default GeneralSection;
