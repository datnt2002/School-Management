import "./Nav.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Logo
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <span class="account-user-avatar">
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
            alt="user-image"
            class="rounded-circle"
          />
        </span>
        <span>
          <span class="account-user-name">Dominic Keller</span>
          <span class="account-position">Founder</span>
        </span>
      </div>
    </nav>
  );
}
export default Header;
