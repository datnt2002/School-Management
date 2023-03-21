import Style from "./profile.module.css";

function NoOfIdea() {
  return (
    <div className={Style.stats}>
      <p className={`${Style.flex} flex_col`}>Ideas</p>
      <p className={Style.flex}>
        <span className={Style.state_value}>455</span>
      </p>
    </div>
  );
}

export default NoOfIdea;
