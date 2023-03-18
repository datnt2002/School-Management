import { useContext } from "react";
import UserContext from "../../api/UserContext";

function Profile() {
  const user = useContext(UserContext);

  return (
    <div className="media">
      <img
        className="mr-2 rounded"
        src={
          user?.avatar
            ? user?.avatar
            : "https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
        }
        alt="placeholder"
        height="32"
      />
      <div className="media-body">
        <h5 className="mt-1 mb-0">{user?.userName}</h5>
        <p className="mb-1 mt-1">{user?.department}</p>
      </div>
    </div>
  );
}

export default Profile;
