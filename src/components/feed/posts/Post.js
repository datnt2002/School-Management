import React, { useState, useEffect, useContext } from "react";
import { server } from "../../../api/Api";
import Style from "../../../pages/NewsFeed/newsFeed.module.css";
import { useNavigate } from "react-router-dom";
import LikeCmt from "./LikeCmt";
import UserContext from "../../../api/UserContext";

function Post({ token, apiUrl, id }) {
  const [dataIdea, setDataIdea] = useState([]);

  const user = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(id ? apiUrl + "/" + id : apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
  }, [apiUrl, token, id]);

  // const handleReadMore = (id) => {
  //   navigate("/DetailIdea", { state: { ideaId: id } });
  // };

  const handleDetail = (id) => {
    console.log(id);
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  return (
    <>
      {/* <div className={Style.arrange}>
        <p>helooo</p>
      </div> */}
      {dataIdea.map((dataIdea) => {
        return (
          <div
            className={Style.news_post}
            key={dataIdea.id}
            onClick={() => handleDetail(dataIdea.id)}
          >
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
                    {dataIdea.content.length > 50 ? (
                      <>
                        {dataIdea.content.substring(0, 50)}
                        <button>Read more</button>
                      </>
                    ) : (
                      dataIdea.content
                    )}
                  </p>
                </div>
                <div className="file-group"></div>

                <hr />
                <div className="d-flex justify-content-between">
                  <span>{dataIdea.vote} Likes</span>
                  <span>{dataIdea.comments} Comments</span>
                </div>
                {/* <LikeCmt userId={user.userId} ideaId={dataIdea.id} /> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Post;
