import Profile from "../../profile/Profile";
import ShortCut from "./ShortCut";

function Menu() {
  return (
    <div className="col-lg-3 news-menu">
      <Profile
        imageSrc="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
        userName="TM"
        userDepartment="IT"
      />
      <ShortCut />
    </div>
  );
}

export default Menu;
