import { useState } from "react";
import Style from "./trending.module.css";
import { useEffect } from "react";
import { apiTrending } from "../../../api/Api";
import { useNavigate } from "react-router-dom";

function Trending({ token }) {
  const [listPopular, setListPopular] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiTrending, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
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
              <div className={Style.description} key={idea.id}>
                <img src="" alt="join avatar" />
                <span className={Style.text_muted}>
                  {" "}
                  doi join username{idea.userName}
                </span>
                <button
                  className="mt-1 font-14"
                  onClick={() => viewIdeaTrending(idea.id)}
                >
                  <strong>{idea.name} </strong>
                  <span className={Style.text_muted}>Vote: {idea.vote}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Trending;
