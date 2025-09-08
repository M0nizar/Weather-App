function Search() {
  return (
    <form action="" className="searchBar">
      <div className="search-input">
        <input type="search" placeholder="Search for a place..." />
        <div className="search-Icon">
          <img src="/icons/Search-Icon.svg" alt="search icon" />
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
