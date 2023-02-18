
function LikeCmShare({Likes, Comments}){
    return(
        <div className="my-1">
          <a
            href="javascript: void(0);"
            className="btn btn-sm btn-link text-muted pl-0"
          >
            <i className="mdi mdi-heart text-danger"></i> {Likes} Likes
          </a>
          <a
            href="javascript: void(0);"
            className="btn btn-sm btn-link text-muted"
          >
            <i className="uil uil-comments-alt"></i> {Comments} Comments
          </a>
          <a
            href="javascript: void(0);"
            className="btn btn-sm btn-link text-muted"
          >
            <i className="uil uil-share-alt"></i> Share
          </a>
        </div>
    )
}
export default LikeCmShare;