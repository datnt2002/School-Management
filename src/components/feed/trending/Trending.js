import { useState } from "react";
import Style from "./trending.module.css";
import { useEffect } from "react";
import { apiIdeaSort, apiTrending, server } from "../../../api/Api";
import { useNavigate } from "react-router-dom";

function Trending({ token }) {
  const [listPopular, setListPopular] = useState([]);

  const navigate = useNavigate();

  //list idea most view
  useEffect(() => {
    fetch(apiIdeaSort + "?sortType=mvi", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListPopular(data.slice(0, 3));
      });
  }, [token]);

  const viewIdeaTrending = (id) => {
    navigate("/DetailIdea", { state: { ideaId: id } });
  };

  return (
    <div className={Style.card}>
      <div className={Style.content}>
        <div className={Style.front}>
          <h3 className={Style.title}>Trending</h3>
        </div>
        <div className={Style.back}>
          {listPopular.map((idea) => {
            return (
              <div
                onClick={() => viewIdeaTrending(idea.id)}
                className={Style.description}
                key={idea.id}
              >
                <img src={server + idea.avatar} alt="" height="50" />
                <span className={Style.text_muted}>{idea.userName}</span>
                <div className="mt-1">
                  <strong>{idea.name} </strong>
                  <small>
                    <span className="text-muted">View: {idea.viewed}</span>
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
