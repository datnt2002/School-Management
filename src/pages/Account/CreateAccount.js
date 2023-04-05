import { useState } from "react";
import { apiCreateAccount } from "../../api/Api";

import Input from "../../components/Tags/Input";
import Style from "./account.module.css";

function CreateAccount({ handleClose, token }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [departmentId, setDepartmentId] = useState();

  const [errMes, setErrMess] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      userName,
      password,
      email,
      role,
      departmentId,
    };

    fetch(apiCreateAccount, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount),
    })
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(() => {
        setUsername("");
        setPassword("");
        setEmail("");
        setRole("");
        setDepartmentId(0);
        handleClose();
      })
      .catch((err) =>
        err.json().then((err) => {
          let errArray = Object.values(err.errors);
          setErrMess(errArray);
        })
      );
  };

  return (
    <div className="container-fluid create">
      <div className="modalOverlay" onClick={handleClose}></div>
      <div className={Style.modalAccount}>
        <div className={Style.createFormAccount}>
          <div className="createFormCate_Header mb-5">
            <h1>Create New Account</h1>
          </div>
          <form className="createFormCate_Input">
            <div className="mb-4">
              <Input
                label="User Name"
                className="form-control"
                type="text"
                onSetState={(e) => {
                  setUsername(e.target.value);
                }}
                value={userName}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                type="text"
                className="form-control"
                onSetState={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Password"
                type="password"
                className="form-control"
                onSetState={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
          
         
            <div className={`mt-3 mb-3 ${Style.createFormAccount_Select}`}>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <select
                  className="form-control"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                >
                  <option value="">---Please enter role---</option>
                  <option value="Staff">Staff</option>
                  <option value="QAM">Quality Assurance Management</option>
                  <option value="QAC">Quality  Assurance Cooperator</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className="form-control"
                  onChange={(e) => setDepartmentId(e.target.value)}
                  value={departmentId}
                >
                  <option value="">---Please enter Department---</option>
                  <option value="1">IT</option>
                  <option value="2">HR</option>
                  <option value="3">Design</option>
                  <option value="4">Business</option>
                </select>
              </div>
            </div>
            {errMes &&
              errMes.map((err) => {
                return (
                  <div>
                    <p style={{ color: "red" }}>{err}</p>
                  </div>
                );
              })}
            <div className="btnForm mt-3 d-flex justify-content-evenly">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
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

export default CreateAccount;
