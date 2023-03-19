import Menu from "../../components/feed/MenuProfile/Menu";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import "./newsFeed.css";

function NewsFeed({ token }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-3 left-nav">
            <Menu />
            <Trending />
          </div>
          <div className="col-lg-9 feed-content">
            <Post token={token} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
