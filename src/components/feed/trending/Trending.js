import Style from "./trending.module.css"

function Trending() {
  return (
    <div className={Style.card}>
      <div className={Style.content}>
        <div className={Style.front}>
          <h3 className={Style.title}>Trending</h3>
        </div>
        <div className={Style.back}>
          <div className={Style.description}>
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes: </strong>
              <span className={Style.text_muted}>
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
          <div className={Style.description}>
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes: </strong>
              <span className={Style.text_muted}>
                The 27 Best moments from the Golden Globe Awards
              </span>
            </a>
          </div>
          <div className={Style.description}>
            <a className="mt-1 font-14" href="javascript:void(0);">
              <strong>Golden Globes: </strong>
              <span className={Style.text_muted}>
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
