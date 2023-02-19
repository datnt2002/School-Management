function Trending() {
  return (
    <div className="news-trending">
      <div className="card">
        <h4 className="header-title mb-1">Trending</h4>
        <div className="media mt-3">
          <i className="uil uil-arrow-growth mr-2 font-18 text-primary"></i>
          <div className="media-body">
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes:</strong>
              <span className="text-muted">
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
        </div>

        <div className="media mt-3">
          <i className="uil uil-arrow-growth mr-2 font-18 text-primary"></i>
          <div className="media-body">
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>World Cricket:</strong>
              <span className="text-muted">
                India has won ICC T20 World Cup Yesterday
              </span>
            </a>
          </div>
        </div>

        <div className="media mt-3">
          <i className="uil uil-arrow-growth mr-2 font-18 text-primary"></i>
          <div className="media-body">
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Antartica:</strong>
              <span className="text-muted">
                Metling of Totten Glacier could cause high risk to areas near by
                sea
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
