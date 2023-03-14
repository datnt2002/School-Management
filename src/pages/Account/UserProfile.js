import { createContext, useEffect, useState } from "react";
import { apiProfile } from "../../api/Api";
import Profile from "../../components/profile/Profile";
import "./account.css";
import Input from "../../components/Tags/Input";
import { apiIdea } from "../../api/Api";
import Comment from "../../components/feed/posts/Comment";
import { Link } from "react-router-dom";

function UserProfile({ token, handleSetUserGlobal }) {
  const [dataUser, setDataUser] = useState([]);
  const [activeCmt, setActiveCmt] = useState("hidden");
  const [dataIdea, setDataIdea] = useState([]);

  useEffect(() => {
    fetch(apiProfile, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {setDataUser(data)
      handleSetUserGlobal(data)})
      .catch((err) => console.log("404 getprofile"));
  }, []);

  function handleActiveCmt() {
    if (activeCmt === "hidden") {
      setActiveCmt("");
    } else {
      setActiveCmt("hidden");
    }
  }

  useEffect(() => {
    const fetchDataIdea = async () => {
      const response = await fetch(apiIdea);
      const json = await response.json();
      setDataIdea(json);
    };
    fetchDataIdea();
  }, []);

  // console.log(dataUser);
  return (
    <>
      <section className="userProfile">
        <div className="container-fluid">
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
                    <Link
                      type="button"
                      className="btn btn-outline-primary ms-1"
                      to="/editProfile"
                    >
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
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
            <div className="col-lg-8">
              {dataIdea.map((dataIdea) => {
                return (
                  <div
                    className="news-post"
                    key={dataIdea.id}
                    style={{ padding: "0" }}
                  >
                    <div className="card-body pb-1">
                      <div className="card">
                        <Profile
                          imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
                          alt="image"
                          userName="Jeremy Tomlinson"
                        />

                        <hr />

                        <div className="font-16 text-dark my-3">
                          <p className="my-1">{dataIdea.content}</p>
                        </div>
                        <div className="file-group"></div>
                        <div className="time-group"></div>

                        <hr />

                        <div
                          className="my-1 justify-content-between"
                          style={{ display: "flex" }}
                        >
                          <a
                            href="javascript: void(0);"
                            className="btn btn-sm btn-link text-muted pl-0"
                          >
                            <i className="mdi mdi-heart text-danger"></i>{" "}
                            {dataIdea.vote} Like
                          </a>
                          <a
                            onClick={handleActiveCmt}
                            className="btn btn-sm btn-link text-muted"
                          >
                            <i className="uil uil-comments-alt"></i> Comment
                          </a>
                        </div>

                        <hr />
                        <Comment activeCmt={activeCmt} />
                        <div className="media mb-2 reply col-12">
                          <Profile imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D" />
                          <div className="media-body col-11">
                            <Input placeholder="Write a comment" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
