import Menu from "../../components/feed/MenuProfile/Menu";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import Weather from "../../components/optional/Weather";
import Profile from "../../components/profile/Profile";
import "./newsFeed.module.css";

function NewsFeed({ token }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ marginTop:"4rem" }}>
          <div className="col-lg-3 leftContent">
            {/* <Profile/> */}
            <Trending />
          </div>
          <div className="col-lg-6 centerContent">
            <Post token={token} />
          </div>
          <div className="col-lg-3 rightContent">
            <Weather/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
