import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { apiEvent } from "../../api/Api";

import "../Event/event.css";
// import "./style.css"
import Style from "./eventIdea.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function EventIdea({ token }) {
  const [dataEvent, setDataEvent] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiEvent, {
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
                return(
                  <div className="col-4 mt-5" key={data.id}>
                    <div className={Style.card} onClick={() =>handleSubmitIdea(data.id)}>
                      <h3 className={Style.card__title}>{data.name}</h3>
                      <p className={Style.card__content}>{data.content}</p>
                      <div className={Style.card__date}>
                        <strong className={Style.text}>{data.first_Closure}</strong> to <strong className={Style.text}>{data.last_Closure}</strong>
                      </div>
                      <div className={Style.card__arrow}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                        </svg> */}
                        <FontAwesomeIcon icon={faArrowRight}/>
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
