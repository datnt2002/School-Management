import Style from "./weather.module.css"

function Weather() {
    return(
        <div class={Style.card}>
            <div class={Style.container}>
                <div class={`${Style.cloud} ${Style.front}`}>
                <span class={Style.left_front}></span>
                <span class={Style.right_front}></span>
                </div>
                <span class={`${Style.sun} ${Style.sunshine}`}></span>
                <span class={Style.sun}></span>
                <div class={`${Style.cloud} ${Style.back}`}>
                <span class={Style.left_back}></span>
                <span class={Style.right_back}></span>
                </div>
            </div>

            <div class={Style.card_header}>
                <span>Messadine, Susah<br/>Tunisia</span>
                <span>March 13</span>
            </div>

            <span class={Style.temp}>23°</span>

            <div class={Style.temp_scale}>
                <span>Celcius</span>
            </div>
        </div>
    );
}
export default Weather;