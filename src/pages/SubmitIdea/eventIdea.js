import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEventInDate } from "../../api/Api";

import "../Event/event.css";
// import "./style.css"
import Style from "./eventIdea.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function EventIdea({ token }) {
  const [dataEvent, setDataEvent] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiEventInDate, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setDataEvent(data))
      .catch((err) => console.log("404 r"));
  }, [token]);

  const handleSubmitIdea = (id) => {
    navigate("/createIdea", { state: { eventId: id } });
  };

  return (
    <>
      <div className="container-fluid">
        <div className={Style.event_idea}>
          <div className="row">
            {dataEvent.map((data) => {
              return (
                <div className="col-4 mt-5" key={data.id}>
                  <div
                    className={Style.card}
                    onClick={() => handleSubmitIdea(data.id)}
                  >
                    <h3 className={Style.card__title}>{data.name}</h3>
                    <p className={Style.card__content}>{data.content}</p>
                    <div className={Style.card__date}>
                      <strong className={Style.text}>
                        {data.first_Closure}
                      </strong>{" "}
                      to{" "}
                      <strong className={Style.text}>
                        {data.last_Closure}
                      </strong>
                    </div>
                    <div className={Style.card__arrow}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default EventIdea;
