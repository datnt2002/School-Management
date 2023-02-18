function MediaBody({User, Status, PostTime}){
    return(
        <>
            <h5 className="m-0">{User}</h5>
            <p className="text-muted">
                <small>
                {PostTime} <span className="mx-1">⚬</span>{" "}
                <span>{Status}</span>
                </small>
            </p>
        </>
        
    )
}
export default MediaBody;