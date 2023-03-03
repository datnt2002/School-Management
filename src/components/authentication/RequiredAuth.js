import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../header/Header";
import SubNavAdmin from "../subNav/SubNavAdmin";

function RequiredAuth({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (!token) {
      navigate("/Login");
    }
  }, [token, navigate]);
  return (
    <>
      <Header />
      <SubNavAdmin />
      {children}
    </>
  );
}

export default RequiredAuth;
