import "../header/header.css";
import { Search } from "bootstrap-icons-react";
function SearchBar() {
    return(
        <div className="app-search dropdown">
            <form>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  id="top-search"
                  autoFocus={false}
                />
                <span>
                  <Search className="search-icon" />
                </span>
                <div className="input-group-append">
                  <button className="btn-primary btnSearch" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
    )
}
export default SearchBar;