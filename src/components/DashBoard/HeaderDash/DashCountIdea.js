
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./dashCount.module.css"

function DashCountIdea({ numberOf }) {
    return(
        <div className={Style.dashCount_idea}>
            <div className={`${Style.card} card`}>
                <div className={`${Style.card_body} card-body`}>
                    <FontAwesomeIcon icon={faLightbulb} className={Style.icon}/>
                    <h6 className="text-uppercase mt-0">Number of Idea</h6>
                    <h2 className={`${Style.text} my-2 pt-1`}>{numberOf.idea}</h2>
                </div>
            </div>
        </div>
    )
}
export default DashCountIdea;