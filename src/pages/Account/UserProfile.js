import { useContext } from "react";

import Profile from "../../components/profile/Profile";
import MyIdea from "./MyIdea";
import MyExp from "./MyExp";
import UserContext from "../../api/UserContext";

import "./editProfile.css";
import Style from "./myExp.module.css";

function UserProfile({ token }) {
  const user = useContext(UserContext);
  return (
    <>
      <section className="userProfile">
        <div className="container-fluid">
          <div className="row">
            <div className="textHeader">
              <h1 style={{ color:"white" }}>My Account</h1>
            </div>
            <div className="col-lg-5">
              <Profile token={token} />
              <div className="card mt-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">User Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.userName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phone}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Department</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.department}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {user.role === "Staff" ? <MyIdea token={token} /> : <MyExp />}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
