import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Profile from "../../components/profile/Profile";
import "./account.css";
import Input from "../../components/Tags/Input";
import { apiIdea } from "../../api/Api";
import Comment from "../../components/feed/posts/Comment";
import MyIdea from "./MyIdea";
import MyExp from "./MyExp";
import UserContext from "../../api/UserContext";

function UserProfile({ token }) {
  const user = useContext(UserContext);
  return (
    <>
      <section className="userProfile">
        <div className="container-fluid">
          <div className="row">
            <div className="textHeader">
              <h1 style={{ fontSize: "3.5rem" }}>My Account</h1>
            </div>
            <div className="col-lg-5">
              <Profile />
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
