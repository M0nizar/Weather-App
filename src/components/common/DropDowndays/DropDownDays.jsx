import { useContext, useState } from "react";
import styles from "./DropDownDays.module.css";
import { WeatherContext } from "../../../context/WeatherContext";
import { days } from "../../../constants/data";

function DropDownDays({ selectedDay, setSelectedDay }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useContext(WeatherContext);

  return (
    <div className={styles.dropDownDays}>
      <div
        className={styles.dropDownDaysButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{isLoading ? "_" : selectedDay}</p>
        <div>
          <img src="/icons/Units-Dropdown-Icon.svg" alt="" />
        </div>
      </div>

      <div
        className={styles.dropDownDaysContent}
        style={isOpen ? {} : { display: "none" }}
      >
        {days.map((day, index) => {
          return (
            <button
              className={selectedDay === day ? styles.selected : ""}
              key={index}
              onClick={() => {
                setSelectedDay(day);
                setIsOpen(false);
              }}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DropDownDays;
