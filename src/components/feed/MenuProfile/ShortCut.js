import { Link, Route, Routes } from "react-router-dom";

function ShortCut() {
  return (
    <div className="list-group list-group-flush mt-2">
      <Link
        to="/NewsFeed"
        className="list-group-item list-group-item-action text-primary border-0"
      >
        <i className="uil uil-images mr-1"></i> News Feed
      </Link>
      <Link
        to="/Category"
        className="list-group-item list-group-item-action border-0"
      >
        <i className="uil uil-calendar-alt mr-1"></i> Events
      </Link>
    </div>
  );
}

export default ShortCut;
