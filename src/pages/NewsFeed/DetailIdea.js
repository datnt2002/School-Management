
import { useState } from "react";
import Comment from "../../components/feed/posts/Comment";
import LikeCmt from "../../components/feed/posts/LikeCmt";
import Trending from "../../components/feed/trending/Trending";
import Weather from "../../components/optional/Weather";
import Style from "./newsFeed.module.css";

function DetailIdea() {
    const [ideaContent, setIdeaContent] = useState("");
    // function textarea
    function autoHeight() {
        const textarea = document.querySelector("textArea");
        textarea.addEventListener("keydown", autosize);

        function autosize() {
        setTimeout(function () {
            textarea.style.cssText = "height:3.1rem; padding:0; resize:none";
            textarea.setAttribute(
            "style",
            `${"height:" + textarea.scrollHeight + "px"}`
            );
        }, 0);
        }
    }
    return(
        <>
            <div className="container-fluid">
                <div className="row" style={{ marginTop:"4rem" }}>
                    <div className="col-lg-3 leftContent">
                        {/* <Profile/> */}
                        <Trending />
                    </div>
                    <div className="col-lg-6 centerContent">
                        <div className={Style.card}>
                            <div className={Style.media}>
                                <div className={Style.media_body}>
                                    <img
                                        className="mr-2 rounded"
                                        src="https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-15.jpg"
                                        alt="placeholder"
                                        height="50"
                                    />
                                    <div style={{ marginLeft:"10px" }}>
                                    <h5 className="mt- mb-1">TLaD</h5>
                                    <p className="mb-1 mt-1">IT</p>
                                    </div>
                                </div>
                                <div>
                                    <span>2 </span><span>views</span>
                                </div>
                            </div>
                            
                            <hr />

                            <div className="font-16 text-dark p-3">
                                <p className={`${Style.content} my-1`}>overflow-wrap overflow-wrapoverflow-wrapoverflow-wrapoverflow-wrapv v v v overflow-wrap overflow-wrap overflow-wrap v v vv voverflow-wrapsdmaf ádmajwkass  mạ s,admj á,ionw mạkna sdm</p>
                            </div>

                            <hr />

                            <div
                            className="my-1 justify-content-between"
                            style={{ display: "flex" }}
                            >
                            <LikeCmt/>
                            </div>

                            <hr />
                            <Comment/>
                            <div className="media mb-2 reply col-12">
                            <textarea
                                placeholder="Tạm thế css sau"
                                className="textArea col-12"
                                onClick={autoHeight}
                                style={{ height: "3rem", resize: "none" }}
                                value={ideaContent}
                                onChange={(e) => {
                                    setIdeaContent(e.target.value);
                                }}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 rightContent">
                        <Weather/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DetailIdea;