import Style from "./weather.module.css"

function Weather() {
    return(
        <div className={Style.card}>
            <div className={Style.container}>
                <div className={`${Style.cloud} ${Style.front}`}>
                <span className={Style.left_front}></span>
                <span className={Style.right_front}></span>
                </div>
                <span className={`${Style.sun} ${Style.sunshine}`}></span>
                <span className={Style.sun}></span>
                <div className={`${Style.cloud} ${Style.back}`}>
                <span className={Style.left_back}></span>
                <span className={Style.right_back}></span>
                </div>
            </div>

            <div className={Style.card_header}>
                <span>Messadine, Susah<br/>Tunisia</span>
                <span>March 13</span>
            </div>

            <span className={Style.temp}>23°</span>

            <div className={Style.temp_scale}>
                <span>Celcius</span>
            </div>
        </div>
    );
}
export default Weather;