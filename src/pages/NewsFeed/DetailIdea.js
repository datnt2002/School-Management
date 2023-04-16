import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../../components/feed/posts/Comment";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Trending from "../../components/feed/trending/Trending";

import StyleDetail from "./DetailIdea.module.css";

import Style from "./newsFeed.module.css";
import {
  apiComment,
  apiIdea,
  apiIdeaByDetail,
  apiIdeaDownload,
  server,
} from "../../api/Api";
import { useContext } from "react";
import UserContext from "../../api/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function DetailIdea({ token }) {
  const [ideaComment, setIdeaComment] = useState([]);
  const [detailIdea, setDetailIdea] = useState([]);

  //Anonymous comment
  const [anonymous, setAnonymous] = useState("");

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

  const user = useContext(UserContext);
  const userId = user.userId;

  useEffect(() => {
    fetch(apiIdeaByDetail + "/" + ideaId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data[0].anonymous) {
          data[0].avatar = "/images/Avatar.jpg";
          data[0].userName = "Anonymous";
        }
        setDetailIdea(data);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
  }, [ideaId, token]);

  const handlePostComment = async (e) => {
    e.preventDefault();

    let newComment;
    if (!anonymous) {
      newComment = await {
        content: ideaComment,
        ideaId,
        userId,
        IsAnonymous: false,
      };
    } else {
      newComment = await {
        content: ideaComment,
        ideaId,
        userId,
        IsAnonymous: true,
      };
    }

    await fetch(apiComment, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        return res.text();
      })
      .then(() => {
        setIdeaComment("");
      })
      .catch(() => console.log("loi r"));

    fetch(apiComment + "/" + ideaId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataComment(data);
      });
  };

  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {
    fetch(apiComment + "/" + ideaId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((comment) => {
          if (comment.annonymous) {
            comment.userAvatar = "/images/Avatar.jpg";
            comment.userName = "Anonymous";
          }
        });
        setDataComment(data);
      });
  }, [ideaId, token]);

  const handleDownloadFile = (fileName) => {
    window.location.href = window.location.href.replace(
      window.location.href,
      apiIdeaDownload + "/" + fileName
    );
    // fetch(apiIdeaDownload + "/" + fileName, {
    //   headers: { Authorization: `Bearer ${token}` },
    // }).catch(() => console.log("eo dc"));
  };

  return (
    <div className="container">
      {detailIdea &&
        detailIdea.map((detail) => {
          return (
            <div className="row" style={{ marginTop: "2rem" }} key={detail.id}>
              <div className={`col-lg-9 ${Style.centerContent}`}>
                <div className={`${StyleDetail.Card} card`}>
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
                        <p className="mb-1 mt-1">{detail.departmentName}</p>
                      </div>
                    </div>
                    <div>
                      <span>{detail.viewed} </span>
                      <span>views</span>
                    </div>
                  </div>
                  <hr />
                  <div className="font-16 text-dark my-3">
                    <h5 className="my-1">Category: {detail.categoryName}</h5>
                  </div>
                  <div
                    className="font-16 text-dark my-3"
                    style={{ overflowWrap: "break-word" }}
                  >
                    <h2 className="my-1">{detail.name}</h2>
                  </div>
                  <div className="font-16 text-dark">
                    <p className={`${Style.content} my-1`}>{detail.content}</p>
                  </div>
                  <div className={`${Style.file} mt-5`}>
                    <button
                      className={Style.cssbuttons_io_button}
                      onClick={() => handleDownloadFile(detail.ideaFile)}
                    >
                      <FontAwesomeIcon icon={faFileArrowDown} />
                      <span>{detail.ideaFile}</span>
                    </button>
                  </div>
                  <LikeCmt token={token} ideaId={detail.id} userId={userId} />
                  <hr />
                  <Comment token={token} dataComment={dataComment} />
                  <hr />
                  {/* //comment box */}
                  {detail.eventLastClosure > Date.now() ? (
                    <div></div>
                  ) : (
                    <>
                      <div className="d-flex">
                        <img
                          className={Style.commentAvatar}
                          src={server + user.avatar}
                          alt="placeholder"
                          height="50"
                        />
                        <div className={`${Style.commentBox}`}>
                          <textarea
                            placeholder="Enter Comment"
                            className={`${Style.textArea}`}
                            onClick={autoHeight}
                            style={{ height: "3rem", resize: "none" }}
                            value={ideaComment}
                            onChange={(e) => {
                              setIdeaComment(e.target.value);
                            }}
                          />
                          <button
                            className={Style.commetBtn}
                            onClick={handlePostComment}
                          >
                            <FontAwesomeIcon icon={faPaperPlane} />
                          </button>
                        </div>
                      </div>
                      <div className={Style.anonumous}>
                        <span>
                          <input
                            type="checkbox"
                            value={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)}
                          />
                          <strong>Anonymous</strong>
                        </span>
                        {/* <Tooltip
                        placement="left"
                        trigger={["hover"]}
                        overlay={
                          <span className={Style.tooltip}>
                            Incognito mode {!anonymous ? "off" : "on"}
                          </span>
                        }
                      >
                        <label>
                          <FontAwesomeIcon
                            icon={!anonymous ? faUser : faUserSecret}
                            style={{ cursor: "pointer" }}
                          />
                          <input
                            type="checkbox"
                            value={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)}
                            style={{ display: "none" }}
                          />
                        </label>
                      </Tooltip> */}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={`col-lg-3 ${Style.rightContent}`}>
                <Trending token={token} />
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default DetailIdea;
