import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { server } from "../../api/Api";
import UserContext from "../../api/UserContext";
import NoOfIdea from "./NoOfIdeas";
import Style from "./profile.module.css";

function Profile() {
  const user = useContext(UserContext);

  console.log(user);

  return (
    // <div className="media">
    //   <img
    //     className="mr-2 rounded"
    //     src={
    //       user?.avatar
    //         ? user?.avatar
    //         : "https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
    //     }
    //     alt="placeholder"
    //     height="32"
    //   />
    //   <div className="media-body">
    //     <h5 className="mt-1 mb-0">{user?.userName}</h5>
    //     <p className="mb-1 mt-1">{user?.department}</p>
    //   </div>
    // </div>

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
