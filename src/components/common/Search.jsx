import styles from "./Search.module.css";

function Search() {
  return (
    <form action="" className={styles.searchBar}>
      <div className={styles.searchInput}>
        <input type="search" placeholder="Search for a place..." />
        <div className={styles.searchIcon}>
          <img src="/icons/Search-Icon.svg" alt="search icon" />
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
