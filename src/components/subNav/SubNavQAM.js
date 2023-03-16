import { Link } from "react-router-dom";
function SubNavQAM() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ zIndex: 1 }}
      >
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="subNav-item">
              <a className="nav-link" href="/Dashboard">
                Dashboard
              </a>
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
