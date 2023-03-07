import { useState } from "react";
import Profile from "../profile/Profile";
import "./header.css";

function Header() {
  const [showDropDown, setshowDropDown] = useState("")

  function Show(){
    if(showDropDown === ""){
      setshowDropDown("show")
    }
    else{
      setshowDropDown("")
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
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
        <div className="d-flex">
          <a href="#" className="user" onClick={Show}>
            <Profile
              className="rounded-circle"
              imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
              alt="user-image"
              userName="Dominic Keller"
            />
          </a>
          <div className={`dropdown-menu ${showDropDown}`} style={{ width:"11rem", position: "absolute", transform: "translate3d(0px, 70px, 0px)", top: "0px", eft: "0px", willChange: "transform" }}>
              <a href="/" className="dropdown-item notify-item">
                  <span>My Account</span>
              </a>

              <a href="/" className="dropdown-item notify-item">
                  <span>Logout</span>
              </a>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
export default Header;
