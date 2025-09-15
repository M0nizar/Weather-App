import { useContext, useState } from "react";
import styles from "./Search.module.css";
import { WeatherContext } from "../../context/WeatherContext";
import { uppercaseTheFirstLetter } from "../../utils/usedFunctions";

function Search() {
  const { searchSuggestions, setEnteredCityGlobal, setSelectedCity } =
    useContext(WeatherContext);
  const [isOpen, setIsOpen] = useState(false);
  const [enteredCity, setEnteredCity] = useState("");

  const longerThen5 = searchSuggestions.length >= 5;
  const displayedSuggestedSearchedList = longerThen5
    ? searchSuggestions.slice(0, 5)
    : searchSuggestions;

  function handleSubmitting(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.searchBar} onSubmit={handleSubmitting}>
      <div className={styles.searchInput}>
        <input
          type="search"
          placeholder="Search for a place..."
          onChange={(e) =>
            setEnteredCity(uppercaseTheFirstLetter(e.target.value))
          }
        />
        <div className={styles.searchIcon}>
          <img src="/icons/Search-Icon.svg" alt="search icon" />
        </div>

        <div
          className={styles.recentSearches}
          style={isOpen ? {} : { display: "none" }}
        >
          {displayedSuggestedSearchedList.map((element, i) => (
            <div
              key={i}
              className={styles.recentSearchOption}
              onClick={() => {
                const { name, country, latitude, longitude } = element;
                setSelectedCity({ name, country, latitude, longitude });
                setIsOpen(false);
              }}
            >
              {element.name}, {element.country}
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        onClick={() => {
          if (enteredCity !== "") {
            setEnteredCityGlobal(enteredCity);
          }
          if (searchSuggestions.length !== 0) setIsOpen(true);
        }}
      >
        Search
      </button>
    </form>
  );
}

export default Search;
