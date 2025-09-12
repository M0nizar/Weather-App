import { useContext, useState } from "react";
import styles from "./Search.module.css";
import { WeatherContext } from "../../../context/WeatherContext";

function Search() {
  const { setTheCity, recentSearchedList, setRecentSearchedList } =
    useContext(WeatherContext);
  const [isOpen, setIsOpen] = useState(false);
  const [enteredCity, setEnteredCity] = useState("");
  const longerThen4 = recentSearchedList.length >= 4;

  function handleSubmitting(e) {
    e.preventDefault();
  }

  function uppercaseTheFirstLetter(word) {
    const lowercase = word.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
  }

  return (
    <form action="" className={styles.searchBar} onSubmit={handleSubmitting}>
      <div className={styles.searchInput}>
        <input
          type="search"
          placeholder="Search for a place..."
          onChange={(e) =>
            setEnteredCity(uppercaseTheFirstLetter(e.target.value))
          }
          onClick={() => {
            if (recentSearchedList.length > 0) setIsOpen(!isOpen);
          }}
        />
        <div className={styles.searchIcon}>
          <img src="/icons/Search-Icon.svg" alt="search icon" />
        </div>

        <div
          className={styles.recentSearches}
          style={isOpen ? {} : { display: "none" }}
        >
          {longerThen4
            ? recentSearchedList.slice(0, 4).map((element, i) => (
                <div
                  key={i}
                  className={styles.recentSearchOption}
                  onClick={() => {
                    setTheCity(element);
                  }}
                >
                  {element}
                </div>
              ))
            : recentSearchedList.map((element, i) => (
                <div
                  key={i}
                  className={styles.recentSearchOption}
                  onClick={() => {
                    setTheCity(element);
                  }}
                >
                  {element}
                </div>
              ))}
        </div>
      </div>

      <button
        type="submit"
        onClick={() => {
          if (enteredCity !== "") {
            setTheCity(enteredCity);
            setRecentSearchedList((prev) => {
              return [...prev, enteredCity];
            });
          }
          setIsOpen(false);
        }}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
