import DropDownDays from "./DropDownDays";
import HourlyStatusCard from "./HourlyStatusCard";
import styles from "./HourlySection.module.css";
import { useContext, useState } from "react";
import { formatDate, WeatherContext } from "../../context/WeatherContext";

function HourlySection() {
  const { weatherData, tempiratureUnit } = useContext(WeatherContext);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const hourly = weatherData?.hourly;
  console.log(hourly);
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
  console.log(getDaysHours()[selectedDay]);

  function calculateTheSevenHours() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    if (24 - currentHour > 8) {
      return currentHour;
    } else {
      return currentHour - (8 - (24 - currentHour));
    }
  }
  console.log(calculateTheSevenHours());

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
        {getDaysHours()
          [selectedDay]?.slice(
            calculateTheSevenHours(),
            calculateTheSevenHours() + 8
          )
          .map((hour) => {
            return (
              <HourlyStatusCard
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
