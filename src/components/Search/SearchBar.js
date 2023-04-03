import { useEffect } from "react";
import "../header/header.css";
import { Search } from "bootstrap-icons-react";
import { apiIdea } from "../../api/Api";
import { useState } from "react";
function SearchBar({ token, setDataIdea }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("log", apiIdea);
    fetch(apiIdea + "?searchString=" + searchInput, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setDataIdea(data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app-search dropdown">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          id="top-search"
          autoFocus={false}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <span>
          <Search className="search-icon" />
        </span>
        <div className="input-group-append">
          <button className="btn-primary btnSearch" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
