import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Style from "./showGoToTop.module.css";
function ShowGotoTop() {
    const [showGotoTop, setShowToTop] = useState(false);
    //show go to top
    useEffect(() => {
        function handleScroll() {
            if(window.scrollY >= 150){
                setShowToTop(true);
                const goTop = document.getElementById("GoTop")
                goTop.setAttribute("style", "width: 40px; border-top-left-radius:0; border-bottom-left-radius:0")
            } 
            else{
                setShowToTop(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])

    return(
        <>
            {showGotoTop && (
                <a href="#" className={Style.gotop} id="GoTop" >
                    <FontAwesomeIcon icon={faChevronUp}/>
                </a>
            )}
        </>
    );
}
export default ShowGotoTop;