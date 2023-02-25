import Menu from "../../components/feed/MenuProfile/Menu";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import "./newsFeed.css";

function NewsFeed() {
  
  
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 left-nav">
            <Menu />
            <Trending />
          </div>
          <div className="col-lg-9 feed-content">
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeed;
