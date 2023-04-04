import Input from "../Tags/Input";
import Style from "./changePassword.module.css";
import { apiEditPassword } from "../../api/Api";
import { useState } from "react";

function ChangePassword({handleClose,token, setDataUser}) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  async function handleChangePassword(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    
    await fetch(apiEditPassword, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setDataUser(data);
        // handleClose();
      })
      .catch(() => {
        console.log("k edit dc");
        
      });
  }
  return(
      <div className={`${Style.changePassword}`}>
        <div className="modalOverlay" onClick={handleClose}></div>
        <div className={Style.modalChangePassword}>
          <div className={Style.changePasswordForm}>
            <form className={Style.changePasswordForm_Input}>
              <div className={Style.changePasswordForm_Header}>
                <h1>Change Password</h1>
              </div>
              <div className="mb-5 mt-5">
                <Input
                  label="New password"
                  className="form-control"
                  type="password"
                  onSetState={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  value={newPassword}
                />
              </div>
              <div className="mb-5 mt-5">
                <Input
                  label="Current password"
                  className="form-control"
                  type="password"
                  onSetState={(e) => {
                    setOldPassword(e.target.value);
                  }}
                  value={oldPassword}
                />
              </div>
              <div
                className={`${Style.btnComfirm} d-flex justify-content-evenly`}
              >
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={handleChangePassword}
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
export default ChangePassword;