import { Routes, Route, Link } from "react-router-dom";
import Category from "../../pages/Category/Category";
import NewsFeed from "../../pages/NewsFeed/NewsFeed";
import Admin from "../../pages/Admin/Admin";

function SubNavAdmin() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Category">
                Category
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/NewsFeed">
                News Feed
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Admin">
                Admin (Test)
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/NewsFeed" element={<NewsFeed />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </>
  );
}
export default SubNavAdmin;
