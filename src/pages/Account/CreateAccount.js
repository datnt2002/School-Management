import Input from "../../components/Tags/Input";

import "./account.css";
import { useState } from "react";
import { apiCreateAccount } from "../../api/Api";
import { useNavigate } from "react-router-dom";
function CreateAccount({ style, handleClose, token }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [role, setRole] = useState("");
  const [departmentId, setDepartmentId] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAccount = {
      userName,
      password,
      email,
      cfPassword,
      role,
      departmentId,
      status: "Enable",
    };

    fetch(apiCreateAccount, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount),
    })
      .then((res) => res.json())
      .then(() => handleClose())
      .catch(() => navigate("*"));
  };

  return (
    <div className="container-fluid create" style={style}>
      <div className="modalOverlay" onClick={handleClose}></div>
      <div className="modalCate">
        <div className="createFormCate">
          <div className="createFormCate_Header">
            <h1>Create New Account</h1>
          </div>
          <form className="createFormCate_Input">
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
              <Input
                label="Confirm Password"
                type="password"
                className="form-control"
                onSetState={(e) => {
                  setCfPassword(e.target.value);
                }}
                value={cfPassword}
              />
            </div>
            <div className="mt-3 mb-3 createFormAccount_Select">
              <div className="mb-5">
                <label className="form-label">Role</label>
                <select
                  className="form-control"
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                >
                  <option value="0">---Please enter role---</option>
                  <option value="Staff">Staff</option>
                  <option value="QAM">Quality Management Assurance</option>
                  <option value="QAC">Quality Management Cooperator</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="form-label">Department</label>
                <select
                  className="form-control"
                  onChange={(e) => setDepartmentId(e.target.value)}
                  value={departmentId}
                >
                  <option value="0">---Please enter Department---</option>
                  <option value="1">IT</option>
                  <option value="2">HR</option>
                  <option value="3">Design</option>
                  <option value="4">Business</option>
                </select>
              </div>
            </div>
            <div className="btnForm mt-3 d-flex justify-content-evenly">
              <button
                type="submit"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                type="cancel"
                className="btn btn-danger"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
