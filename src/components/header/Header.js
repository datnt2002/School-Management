import Profile from "../profile/Profile";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <a className="navbar-brand" href="#">
          Logo
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <a href="#" className="user">
          <Profile
            className="rounded-circle"
            imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
            alt="user-image"
            userName="Dominic Keller"
          />
        </a>
      </div>
    </nav>
  );
}
export default Header;
