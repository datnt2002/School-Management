import React from "react";

import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router";
import Authentication from "../../pages/Authentication/Authentication";
import Header from "../header/Header";
import SubNavAdmin from "../subNav/SubNavAdmin";
import SubNavQAM from "../subNav/SubNavQAM";
import SubNavQAC from "../subNav/SubNavQAC";
import SubNavStaff from "../subNav/SubNavStaff";
import UserContext from "../../api/UserContext";

function RequiredAuth({ children, dataUser }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [roleAuthorization, setRoleAuthorization] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/Login");
    }
    const storeToken = localStorage.getItem("token");
    if (storeToken !== token) {
      setToken(storeToken);
    }
  }, [navigate, token]);

  const { decodedToken } = useJwt(token);
  useEffect(() => {
    if (decodedToken) {
      const decodeToArray = Object.entries(decodedToken);
      setRoleAuthorization(decodeToArray[2][1]);
    }
  }, [decodedToken]);
  if (!token) {
    return <Authentication />;
  }

  const authorizedRoutes = {
    Admin: [
      "/",
      "/profile",
      "/accounts",
      "/Event",
      "/editProfile",
      "/NewsFeed",
      "/ListIdea",
      "/DetailIdea",
    ],
    QAM: [
      "/",
      "/NewsFeed",
      "/profile",
      "/Category",
      "/DetailIdea",
      "/editProfile",
      "/DashBoard",
    ],
    QAC: ["/", "/NewsFeed", "/profile", "/editProfile"],
    Staff: [
      "/",
      "/profile",
      "/AllEvent",
      "/editProfile",
      "/createIdea",
      "/NewsFeed",
      "/DetailIdea",
      "/MyIdea",
    ],
  };
  if (roleAuthorization in authorizedRoutes) {
    const allowRoutes = authorizedRoutes[roleAuthorization];
    if (allowRoutes.includes(window.location.pathname)) {
      let subNav;
      switch (roleAuthorization) {
        case "Admin":
          subNav = <SubNavAdmin />;
          break;
        case "QAM":
          subNav = <SubNavQAM />;
          break;
        case "QAC":
          subNav = <SubNavQAC />;
          break;
        case "Staff":
          subNav = <SubNavStaff />;
          break;
        default:
          break;
      }
      return (
        <>
          <UserContext.Provider value={dataUser}>
            <Header dataUser={dataUser} />
            {subNav}
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {
                token: token,
              });
            })}
          </UserContext.Provider>
        </>
      );
    }
  } else {
    return "cannot access";
  }
}

export default RequiredAuth;
