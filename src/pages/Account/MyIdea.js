import { useContext, useEffect, useState } from "react";
import { apiIdeaByUser } from "../../api/Api";
import UserContext from "../../api/UserContext";
import Post from "../../components/feed/posts/Post";

function MyIdea({ token }) {
  const [dataIdea, setDataIdea] = useState([]);
  const user = useContext(UserContext);
  const userId = user.userId;
  console.log(userId);
  useEffect(() => {
    fetch(apiIdeaByUser + "/" + userId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch(() => {
        console.log("k fetch dc idea");
      });
  }, [token, userId]);

  return (
    <div className="col-lg-7">
      <Post dataIdea={dataIdea} />
    </div>
  );
}
export default MyIdea;
