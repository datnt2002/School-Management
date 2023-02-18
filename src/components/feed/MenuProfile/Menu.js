import Profile from "./Profile";
import ShortCut from "./ShortCut";

function Menu() {
  return (
    <div className="col-xl-3 col-lg-6 order-lg-1 order-xl-1">
      <Profile />
      <ShortCut />
    </div>
  );
}

export default Menu;
