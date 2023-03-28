import { apiIdea } from "../../api/Api";
import LikeCmt from "../../components/feed/posts/LikeCmt";
// import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import ShowGotoTop from "../../components/optional/ShowGotoTop";
import Weather from "../../components/optional/Weather";
import Profile from "../../components/profile/Profile";
import Style from "./newsFeed.module.css";
import React, { lazy, Suspense } from "react";

function NewsFeed({ token }) {
  const Post = lazy(() => import("../../components/feed/posts/Post"));

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className={`col-lg-3 ${Style.leftContent}`}>
            {/* <Profile/> */}
            <Trending />
          </div>
          <div className={`col-lg-6 ${Style.centerContent}`}>
            <Suspense fallback={<div>Loading...</div>}>
              <Post token={token} apiUrl={apiIdea} />
            </Suspense>
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
