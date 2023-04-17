import { Link } from "react-router-dom";
function SubNavQAM() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light subNavBar"
        style={{ display: "none" }}
      >
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="subNav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="subNav-item">
              <Link className="nav-link" to="/DashBoard">
                Dashboard
              </Link>
            </li>
            <li className="subNav-item">
              <Link className="nav-link" to="/NewsFeed">
                News Feed
              </Link>
            </li>
            <li className="subNav-item">
              <Link className="nav-link" to="/Category">
                Category
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default SubNavQAM;
