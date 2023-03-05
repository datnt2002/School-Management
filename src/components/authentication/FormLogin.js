import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiLogin } from "../../api/Api";
import Input from "../Tags/Input";

function FormLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const userInfo = { userName, password };

    fetch(apiLogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.text();
        } else {
          setPassword("");
          throw Error(setErrorMsg("Wrong username or password"));
        }
      })
      .then((data) => {
        localStorage.setItem("token", data);
        navigate("/event");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="form-container form-login">
        <div className="login-form-body">
          <form>
            <div className="form-header">
              <h1>Login</h1>
            </div>
            <div className="field-name">
              <Input
                label="Username"
                state={userName}
                onSetState={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="User Name"
              ></Input>
            </div>
            <div className="field-password">
              <Input
                label="Password"
                state={password}
                onSetState={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                placeholder="Password"
              ></Input>
            </div>
            {errorMsg && <p>{errorMsg}</p>}

            <button className="submit-button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
