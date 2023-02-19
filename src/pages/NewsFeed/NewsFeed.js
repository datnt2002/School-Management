import Menu from "../../components/feed/MenuProfile/Menu";
import Post from "../../components/feed/posts/Post";
import Trending from "../../components/feed/trending/Trending";
import Header from "../../components/header/Header";

function NewsFeed() {
  return (
    <>
      <Header />
      <div className="row">
        <Menu />
        <Trending />
        <Post />
      </div>
    </>
  );
}

export default NewsFeed;
