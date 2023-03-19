import Style from "./trending.module.css"

function Trending() {
  return (
    <div class={Style.card}>
      <div class={Style.content}>
        <div class={Style.front}>
          <h3 class={Style.title}>Trending</h3>
        </div>
        <div class={Style.back}>
          <div className={`${Style.description}`}>
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes: </strong>
              <span className="text-muted">
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
          <div className={`${Style.description}`}>
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes: </strong>
              <span className="text-muted">
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
          <div className={`${Style.description}`}>
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes: </strong>
              <span className="text-muted">
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
