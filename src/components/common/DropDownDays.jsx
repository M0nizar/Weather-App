import { useState } from "react";
import styles from "./DropDownDays.module.css";

function DropDownDays({ selectedDay, setSelectedDay }) {
  const [isOpen, setIsOpen] = useState(false);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className={styles.dropDownDays}>
      <div
        className={styles.dropDownDaysButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{selectedDay}</p>
        <div>
          <img src="/icons/Units-Dropdown-Icon.svg" alt="" />
        </div>
      </div>

      <div
        className={styles.dropDownDaysContent}
        style={isOpen ? {} : { display: "none" }}
      >
        {days.map((day) => {
          return (
            <button
              className={selectedDay === day ? styles.selected : ""}
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
