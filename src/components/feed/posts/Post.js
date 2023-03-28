import React, { useState, useEffect } from "react";
import Profile from "../../profile/Profile";
import { apiIdea, server } from "../../../api/Api";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import { useNavigate } from "react-router-dom";
import LikeCmt from "./LikeCmt";

function Post({ token, idIdea }) {
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
  };
  console.log(dataIdea);

  if(dataIdea === null){
    return <div><h1>No Idea</h1></div>
  }

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
                      src={server + dataIdea.avatar}
                      alt="placeholder"
                      height="50"
                    />
                    <div style={{ marginLeft: "10px" }}>
                      <h5 className="mt- mb-1">{dataIdea.userName}</h5>
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
                <div
                  className="font-16 text-dark my-3"
                  style={{ overflowWrap: "break-word" }}
                >
                  <p className="my-1">
                    {`${dataIdea.content.substring(0, 250)}`}
                    <button onClick={() => handleReadMore(dataIdea.id)}>
                      Read more
                    </button>
                  </p>
                </div>
                <div className="file-group"></div>
                <div className="time-group"></div>

                <hr />

                <LikeCmt />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
