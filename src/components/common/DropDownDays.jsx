import styles from "./DropDownDays.module.css";

function DropDownDays() {
  return (
    <div className={styles.dropDownDays}>
      <div className={styles.dropDownDaysButton}>
        <p>Tuesday</p>
        <div>
          <img src="/icons/Units-Dropdown-Icon.svg" alt="" />
        </div>
      </div>

      <div className={styles.dropDownDaysContent}>
        <button>Monday</button>
        <button>Tuesday</button>
        <button>Wednesday</button>
        <button>Thursday</button>
        <button>Friday</button>
        <button>Saturday</button>
        <button>Sunday</button>
      </div>
    </div>
  );
}

export default DropDownDays;
