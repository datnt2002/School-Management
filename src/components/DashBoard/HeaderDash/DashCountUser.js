import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./dashCount.module.css";

function DashCountUser({ numberOf }) {
    return(
        <div className={Style.dashCount_user}>
            <div className={`${Style.card} card`}>
                <div className={`${Style.card_body} card-body`}>
                    <FontAwesomeIcon icon={faUsers} className={Style.icon}/>
                    <h6 className="text-uppercase mt-0">Number of User</h6>
                    <h2 className={`${Style.text} my-2 pt-1`}>{numberOf.user}</h2>
                </div>
            </div>
        </div>
    );
}
export default DashCountUser;