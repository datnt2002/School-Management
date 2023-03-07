import { useEffect, useState } from "react";
import { apiProfile } from "../../api/Api";
import "./account.css";

function UserProfile({ token }) {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetch(apiProfile, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setDataUser(data))
      .catch((err) => console.log("404 getprofile"));
  }, []);
  console.log(dataUser);
  return (
    <>
      <section className="userProfile">
        <div className="container">
          <div className="row" style={{ margin: "6rem" }}>
            <div className="textHeader">
              <h1 style={{ fontSize: "3.5rem" }}>My Account</h1>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={dataUser.Avatar}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">{dataUser.UserName}</h5>
                  <p className="text-muted mb-1">{dataUser.Role}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">User Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.UserName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.Email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.Phone}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Department</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.DepartmentID}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.Address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
