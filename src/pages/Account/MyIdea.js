import { useEffect, useState } from "react";
import { apiIdea } from "../../api/Api";
import Comment from "../../components/feed/posts/Comment";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Profile from "../../components/profile/Profile";
import Input from "../../components/Tags/Input";
import Style from "../../pages/NewsFeed/newsFeed.module.css";

function MyIdea({ token }) {
  const [activeCmt, setActiveCmt] = useState("hidden");
  const [dataIdea, setDataIdea] = useState([]);

  function handleActiveCmt() {
    if (activeCmt === "hidden") {
      setActiveCmt("");
    } else {
      setActiveCmt("hidden");
    }
  }

  useEffect(() => {
    fetch(apiIdea, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch(() => {
        console.log("k fetch dc idea");
      });
  }, []);

  return (
    <div className="col-lg-7">
      {dataIdea.map((dataIdea) => {
        return (
          <div className={Style.card} key={dataIdea.id}>
            <div className={Style.media}>
              <div className={Style.media_body}>
                <img
                  className="mr-2 rounded"
                  src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
                  alt="placeholder"
                  height="50"
                />
                <div style={{ marginLeft: "10px" }}>
                  <h5 className="mt- mb-1">TLaD</h5>
                  <p className="mb-1 mt-1">IT</p>
                </div>
              </div>
              <div>
                <span>2 </span>
                <span>views</span>
              </div>
            </div>

            <hr />

            <div className="font-16 text-dark p-3">
              <p className={`${Style.content} my-1`}>
                overflow-wrap
                overflow-wrapoverflow-wrapoverflow-wrapoverflow-wrapv v v v
                overflow-wrap overflow-wrap overflow-wrap v v vv
                voverflow-wrapsdmaf ádmajwkass mạ s,admj á,ionw mạkna sdm
              </p>
            </div>

            <hr />

            <div
              className="my-1 justify-content-between"
              style={{ display: "flex" }}
            >
              <LikeCmt />
            </div>

            <hr />
            <Comment />
          </div>
        );
      })}
    </div>
  );
}
export default MyIdea;
