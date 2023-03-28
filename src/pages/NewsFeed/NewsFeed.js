import { apiIdea } from "../../api/Api";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import Weather from "../../components/optional/Weather";
import "./newsFeed.module.css";

function NewsFeed({ token }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: "4rem" }}>
          <div className="col-lg-3 leftContent">
            <Trending />
          </div>
          <div className="col-lg-6 centerContent">
            <Post token={token} apiUrl={apiIdea} />
          </div>
          <div className="col-lg-3 rightContent">
            <Weather />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
