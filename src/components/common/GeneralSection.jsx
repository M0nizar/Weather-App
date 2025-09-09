import GeneralStatusCard from "./GeneralStatusCard";
import styles from "./GeneralSection.module.css";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function GeneralSection() {
  const {
    weatherData,
    tempiratureUnit,
    windSpeedUnit,
    percipitationUnit,
    theCountry,
    theCity,
  } = useContext(WeatherContext);
  console.log(theCity, theCountry);

  // console.log("this is gthe data", weatherData);
  return (
    <div className={styles.generalSection}>
      <div className={styles.generalSectionCard}>
        <div className={styles.generalSectionCardLeft}>
          <p>
            {theCity}, {theCountry}
          </p>
          <p>Tuesday, Aug 5 , 2025</p>
        </div>
        <div className={styles.generalSectionCardRight}>
          <div className="general-section-card-right-image">
            <img src="/images/Rain.svg" alt="image" />
          </div>
          <p>{`${weatherData?.daily.temperature_2m_max[0]}°`}</p>
        </div>
      </div>
      <div className={styles.generalSectionStatusList}>
        <GeneralStatusCard
          title={"Feels Like"}
          value={`${weatherData?.current.temperature_2m}°`}
        />
        <GeneralStatusCard
          title={"Humidity"}
          value={`${weatherData?.current.relative_humidity_2m} %`}
        />
        <GeneralStatusCard
          title={"Wind"}
          value={`${weatherData?.current.wind_speed_10m} km/h`}
        />
        <GeneralStatusCard
          title={"Precipitation"}
          value={`${weatherData?.current.precipitation} mm`}
        />
      </div>
    </div>
  );
}

export default GeneralSection;
