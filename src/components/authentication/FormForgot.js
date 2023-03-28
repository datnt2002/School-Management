import { useState } from "react";
import { apiForgotPassword } from "../../api/Api";

import Input from "../Tags/Input";

function FormForgot() {
  // const [userName, setUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [errMess, setErrMess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const dataToVerify = { email };

    fetch(apiForgotPassword, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToVerify),
    })
      .then((res) => res.text())
      .then((mess) => {
        setVerifyMessage(mess);
      })
      .catch((err) => {
        setErrMess(err);
      });
  };

  return (
    <>
      <div className="form-container form-forgot">
        <div className="forgot-form-body">
          <div className="form-header">
            <h1>Forgot Password</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* <div className="field-name">
              <Input
                label="Username "
                state={userName}
                onSetState={(e) => setUserName(e.target.value)}
                type="text"
              ></Input>
            </div> */}
            <div className="field-email">
              <Input
                label="email "
                state={email}
                onSetState={(e) => SetEmail(e.target.value)}
                type="text"
              ></Input>
            </div>
            {verifyMessage && <p>{verifyMessage}</p>}
            {errMess && <p>{errMess}</p>}
            <button className="submit-button" type="submit">
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormForgot;
