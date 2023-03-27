import { useContext, useEffect, useState } from "react";
import { apiCountIdeaByUser } from "../../api/Api";
import UserContext from "../../api/UserContext";
import Style from "./profile.module.css";

function NoOfIdea({ token }) {
  const [noOfIdea, setNoOfIdea] = useState();

  const user = useContext(UserContext);
  console.log(user);
  const userId = user.userId;
  useEffect(() => {
    fetch(apiCountIdeaByUser + "/" + userId, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        return res.text();
      })
      .then((number) => {
        setNoOfIdea(number);
      })
      .catch(() => console.log("k dem dc"));
  }, [token, userId]);

  return (
    <div className={Style.stats}>
      <p className={`${Style.flex} flex_col`}>Ideas: </p>
      <p className={Style.flex}>
        <span className={Style.state_value}>{noOfIdea}</span>
      </p>
    </div>
  );
}

export default NoOfIdea;
