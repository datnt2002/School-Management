import Menu from "../../components/feed/MenuProfile/Menu";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import "./newsFeed.module.css";

function NewsFeed({ token }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-3 leftContent">
            <Menu />
          </div>
          <div className="col-lg-6 centerContent">
            <Post token={token} />
          </div>
          <div className="col-lg-3 rightContent">
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
