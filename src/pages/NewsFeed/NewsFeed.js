import { apiIdea } from "../../api/Api";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import ShowGotoTop from "../../components/optional/ShowGotoTop";
import Weather from "../../components/optional/Weather";
import Profile from "../../components/profile/Profile";
import Style from "./newsFeed.module.css";
import React, { lazy, Suspense, useState } from "react";
import { apiIdeaSort } from "../../api/Api";
import Sort from "../../components/DropDownSort/Sort";

function NewsFeed({ token }) {
  // const Post = lazy(() => import("../../components/feed/posts/Post"));
  const [dataIdea, setDataIdea] = useState([]);
    const [selectedOption, setSelectedOption] = useState('--Please choose an option--');
    function handleSelect(eventKey) {
        let sortType = "";
        switch (eventKey) {
        case "Most Likes":
            sortType = "mpi";
            break;
        case "Most Views":
            sortType = "mvi"; 
            break;
        case "Newest":
            sortType = "lid";
            break;
        default:
            break;
        }
    
        fetch(apiIdeaSort + "?sortType=" + sortType, {
        headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.json())
        .then((data) => {
            setDataIdea(data);
        })
        .catch(() => {
            console.log("Error retrieving sorted data from the API.");
        });
        setSelectedOption(eventKey);
    }
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className={`col-lg-3 ${Style.leftContent}`}>
            {/* <Profile/> */}
            <Trending token={token} />
          </div>
          <div className={`col-lg-6 ${Style.centerContent}`}>
            <Sort token={token} handleSelect={handleSelect} />
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <Post token={token} apiUrl={apiIdea} />
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
