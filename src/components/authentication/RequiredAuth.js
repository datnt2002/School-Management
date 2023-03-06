import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Authentication from "../../pages/Authentication/Authentication";
import Header from "../header/Header";
import SubNavAdmin from "../subNav/SubNavAdmin";

function RequiredAuth({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();
  console.log(token);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!token) {
      navigate("/Login");
    }
  }, [token, navigate]);

  if (!token) {
    return <Authentication />;
  }
  return (
    <>
      <Header />
      <SubNavAdmin />
      {children}
    </>
  );
}

export default RequiredAuth;
