import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../../components/feed/posts/Comment";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Trending from "../../components/feed/trending/Trending";

import Style from "./newsFeed.module.css";
import { apiIdea, apiIdeaByDetail, server } from "../../api/Api";

function DetailIdea({ token }) {
  const [ideaComment, setIdeaComment] = useState([]);
  const [detailIdea, setDetailIdea] = useState("");
  // function textarea
  function autoHeight() {
    const textarea = document.querySelector("textArea");
    textarea.addEventListener("keydown", autosize);

    function autosize() {
      setTimeout(function () {
        textarea.style.cssText = "height:3.1rem; padding:0; resize:none";
        textarea.setAttribute(
          "style",
          `${"height:" + textarea.scrollHeight + "px"}`
        );
      }, 0);
    }
  }

  const location = useLocation();
  const ideaId = location.state.ideaId;

  useEffect(() => {
    fetch(apiIdea + "/" + ideaId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetailIdea(data);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
  }, [ideaId, token]);

  const handlePostComment = () => {};

  return (
    <div className="container">
      {detailIdea &&
        detailIdea.map((detail) => {
          return (
            <div className="row" style={{ marginTop: "4rem" }}>
              <div className={`col-lg-9 ${Style.centerContent}`}>
                <div className={Style.card}>
                  <div className={Style.media}>
                    <div className={Style.media_body}>
                      <img
                        className="mr-2 rounded"
                        src={server + detail.avatar}
                        alt="placeholder"
                        height="50"
                      />
                      <div style={{ marginLeft: "10px" }}>
                        <h5 className="mt- mb-1">{detail.userName}</h5>
                        <p className="mb-1 mt-1">chua join department</p>
                      </div>
                    </div>
                    <div>
                      <span>{detail.ideaViewed} </span>
                      <span>views</span>
                    </div>
                  </div>

                  <hr />
                  <div
                    className="font-16 text-dark my-3"
                    style={{ overflowWrap: "break-word" }}
                  >
                    <h2 className="my-1">{detail.ideaName}</h2>
                  </div>
                  <div className="font-16 text-dark">
                    <p className={`${Style.content} my-1`}>
                      {detail.ideaContent}
                    </p>
                  </div>

                  <div className="font-16 text-dark">
                    <p className={`${Style.content} my-1`}>
                      Css may cai file phat {detail.ideaFile}
                    </p>
                  </div>

                  <LikeCmt />

                  <hr />
                  <Comment />
                  <div className="media mb-2 reply col-12">
                    <img
                      className="mr-2 rounded"
                      src={server + detail.avatar}
                      alt="placeholder"
                      height="50"
                    />
                    <textarea
                      placeholder="Tạm thế css sau"
                      className="textArea col-12"
                      onClick={autoHeight}
                      style={{ height: "3rem", resize: "none" }}
                      value={ideaComment}
                      onChange={(e) => {
                        setIdeaComment(e.target.value);
                      }}
                    />
                    <button onClick={handlePostComment}>
                      Kiem icon hinh may bay de gui tin nhan
                    </button>
                  </div>
                </div>
              </div>
              <div className={`col-lg-3 ${Style.rightContent}`}>
                <Trending />
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default DetailIdea;
