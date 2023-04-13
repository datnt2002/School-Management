import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./myExp.module.css";
function MyExp() {
  return ( 
    <div className="col-lg-7 Exp">
      <div className={`${Style.card} card`}>
        <div className={Style.tab_pane} id="aboutme">
          <h3 className={Style.text_uppercase}>
            <FontAwesomeIcon icon={faBriefcase}/>
          </h3>
          <h5>EXPERIENCE</h5>

          <div className={Style.timeline_item}>
            <span className={Style.outline}>
              <span className={Style.center}></span>
            </span>
            <span className={`${Style.role} mt-0 mb-1`}>Lead designer / Developer</span>
            <p className={`${Style.company} font-14`}>
              websitename.com{" "}
              <span className={`${Style.year} ml-2 font-12`}>Year: 2015 - 18</span>
            </p>
            <p className={`${Style.para} text-muted mt-2 mb-0 pb-3`}>
              Everyone realizes why a new common language would be desirable: one
              could refuse to pay expensive translators. To achieve this, it would be
              necessary to have uniform grammar, pronunciation and more common words.
            </p>
          </div>

          <div className={Style.timeline_item}>
            <span className={Style.outline}>
              <span className={Style.center}></span>
            </span>
            <span className={`${Style.role} mt-0 mb-1`}>Senior Graphic Designer</span>
            <p className={`${Style.company} font-14`}>
              Software Inc. <span className={`${Style.year} ml-2 font-12`}>Year: 2012 - 15</span>
            </p>
            <p className={`${Style.para} text-muted mt-2 mb-0 pb-3`}>
              If several languages coalesce, the grammar of the resulting language is
              more simple and regular than that of the individual languages. The new
              common language will be more simple and regular than the existing
              European languages.
            </p>
          </div>

          <div className={Style.timeline_item}>
            <span className={Style.outline}>
              <span className={Style.center}></span>
            </span>
            <span className={`${Style.role} mt-0 mb-1`}>Graphic Designer</span>
            <p className={`${Style.company} font-14`}>
              Coderthemes Design LLP{" "}
              <span className={`${Style.year} ml-2 font-12`}>Year: 2010 - 12</span>
            </p>
            <p className={`${Style.para} text-muted mt-2 mb-0 pb-3`}>
              The European languages are members of the same family. Their separate
              existence is a myth. For science music sport etc, Europe uses the same
              vocabulary. The languages only differ in their grammar their
              pronunciation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyExp;
