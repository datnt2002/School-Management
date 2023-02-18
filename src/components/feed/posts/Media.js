import Avatar from "./Avatar";
import MediaBody from "./MediaBody";

function Media(){
    return(
        <div className="media">
          <Avatar
            className="mr-2 rounded"
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/146614516_1768473006657991_2851123883348124585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=LUmm1lzU44kAX-qv5s2&tn=7YDAcjGu5PpJ9IVW&_nc_ht=scontent.fhan14-3.fna&oh=00_AfCgbW8g8OCAD_LhNdB0wSyJn2jTpgI82Eexg7lYdTp0YQ&oe=6417F67D"
            alt="Generic placeholder image"
            height="32"
          ></Avatar>
          <div className="media-body">
            <div className="dropdown float-right text-muted">
              <a
                href="#"
                className="dropdown-toggle arrow-none card-drop"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="mdi mdi-dots-horizontal"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0);" className="dropdown-item">
                  Edit
                </a>
                <a href="javascript:void(0);" className="dropdown-item">
                  Delete
                </a>
              </div>
            </div>
            <MediaBody
              User="Jeremy Tomlinson"
              PostTime="about 2 minuts ago"
              Status="Public"
            ></MediaBody>
          </div>
        </div>
    )
}

export default Media;