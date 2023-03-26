import Style from "./loading.module.css"

function Loading() {
    return(
        <>
        <div className="container-fluid create">
            <div className="modalOverlay"></div>
            <div className={Style.spinner}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
        </>
    );
}
export default Loading;