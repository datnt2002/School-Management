import { faBoxArchive, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./dashCount.module.css"

function DashCountCate({ numberOf }) {
    return(
        <div className={Style.dashCount_cate}>
            <div className={`${Style.card} card`}>
                <div className={`${Style.card_body} card-body`}>
                    <FontAwesomeIcon icon={faBoxArchive} className={Style.icon}/>
                    <h6 className="text-uppercase mt-0">Number of Cate</h6>
                    <h2 className={`${Style.text} my-2 pt-1`}>{numberOf.cate}</h2>
                </div>
            </div>
        </div>
    );
}
export default DashCountCate;