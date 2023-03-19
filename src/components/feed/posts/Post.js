import React, { useState, useEffect } from "react";

import Profile from "../../profile/Profile";
import { apiIdea } from "../../../api/Api";
import Comment from "./Comment";
import Input from "../../Tags/Input";

function Post({ token }) {
  const [activeCmt, setActiveCmt] = useState("hidden");
  const [dataIdea, setDataIdea] = useState([]);

  function handleActiveCmt() {
    if (activeCmt === "hidden") {
      setActiveCmt("");
    } else {
      setActiveCmt("hidden");
    }
  }

  console.log(token);
  useEffect(() => {
    fetch(apiIdea, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
    console.log("idea", dataIdea);
  }, []);

  return (
    <>
      {dataIdea.map((dataIdea) => {
        return (
          <div className="news-post" key={dataIdea.id}>
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
                {/* <Comment activeCmt={activeCmt}/> */}
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
    </>
  );
}

export default Post;
