import { useEffect, useState } from "react";
import { apiEditAccount, apiProfile, server } from "../../api/Api";
import Style from "./editProfile.module.css";
import "../SubmitIdea/style.css";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../../components/authentication/ChangePassword"

function EditProfile({ dataUser, token, setDataUser }) {
  //dang chet o file avatar
  console.log(setDataUser)
  const [fileAvatarInDb, setFileAvatarInDb] = useState(dataUser.avatar);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  //control value input file
  const [fileAvatarEdit, setFileAvatarEdit] = useState("");
  useEffect(() => {
    let formatDob = "";
    if (dataUser.doB) {
      formatDob = dataUser.doB.substring(0, 10);
    }
    setFileAvatarInDb(dataUser.avatar);
    setAddress(dataUser.address);
    setEmail(dataUser.email);
    setDob(formatDob);
    setPhone(dataUser.phone);
  }, [dataUser]);

  const navigate = useNavigate();

  const handleEditProfile = async (e) => {
    e.preventDefault();

    const fileAvaFormat = fileAvatarInDb.substring(8);
    console.log(fileAvaFormat);

    const formEdit = new FormData();
    formEdit.append("password", currentPassword);
    formEdit.append("address", address);
    formEdit.append("email", email);
    formEdit.append("phone", phone);
    formEdit.append("doB", dob ? dob + `T00:00:00` : null);
    formEdit.append("Image", fileAvatarEdit ? fileAvatarEdit : fileAvaFormat);

    await fetch(apiEditAccount, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formEdit,
    })
      .then((res) => res.json())
      .then((data) => {
        setDataUser(data);
        navigate("/profile");
      })
      .catch(() => {
        console.log("k edit dc");
      });

    fetch(apiProfile, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataUser(data);
      })
      .catch((err) => console.log("gg"));
  };

  useEffect(() => {
    setFileAvatarInDb(dataUser.avatar);
  }, [dataUser]);

  
  const [modalChangePassword, setModalChangePassword] = useState(false);
  function handleChangePassModal(){
    setModalChangePassword(true)
  }
  function handleCloseChangePassModal() {
    setModalChangePassword(false);
  }

  return (
    <>
    <div className="editProfile">
      <div className="container-xl px-4 mt-4">
        <div className="row">
          <div className="col-xl-4">
            <div
              className="card mb-4 mb-xl-0"
              style={{ boxShadow: "0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%)" }}
            >
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  alt="avatar"
                  className={`${Style.img_account_profile} ${Style.rounded_circle} mb-2`}
                  src={server + fileAvatarInDb}
                />
                <div className="form">
                  <span className="form-title">Upload your avatar</span>
                  <p className="form-paragraph">File should be an image</p>
                  <label htmlFor="file-input" className="drop-container">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input
                      type="file"
                      id="file-input"
                      accept="image/*"
                      onChange={(e) => setFileAvatarEdit(e.target.files[0])}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div
              className="card"
              style={{
                boxShadow: "0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%)",
                padding: "20.391px",
              }}
            >
              <div className={Style.card_header}>Account Details</div>
              <div className={Style.card_body}>
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className={Style.form_control}
                      id="inputUsername"
                      type="text"
                      value={dataUser.userName}
                      disabled
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputRole">
                        Role
                      </label>
                      <input
                        className={Style.form_control}
                        id="inputRole"
                        type="text"
                        value={dataUser.role}
                        disabled
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputDepartment">
                        Department
                      </label>
                      <input
                        className={Style.form_control}
                        id="inputDepartment"
                        type="text"
                        value={dataUser.department}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmail">
                      Email
                    </label>
                    <input
                      className={Style.form_control}
                      id="inputEmail"
                      type="text"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputAddress">
                      Address
                    </label>
                    <input
                      className={Style.form_control}
                      id="inputAddress"
                      type="text"
                      placeholder="Enter your location"
                      value={address !== "0" ? address : ""}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>

                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className={Style.form_control}
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone !== "0" ? phone : ""}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className={Style.form_control}
                        id="inputBirthday"
                        type="date"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value={dob}
                        onChange={(e) => {
                          setDob(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      className="small mb-1"
                      htmlFor="inputCurrentPassword"
                    >
                      Your Current Password
                    </label>
                    <input
                      className={Style.form_control}
                      id="inputCurrentPassword"
                      type="password"
                      placeholder="Enter your current password to edit your profile"
                      value={currentPassword}
                      autoComplete="off"
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`${Style.btnSave} mb-3`}>
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={handleEditProfile}
                    >
                      Save changes
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleChangePassModal}
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {modalChangePassword && 
      <ChangePassword handleClose={handleCloseChangePassModal} setDataUser={setDataUser} token={token}/>
    }
    </>
    
  );
}
export default EditProfile;
