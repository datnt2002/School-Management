import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router";
import Authentication from "../../pages/Authentication/Authentication";
import Header from "../header/Header";
import SubNavAdmin from "../subNav/SubNavAdmin";

function RequiredAuth({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [roleAuthorization, setRoleAuthorization] = useState("");
  const navigate = useNavigate();
  console.log(token);

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
      setRoleAuthorization(decodeToArray[1][1]);
    }
  }, [decodedToken]);
  console.log(roleAuthorization);
  if (!token) {
    return <Authentication />;
  }

  const validRoles = ["Admin", "Staff", "QAM"];
  if (validRoles.includes(roleAuthorization)) {
    return (
      <>
        <Header />
        <SubNavAdmin />
        {children}
      </>
    );
  } else {
    return "cannot access";
  }
}

export default RequiredAuth;
