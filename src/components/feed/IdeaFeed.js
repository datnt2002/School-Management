import Menu from "./MenuProfile/Menu";
import Post from "./posts/Post";
import Trending from "./trending/Trending";

function IdeaFeed() {
  return (
    <div className="row">
      <Menu />
      <Trending />
      <Post />
    </div>
  );
}

export default IdeaFeed;
