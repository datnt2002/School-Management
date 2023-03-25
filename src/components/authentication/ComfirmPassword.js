import Style from "./comfirmPassword.module.css";
import Input from "../Tags/Input";
import { useState } from "react";
import { apiAccount } from "../../api/Api";

function ComfirmPassword({ handleClose, userName, token }) {
  const [cfPassword, setCfPassword] = useState("");

  const [err, setErr] = useState();
  const handleDisableAccount = (e) => {
    e.preventDefault();

    const formPassword = new FormData();
    formPassword.append("password", cfPassword);

    fetch(apiAccount + "/" + userName, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      body: formPassword,
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        handleClose();
      })
      .catch((err) => {
        err.json().then((errObj) => {
          let err = Object.values(errObj.errors);
          setErr(err);
        });
      });
  };

  return (
    <div className={`${Style.comfirmPassword}`}>
      <div className={Style.modalOverlay} onClick={handleClose}></div>
      <div className={Style.modalComfirm}>
        <div className={Style.comfirmForm}>
          <form className={Style.comfirmForm_Input}>
            <div className={Style.comfirmForm_Header}>
              <h1>Confirm Password</h1>
            </div>
            <div className="mb-5 mt-5">
              <Input
                label="Your current password"
                className="form-control"
                type="password"
                onSetState={(e) => {
                  setCfPassword(e.target.value);
                }}
                value={cfPassword}
              />
            </div>
            {err &&
              err.map((err) => {
                return <p>{err}</p>;
              })}
            <div
              className={`${Style.btnComfirm} d-flex justify-content-evenly`}
            >
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleDisableAccount}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ComfirmPassword;
