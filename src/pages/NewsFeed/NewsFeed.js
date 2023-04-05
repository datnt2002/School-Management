import { apiIdea } from "../../api/Api";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import ShowGotoTop from "../../components/optional/ShowGotoTop";
import Weather from "../../components/optional/Weather";
import Style from "./newsFeed.module.css";
import React, { lazy, Suspense } from "react";
import Sort from "../../components/DropDownSort/Sort";
import SearchBar from "../../components/Search/SearchBar";
import { useState, useEffect } from "react";

function NewsFeed({ token }) {
  // const Post = lazy(() => import("../../components/feed/posts/Post"));
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
  }, [token]);
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className={`col-lg-3 ${Style.leftContent}`}>
            {/* <Profile/> */}
            <Trending token={token} />
          </div>
          <div className={`col-lg-6 ${Style.centerContent}`}>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Sort token={token} setDataIdea={setDataIdea} />
            <SearchBar token={token} setDataIdea={setDataIdea} />
            <Post
              // token={token}
              // apiUrl={apiIdea}
              dataIdea={dataIdea}
              // setDataIdea={setDataIdea}
            />
            {/* </Suspense> */}
          </div>
          <div className={`col-lg-3 ${Style.rightContent}`}>
            <Weather />
          </div>
        </div>
        <ShowGotoTop />
      </div>
    </>
  );
}

export default NewsFeed;
