import { Link } from "react-router-dom";
import "./subNav.css";
function SubNavAdmin() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light subNavBar"
        style={{ display: "none" }}
      >
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* <li className="subNav-item">
              <Link className="nav-link" to="/DashBoard">
                Dashboard
              </Link>
            </li> */}
            <li className="subNav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="subNav-item">
              <Link className="nav-link" to="/NewsFeed">
                News Feed
              </Link>
            </li>
            <li className="subNav-item">
              <Link className="nav-link" to="/Event">
                Event
              </Link>
            </li>
            <li className="subNav-item">
              <Link className="nav-link" to="/accounts">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default SubNavAdmin;
