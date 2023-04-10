import React, { useState, useEffect, useContext } from "react";
import { server } from "../../../api/Api";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import "./dropDown.css";
import { useNavigate } from "react-router-dom";

import UserContext from "../../../api/UserContext";

function Post({ token, apiUrl, id, dataIdea }) {
  const navigate = useNavigate();

  const handleDetail = (id) => {
    console.log(id);
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  console.log(dataIdea);
  return (
    <>
      {dataIdea.map((dataIdea) => {
        return (
          <div
            className={Style.news_post}
            key={dataIdea.ideaId}
            onClick={() => handleDetail(dataIdea.id)}
          >
            <div className="card-body">
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
                      <p className="mt- mb-1 font-18">
                        {dataIdea.departmentName}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span>{dataIdea.viewed}</span>
                    <span> views</span>
                  </div>
                </div>

                <hr />
                <div className="font-16 text-dark my-3"  style={{ overflowWrap: "break-word" }}>
                  <h2 className="my-1">{dataIdea.name}</h2>
                </div>
                <div
                  className="font-16 text-dark my-3"
                  style={{ overflowWrap: "break-word" }}
                >
                  <p className="my-1">
                    {dataIdea.content.length > 150 ? (
                      <>
                        {dataIdea.content.substring(0, 150)}
                        <button> ...Read more</button>
                      </>
                    ) : (
                      dataIdea.content
                    )}
                  </p>

                </div>
                <div className="file-group"></div>

                <hr />
                <div className="d-flex justify-content-between">
                  <span>{dataIdea.vote} Votes</span>
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
