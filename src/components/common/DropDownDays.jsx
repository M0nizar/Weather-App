import { useState } from "react";
import styles from "./DropDownDays.module.css";

function DropDownDays() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [isOpen, setIsOpen] = useState(false);
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
        <button
          className={selectedDay === "Monday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Monday");
            setIsOpen(false);
          }}
        >
          Monday
        </button>
        <button
          className={selectedDay === "Tuesday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Tuesday");
            setIsOpen(false);
          }}
        >
          Tuesday
        </button>
        <button
          className={selectedDay === "Wednesday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Wednesday");
            setIsOpen(false);
          }}
        >
          Wednesday
        </button>
        <button
          className={selectedDay === "Thursday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Thursday");
            setIsOpen(false);
          }}
        >
          Thursday
        </button>
        <button
          className={selectedDay === "Friday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Friday");
            setIsOpen(false);
          }}
        >
          Friday
        </button>
        <button
          className={selectedDay === "Saturday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Saturday");
            setIsOpen(false);
          }}
        >
          Saturday
        </button>
        <button
          className={selectedDay === "Sunday" ? styles.selected : ""}
          onClick={() => {
            setSelectedDay("Sunday");
            setIsOpen(false);
          }}
        >
          Sunday
        </button>
      </div>
    </div>
  );
}

export default DropDownDays;
