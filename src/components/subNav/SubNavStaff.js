import { Link } from "react-router-dom";
function SubNavStaff() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light subNavBar" id="subStaff">
        <div className="container-fluid">
          <ul className="navbar-nav">
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
              <Link className="nav-link" to="/AllEvent">
                Create Idea
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default SubNavStaff;
