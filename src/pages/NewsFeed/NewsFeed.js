import Menu from "../../components/feed/MenuProfile/Menu";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import Header from "../../components/header/Header";
import "./newsFeed.css"
import "./header.css"

function NewsFeed() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <Menu />
            <Trending />
          </div>
          <Post />
        </div>
      </div>
    </>
    
  );
}

export default NewsFeed;
