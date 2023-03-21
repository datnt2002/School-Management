import React, { useState, useEffect } from "react";
import Profile from "../../profile/Profile";
import { apiIdea } from "../../../api/Api";
import Comment from "./Comment";
import Input from "../../Tags/Input";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";

function Post({ token }) {
  const [dataIdea, setDataIdea] = useState([]);

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
  }, []);
  console.log(dataIdea);
  return (
    <>
      {dataIdea.map((dataIdea) => {
        return (
          <div className={Style.news_post} key={dataIdea.id}>
            <div className="card-body pb-1">
              <div className={Style.card}>
                <div className={Style.media}>
                  <div className={Style.media_body}>
                    <img
                      className="mr-2 rounded"
                      src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
                      alt="placeholder"
                      height="50"
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <h5 className="mt- mb-1">Join bang user</h5>
                      <p className="mb-1 mt-1">Join</p>
                    </div>
                  </div>
                  <div>
                    <span>{dataIdea.viewed}</span>
                    <span> views</span>
                  </div>
                </div>

                <hr />
                <div className="font-16 text-dark my-3">
                  <h2 className="my-1">{dataIdea.name}</h2>
                </div>
                <div className="font-16 text-dark my-3" style={{ overflowWrap:"break-word" }}>
                  <p className="my-1">{`${dataIdea.content.substring(0, 250)}`}<strong>...</strong><a href="#">Read more</a></p>
                </div>
                <div className="file-group"></div>
                <div className="time-group"></div>

                <hr />

                <div
                  className="my-1 justify-content-between"
                  style={{ display: "flex" }}
                >
                  <p className="text-muted pl-0">{dataIdea.vote} Like</p>
                </div>

                {/* <hr /> */}
                {/* <Comment/> */}
                {/* <div className="media mb-2 reply col-12">
                  <Profile imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D" />
                  <div className="media-body col-11">
                    <Input placeholder="Write a comment" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
