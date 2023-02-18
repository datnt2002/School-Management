import "./Nav.css";

function Header() {
    return(
        <div className="navbar-custom topnav-navbar topnav-navbar-dark">
            <div class="container-fluid">

                {/* <!-- LOGO --> */}
                <a href="" className="topnav-logo">
                    <span className="topnav-logo-lg">
                        <img src="assets/images/logo-light.png" alt="" height="16"/>
                    </span>
                    <span className="topnav-logo-sm">
                        <img src="assets/images/logo_sm_dark.png" alt="" height="16"/>
                    </span>
                </a>

                <ul className="list-unstyled topbar-right-menu float-right mb-0">

                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle nav-user arrow-none mr-0" data-toggle="dropdown" id="topbar-userdrop" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <span className="account-user-avatar"> 
                                <img src="assets/images/users/avatar-1.jpg" alt="user-image" className="rounded-circle"/>
                            </span>
                            <span>
                                <span className="account-user-name">Dominic Keller</span>
                                <span className="account-position">Founder</span>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                            {/* <!-- item--> */}
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-circle mr-1"></i>
                                <span>My Account</span>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-account-edit mr-1"></i>
                                <span>Settings</span>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lifebuoy mr-1"></i>
                                <span>Support</span>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-lock-outline mr-1"></i>
                                <span>Lock Screen</span>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="mdi mdi-logout mr-1"></i>
                                <span>Logout</span>
                            </a>

                        </div>
                    </li>

                </ul>
                
                <div className="app-search dropdown">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." id="top-search"/>
                            <span className="mdi mdi-magnify search-icon"></span>
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </div>
                        </div>
        
                    </form>

                    <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                        {/* <!-- item--> */}
                        <div className="dropdown-header noti-title">
                            <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                        </div>

                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-notes font-16 mr-1"></i>
                            <span>Analytics Report</span>
                        </a>

                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-life-ring font-16 mr-1"></i>
                            <span>How can I help you?</span>
                        </a>

                        {/* <!-- item--> */}
                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                            <i className="uil-cog font-16 mr-1"></i>
                            <span>User profile settings</span>
                        </a>

                        {/* <!-- item--> */}
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                        </div>

                        <div className="notification-list">
                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <div className="media">
                                    <img className="d-flex mr-2 rounded-circle" src="assets/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32"/>
                                    <div className="media-body">
                                        <h5 className="m-0 font-14">Erwin Brown</h5>
                                        <span className="font-12 mb-0">UI Designer</span>
                                    </div>
                                </div>
                            </a>

                            {/* <!-- item--> */}
                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <div className="media">
                                    <img className="d-flex mr-2 rounded-circle" src="assets/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32"/>
                                    <div className="media-body">
                                        <h5 className="m-0 font-14">Jacob Deo</h5>
                                        <span className="font-12 mb-0">Developer</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Header;