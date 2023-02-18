function ShortCut() {
  return (
    <div className="list-group list-group-flush mt-2">
      <a
        href="javascript:void(0);"
        className="list-group-item list-group-item-action text-primary border-0"
      >
        <i className="uil uil-images mr-1"></i> News Feed
      </a>
      <a
        href="javascript:void(0);"
        className="list-group-item list-group-item-action border-0"
      >
        <i className="uil uil-comment-alt-message mr-1"></i> Messages
      </a>
      <a
        href="javascript:void(0);"
        className="list-group-item list-group-item-action border-0"
      >
        <i className="uil uil-calendar-alt mr-1"></i> Events
      </a>
    </div>
  );
}

export default ShortCut;
