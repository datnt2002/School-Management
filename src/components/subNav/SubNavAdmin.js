import { Routes, Route, Link } from "react-router-dom";
import Category from "../../pages/Category/Category";
import CreateNewCategory from "../../pages/Category/CreateNewCategory";
import NewsFeed from "../../pages/NewsFeed/NewsFeed";
import Admin from "../../pages/Admin/Admin";
import AdminNewEvent from "../../pages/Admin/AdminNewEvent";

function SubNavAdmin() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Category">
                Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/NewsFeed">
                News Feed
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Admin">
                Admin (Test)
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/Category/*" element={<Category />}></Route>
        <Route path="/Admin/*" element={<Admin />} />
        <Route
          path="/Admin/AdminNewEvent"
          element={<AdminNewEvent />}
        ></Route>
        <Route
          path="/Category/CreateNewCategory"
          element={<CreateNewCategory />}
        ></Route>
        <Route path="/NewsFeed" element={<NewsFeed />} />
        
      </Routes>
    </>
  );
}
export default SubNavAdmin;
