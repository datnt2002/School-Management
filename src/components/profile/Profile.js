import { useContext } from "react";
import { Link } from "react-router-dom";
import { server } from "../../api/Api";
import UserContext from "../../api/UserContext";
import NoOfIdea from "./NoOfIdeas";
import Style from "./profile.module.css";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div className={Style.card}>
      <div className={Style.infos}>
        {/* <div className={Style.image}></div> */}
        <img
          className={Style.image}
          src={server + user?.avatar}
          alt="placeholder"
          height="32"
        />
        <div className={Style.info}>
          <div>
            <p className={Style.name}>{user?.userName}</p>
            <p className={Style.function}>{user?.department}</p>
          </div>
          {user.role === "Staff" && <NoOfIdea />}
        </div>
      </div>
      <Link className={Style.request} type="button" to="/editProfile">
        Edit Profile
      </Link>
    </div>
  );
}

export default Profile;
