import { useState } from "react";
import "./form.css";

import Input from "./Input";

function FormLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = { userName, password };
    const url = "";
    const options = {
      method: "POST",
      body: JSON.stringify(userInfo),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log("faul");
      });
  };

  return (
    <>
      <div className="form-container form-login">
        <div className="login-form-body">
          <div className="form-header">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field-name">
              <Input
                label="Username "
                state={userName}
                onSetState={(e) => setUserName(e.target.value)}
                placeholder="Enter name"
                type="text"
              ></Input>
            </div>
            <div className="field-password">
              <Input
                label="Password"
                state={password}
                onSetState={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                type="password"
              ></Input>
            </div>

            <button className="submit-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormLogin;
