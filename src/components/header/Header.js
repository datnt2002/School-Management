import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Search } from "bootstrap-icons-react";
import UserContext from "../../api/UserContext";
import { server } from "../../api/Api";
import { set } from "animejs";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Header({ dataUser }) {

  const [showDropDown, setShowDropDown] = useState(""); 
  const [showBtnSub, setShowBtnSuv] = useState(false);
  const [hideBtnSub, setHideBtnSuv] = useState(true);

  useEffect(() => {
    const h5 = document.querySelector(".nav-user h5");
    const p = document.querySelector(".nav-user .media-body p");
    const subNavItem = document.querySelectorAll(".subNav-item");
    const btn = document.querySelector(".nav-user");
    const item = document.querySelector(".dropdown-item");
    const btnDrop = document.getElementById("menuLine");
    const btnHideDrop = document.getElementById("hideMenuLine");
    const subNavBar = document.querySelector(".subNavBar");
    function Show() {
      if (showDropDown === "") {
        setShowDropDown("show");
        h5.setAttribute("style", "color:white");
        p.setAttribute("style", "color:white");
      } else {
        setShowDropDown("");
        h5.setAttribute("style", "color:#98a6ad");
        p.setAttribute("style", "color:#98a6ad");
      }
    }
    function unShow() {
      setShowDropDown("");
      h5.setAttribute("style", "color:#98a6ad");
      p.setAttribute("style", "color:#98a6ad");
    }

    function showSubNav() {
      setShowBtnSuv(true);
      setHideBtnSuv(false);
      subNavBar.setAttribute("style", "display:block");
    }
    function hideSubNav() {
      setShowBtnSuv(false);
      setHideBtnSuv(true);
      subNavBar.setAttribute("style", "display:none");
    }

    btn.addEventListener("click", Show);
    item.addEventListener("mouseup", unShow);
    for (var i = 0; i < subNavItem.length; i++) {
      subNavItem[i].addEventListener("mouseup", unShow);
    }
    btnDrop.addEventListener("click", showSubNav);
    btnHideDrop.addEventListener("click", hideSubNav);
  });

  // const user = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="navbar-custom topnav-navbar topnav-navbar-dark" id="Top">
        <div className="container-fluid">
          <Link to="/" className="topnav-logo">
            <span className="topnav-logo-lg">
              <img
                src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png"
                alt=""
                height="16"
              />
            </span>
          </Link>
          <ul className="list-unstyled topbar-right-menu float-right mb-0">
            <li className="dropdown notification-list">
              <button
                className="nav-link nav-user arrow-none mr-0"
                data-toggle="dropdown"
                id="topbar-userdrop"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media" style={{ height: "50px"}}>
                  <img
                    className="rounded-circle"
                    src={server + dataUser?.avatar}
                    alt="placeholder"
                    height="32"
                  />
                  <div className="media-body">
                    <h5 className="mt-1 mb-0">{dataUser?.userName}</h5>
                    <p className="mb-1 mt-1">{dataUser?.department}</p>
                  </div>
                </div>
              </button>
              <div
                className={`dropdown-menu ${showDropDown}`}
                // className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown show"
                style={{
                  width: "100%",
                  position: "absolute",
                  transform: "translate3d(9.5px, 87px, 0px)",
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
            <div className="lines" id="menuLine" hidden={showBtnSub}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="lines" id="hideMenuLine" hidden={hideBtnSub}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div> 
    </>
  );
}
export default Header;


