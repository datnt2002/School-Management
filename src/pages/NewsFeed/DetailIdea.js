import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Comment from "../../components/feed/posts/Comment";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Trending from "../../components/feed/trending/Trending";
import Weather from "../../components/optional/Weather";
import Style from "./newsFeed.module.css";
import { apiIdea } from "../../api/Api";

function DetailIdea({ token }) {
  const [ideaContent, setIdeaContent] = useState("");
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

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [vote, setVote] = useState("");
  const [viewed, setViewed] = useState("");
  // const [ideaFile, setIdeaFile] = useState("");

  const location = useLocation();
  const ideaId = location.state.id;
  useEffect(() => {
    fetch(apiIdea + "/" + ideaId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setContent(data.content);
        setVote(data.vote);
        setViewed(data.viewed);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
  }, [ideaId, token]);

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "4rem" }}>
          {/* <div className="col-lg-3 leftContent">
            {/* <Profile/> */}
          {/* <Trending /> */}
          {/* </div>  */}
          <div className="col-lg-9 centerContent">
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
                    <h5 className="mt- mb-1">TLaD</h5>
                    <p className="mb-1 mt-1">IT</p>
                  </div>
                </div>
                <div>
                  <span>{viewed} </span>
                  <span>views</span>
                </div>
              </div>

              <hr />
              <div
                className="font-16 text-dark my-3"
                style={{ overflowWrap: "break-word" }}
              >
                <h2 className="my-1">{name}</h2>
              </div>
              <div className="font-16 text-dark">
                <p className={`${Style.content} my-1`}>{content}</p>
              </div>

              <LikeCmt likes={vote} />

              <hr />
              <Comment />
              <div className="media mb-2 reply col-12">
                <textarea
                  placeholder="Tạm thế css sau"
                  className="textArea col-12"
                  onClick={autoHeight}
                  style={{ height: "3rem", resize: "none" }}
                  value={ideaContent}
                  onChange={(e) => {
                    setIdeaContent(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 rightContent">
            {/* <Weather /> */}
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
}
export default DetailIdea;
