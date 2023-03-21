import React, { useState, useEffect } from "react";
import Profile from "../../profile/Profile";
import { apiIdea } from "../../../api/Api";
import Comment from "./Comment";
import Input from "../../Tags/Input";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import { useNavigate } from "react-router-dom";

function Post({ token }) {
  const [dataIdea, setDataIdea] = useState([]);
  const navigate = useNavigate();
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
  const handleReadMore = (id) => {
    navigate("/DetailIdea", { state: { ideaId: id } });
  }
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
                  <p className="my-1">{`${dataIdea.content.substring(0, 250)}`}<strong>...</strong><button onClick={() => handleReadMore(dataIdea.id)}>Read more</button></p>
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
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
