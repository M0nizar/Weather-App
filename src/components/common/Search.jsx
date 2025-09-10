import { useContext, useState } from "react";
import styles from "./Search.module.css";
import { WeatherContext } from "../../context/WeatherContext";

function Search() {
  const { setTheCity } = useContext(WeatherContext);
  const [enteredCity, setEnteredCity] = useState("");
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
        />
        <div className={styles.searchIcon}>
          <img src="/icons/Search-Icon.svg" alt="search icon" />
        </div>
      </div>

      <button type="submit" onClick={() => setTheCity(enteredCity)}>
        Search
      </button>
    </form>
  );
}

export default Search;
