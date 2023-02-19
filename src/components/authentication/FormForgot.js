import { useEffect, useState } from "react";

import Input from "../Tags/Input";

function FormForgot() {
  const [userName, setUserName] = useState("");
  const [verifyCode, setVerifyCode] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(userName);
  };

  return (
    <>
      <div className="form-container form-forgot">
        <div className="forgot-form-body">
          <div className="form-header">
            <h1>Forgot Password</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field-name">
              <Input
                label="Username: "
                state={userName}
                onSetState={(e) => setUserName(e.target.value)}
                placeholder="Enter name"
                type="text"
              ></Input>
            </div>

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
