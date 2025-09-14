import DropDownDays from "../DropDowndays/DropDownDays";
import HourlyStatusCard from "../HourlyStatusCard/HourlyStatusCard";
import styles from "./HourlySection.module.css";
import { useContext, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { formatDate } from "../../utils/usedFunctions";
import { days } from "../../constants/data";

function HourlySection() {
  const { weatherData, tempiratureUnit, isLoading } =
    useContext(WeatherContext);
  const currentDate = new Date();
  const [selectedDay, setSelectedDay] = useState(days[currentDate.getDay()]);
  const hourly = weatherData?.hourly;

  function getDaysHours() {
    const days = {};
    let item = [];
    for (let i = 0; i < 168; i++) {
      item.push({
        time: hourly?.time[i],
        temperature: hourly?.temperature_2m[i],
        weather_code: hourly?.weather_code[i],
      });
      if ((i + 1) % 24 === 0) {
        days[formatDate(item[0].time?.slice(0, 10))[0]] = item;
        item = [];
      }
    }

    return days;
  }

  function calculateTheSevenHours() {
    const currentHour = currentDate.getHours();
    if (24 - currentHour > 8) {
      return currentHour;
    } else {
      return currentHour - (8 - (24 - currentHour));
    }
  }

  return (
    <div className={styles.hourlySection}>
      <div className={styles.filtering}>
        <p>Hourly forecast</p>
        <DropDownDays
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <div className={styles.hourlyList}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.skeltonCard}></div>
            ))
          : getDaysHours()
              [selectedDay]?.slice(
                calculateTheSevenHours(),
                calculateTheSevenHours() + 8
              )
              .map((hour, index) => {
                return (
                  <HourlyStatusCard
                    key={index}
                    time={hour.time}
                    weather_code={hour.weather_code}
                    temperature={hour.temperature}
                    unit={tempiratureUnit}
                  />
                );
              })}
      </div>
    </div>
  );
}

export default HourlySection;
