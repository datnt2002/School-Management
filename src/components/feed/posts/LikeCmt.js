function LikeCmt({ likes, comments }) {
  return (
    <div className="my-1 justify-content-between" style={{ display: "flex" }}>
      <a
        href="javascript: void(0);"
        className="btn btn-sm btn-link text-muted pl-0"
      >
        <i className="mdi mdi-heart text-danger"></i> {likes} Like
      </a>
      <a onClick={handleActiveCmt} className="btn btn-sm btn-link text-muted">
        <i className="uil uil-comments-alt"></i> Comment
      </a>
    </div>
  );
}
export default LikeCmt;
