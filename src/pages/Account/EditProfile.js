import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEditAccount } from "../../api/Api";
import Style from "./editProfile.module.css";

function EditProfile({ dataUser, token, setDataUser }) {
  //dang chet o file avatar
  const [fileAvatar, setFileAvatar] = useState(
    "https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
  );
  const [address, setAddress] = useState(dataUser.address);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  useEffect(() => {
    setFileAvatar(dataUser.avatar);
    setAddress(dataUser.address);
    setEmail(dataUser.email);
    setPhone(dataUser.phone);
  }, [dataUser]);

  const navigate = useNavigate();

  const handleEditProfile = (e) => {
    e.preventDefault();

    const editProfile = {
      password: currentPassword,
      address,
      email,
      phone,
      // doB: dob,
      avatar: fileAvatar,
    };

    fetch(apiEditAccount, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProfile),
    })
      .catch(() => {
        console.log("k edit dc");
      })
      .finally(navigate("/profile"));
  };

  return (
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
                  src={fileAvatar}
                />
                <div className="font-italic text-muted mt-4 mb-2">
                  Upload new image
                </div>
                <div className="fileUploadInput">
                  <input
                    type="text"
                    value={fileAvatar}
                    onChange={(e) => setFileAvatar(e.target.value)}
                  />
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div
              className="card mb-4"
              style={{ boxShadow: "0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%)" }}
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
                      value={address}
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
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      {/* <label className="small mb-1" htmlFor="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className={Style.form_control}
                        id="inputBirthday"
                        type="date"
                        name="birthday"
                        placeholder="Enter your birthday"
                        value={dataUser.doB ? dataUser.doB : dob}
                        onChange={(e) => {
                          setDob(e.target.value);
                        }}
                      /> */}
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
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className={`${Style.btnSave} mb-3`}>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handleEditProfile}
                    >
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditProfile;
