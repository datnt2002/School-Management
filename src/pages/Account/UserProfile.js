import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Profile from "../../components/profile/Profile";
import "./account.css";
import Input from "../../components/Tags/Input";
import { apiIdea } from "../../api/Api";
import Comment from "../../components/feed/posts/Comment";
import MyIdea from "./MyIdea";

function UserProfile({ dataUser, token }) {
  return (
    <>
      <section className="userProfile">
        <div className="container-fluid">
          <div className="row">
            <div className="textHeader">
              <h1 style={{ fontSize: "3.5rem" }}>My Account</h1>
            </div>
            <div className="col-lg-5">
              {/* <div className="card-body text-center">
                <img
                  src={
                    dataUser.avatar
                      ? dataUser.avatar
                      : "https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
                  }
                  alt="avatar"
                  className="rounded-circle img-fluid"
                />
                <h5 className="my-3">{dataUser.userName}</h5>
                <p className="text-muted mb-1">{dataUser.role}</p>
                <div className="d-flex justify-content-center mb-2">
                  <Link
                    type="button"
                    className="btn btn-outline-primary ms-1"
                    to="/editProfile"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div> */}
              <Profile />
              <div className="card mt-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">User Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.userName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.phone}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Department</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.department}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{dataUser.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <MyIdea token={token} /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
