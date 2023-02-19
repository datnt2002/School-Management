function LikeCmt({ likes, comments }) {
  return (
    <div className="my-1">
      <a
        href="javascript: void(0);"
        className="btn btn-sm btn-link text-muted pl-0"
      >
        <i className="mdi mdi-heart text-danger"></i> {likes} Likes
      </a>
      <a href="javascript: void(0);" className="btn btn-sm btn-link text-muted">
        <i className="uil uil-comments-alt"></i> {comments} Comments
      </a>
    </div>
  );
}
export default LikeCmt;
