import { useContext, useState } from "react";
import styles from "./DropDownUnits.module.css";
import { WeatherContext } from "../../../context/WeatherContext";

function DropDownUnits() {
  const {
    tempiratureUnit,
    windSpeedUnit,
    percipitationUnit,
    setWindSpeedUnit,
    setTempiratureUnit,
    setPercipitationUnit,
  } = useContext(WeatherContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropDownUnits}>
      <div
        className={styles.dropDownUnitsButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <img src="/icons/Units-Icon.svg" alt="" />
        </div>
        <p>Units</p>
        <div>
          <img src="/icons/Units-Dropdown-Icon.svg" alt="" />
        </div>
      </div>

      <div
        className={styles.dropDownUnitsContent}
        style={isOpen ? {} : { display: "none" }}
      >
        <div
          tabIndex="0"
          className={styles.dropDownUnitsContentButton}
          onClick={() => {
            if (windSpeedUnit == "kmh") {
              setPercipitationUnit("inch");
              setTempiratureUnit("fahrenheit");
              setWindSpeedUnit("mph");
            }
          }}
        >
          <p>Switch to Imperial</p>
        </div>
        <div className={styles.dropDownUnitsContentSection}>
          <p className={styles.subtitle}>Temperature</p>
          <div>
            <div
              className={`${styles.dropDownUnitsContentButton} ${
                tempiratureUnit == "celsius" ? styles.selected : ""
              } `}
              data-value="celsius"
              onClick={() => {
                setTempiratureUnit("celsius");
              }}
            >
              <p>Celsius (°C)</p>
              <img
                src="/icons/Daily-Forecast-Title-1.svg"
                alt=""
                style={tempiratureUnit == "celsius" ? {} : { display: "none" }}
              />
            </div>
            <div
              className={`${styles.dropDownUnitsContentButton} ${
                tempiratureUnit == "celsius" ? "" : styles.selected
              } `}
              data-value="fahrenheit"
              onClick={() => {
                setTempiratureUnit("fahrenheit");
              }}
            >
              <p>Fahrenheit (°F)</p>
              <img
                src="/icons/Daily-Forecast-Title-1.svg"
                alt=""
                style={tempiratureUnit == "celsius" ? { display: "none" } : {}}
              />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className={styles.dropDownUnitsContentSection}>
          <p className={styles.subtitle}>Wind Speed</p>
          <div>
            <div
              className={`${styles.dropDownUnitsContentButton} ${
                windSpeedUnit == "kmh" ? styles.selected : ""
              } `}
              data-value="kmh"
              onClick={() => {
                setWindSpeedUnit("kmh");
              }}
            >
              <p>Km/h</p>
              <img
                src="/icons/Daily-Forecast-Title-1.svg"
                alt=""
                style={windSpeedUnit == "kmh" ? {} : { display: "none" }}
              />
            </div>
            <div
              className={`${styles.dropDownUnitsContentButton} ${
                windSpeedUnit == "kmh" ? "" : styles.selected
              } `}
              data-value="mph"
              onClick={() => {
                setWindSpeedUnit("mph");
              }}
            >
              <p>mph</p>
              <img
                src="/icons/Daily-Forecast-Title-1.svg"
                alt=""
                style={windSpeedUnit == "kmh" ? { display: "none" } : {}}
              />
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className={styles.dropDownUnitsContentSection}>
          <p className={styles.subtitle}>Precipitation</p>
          <div>
            <div
              className={`${styles.dropDownUnitsContentButton} ${
                percipitationUnit == "mm" ? styles.selected : ""
              } `}
              data-value="mm"
              onClick={() => {
                setPercipitationUnit("mm");
              }}
            >
              <p> Millimeters(mm)</p>
              <img
                src="/icons/Daily-Forecast-Title-1.svg"
                alt=""
                style={percipitationUnit == "mm" ? {} : { display: "none" }}
              />
            </div>
            <div
              className={`${styles.dropDownUnitsContentButton} ${
                percipitationUnit == "mm" ? "" : styles.selected
              } `}
              data-value="inch"
              onClick={() => {
                setPercipitationUnit("inch");
              }}
            >
              <p> Inches(in)</p>
              <img
                src="/icons/Daily-Forecast-Title-1.svg"
                alt=""
                style={percipitationUnit == "mm" ? { display: "none" } : {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownUnits;
