import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Profile from "../profile/Profile";
import "./header.css";
import { Search } from "bootstrap-icons-react";

function Header() {
  const [showDropDown, setShowDropDown] = useState("");
  const [showDropDownSearch, setShowDropDownSearch] = useState("");
  const [showSubNavBar, setShowSubNavBar] = useState("unshow");
  useEffect(() => {
    const h5 = document.querySelector(".nav-user h5")
    const p = document.querySelector(".nav-user .media-body p")
    const subNav = document.querySelectorAll(".subNav-item")
    const btn = document.querySelector(".nav-user")
    const item = document.querySelector(".dropdown-item")
    const btnDrop = document.querySelector(".navbar-toggle")
    const subNavBar = document.querySelector(".subNavBar")
    const btnSearc = document.querySelector(".btnSearc")
    // const icon = document.querySelector(".btnSearc svg")
    function Show() {
      if (showDropDown === "") {
        setShowDropDown("show");
        h5.setAttribute("style", "color:white")
        p.setAttribute("style", "color:white")
      } else {
        setShowDropDown("");
        h5.setAttribute("style", "color:#98a6ad")
        p.setAttribute("style", "color:#98a6ad")
      }
    }
    function showSearch() {
      if (showDropDownSearch === "") {
        setShowDropDownSearch("show");
        // icon.setAttribute("active", true)
      } else {
        setShowDropDownSearch("");
        // icon.removeAttribute("active")
      }
    }
    function unShow(){
      setShowDropDown("");
      h5.setAttribute("style", "color:#98a6ad")
      p.setAttribute("style", "color:#98a6ad")
    }
    function showSubNav() {
      if(subNavBar.hasAttribute("hidden")) {
        subNavBar.removeAttribute("hidden")
      } 
      else {
        subNavBar.setAttribute("hidden", true)
      }
      console.log(subNavBar.hasAttribute("hidden"))
    }
    btnSearc.addEventListener("click", showSearch)
    btn.addEventListener("click", Show)
    item.addEventListener("mouseup", unShow)
    for (var i = 0 ; i < subNav.length; i++) {
      subNav[i].addEventListener("mouseup", unShow)
    }
    btnDrop.addEventListener("click", showSubNav)
  })


  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="navbar-custom topnav-navbar topnav-navbar-dark">
        <div className="container-fluid">
          <Link to="/" className="topnav-logo">
              <span className="topnav-logo-lg">
                <img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png" alt="" height="16"/>
              </span>
          </Link>
          <ul className="list-unstyled topbar-right-menu float-right mb-0">
            <li class="dropdown notification-list d-lg-none btnSearc">
                <button class="nav-link arrow-none" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                  <Search className="search-icon"/>
                </button>
                <div class={`dropdown-menu dropdown-menu-animated dropdown-lg p-0 dropSearch ${showDropDownSearch}`}>
                    <form class="p-3">
                        <input type="text" class="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                    </form>
                </div>
            </li>
            <li className="dropdown notification-list">
              <button className="nav-link nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" aria-haspopup="true" aria-expanded="false">
                <Profile 
                  className="rounded-circle"
                  imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                  alt="user-image"
                  userName="Dominic Keller"
                  userDepartment="IT"
                />
              </button>
              <div
                className={`dropdown-menu ${showDropDown}`}
                // className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown show"
                style={{
                  width: "11rem",
                  position: "absolute",
                  transform: "translate3d(12px, 87px, 0px)",
                  top: "0px",
                  left: "0px",
                  willChange: "transform",
                }}
              >
                <Link to="/profile" className="dropdown-item notify-item">
                  <span>My Account</span>
                </Link>

                <Link
                  to="/Login"
                  className="dropdown-item notify-item"
                  onClick={handleLogout}
                >
                  <span>Logout</span>
                </Link>
              </div>
            </li>
          </ul>
          <button className="navbar-toggle">
              <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </button>
          <div className="app-search dropdown">
            <form>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." id="top-search" autoFocus="false"/>
                    <span><Search className="search-icon"/></span>
                    <div className="input-group-append">
                        <button className="btn-primary btnSearch" type="submit">Search</button>
                    </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
