import { apiIdea } from "../../api/Api";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import ShowGotoTop from "../../components/optional/ShowGotoTop";

import Style from "./newsFeed.module.css";
import React, { lazy, Suspense } from "react";
import Sort from "../../components/DropDownSort/Sort";
import SearchBar from "../../components/Search/SearchBar";
import { useState, useEffect } from "react";

import "./newFeed.css";

function NewsFeed({ token }) {
  const [dataIdea, setDataIdea] = useState([]);

  useEffect(() => {
    fetch(apiIdea, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        data.map((idea) => {
          if (idea.anonymous) {
            idea.avatar = "/images/Avatar.jpg";
            idea.userName = "Anonymous";
          }
        });
        setDataIdea(data);
      })
      .catch(() => {
        console.log("k get dc idea");
      });
  }, [token]);
  return (
    <div id="NewFeedBackG">
      <div className="container-fluid">
        <div className="row">
          <div className={`col-lg-4 ${Style.leftContent}`}>
            <Trending token={token} />
          </div>
          <div className={`col-lg-8 ${Style.centerContent}`}>
            <Sort token={token} setDataIdea={setDataIdea} />
            <SearchBar token={token} setDataIdea={setDataIdea} />
            <Post dataIdea={dataIdea} />
          </div>
        </div>
        <ShowGotoTop />
      </div>
    </div>
  );
}

export default NewsFeed;
