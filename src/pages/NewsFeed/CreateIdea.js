import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { apiCategory, apiIdea } from "../../api/Api";
import Input from "../../components/Tags/Input";
import Event from "../Event/Event";
import "./newsFeed.css"
import "../../components/Tags/select.css"

function CreateIdea(){
    const [categories, setCategories] = useState([]);

    const [cateId, setCateId] = useState(0);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");

    // console.log(cateId);
    //show list categories
    useEffect(() => {
        fetch(apiCategory)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
    const navigate = useNavigate();
    //handle submit event
    const handleCreateIdea = (e) => {
        e.preventDefault();

        const newEvent = { name, content, cateId, file };

        fetch(apiIdea, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
        })
        .then((res) => res.json())
        .then((data) => {
            navigate("/NewsFeed");
        })
        .catch((err) => console.log("cannot Post Event"));
    };

    // function textarea
    function autoHeight() {
        const textarea = document.querySelector("textArea");
        textarea.addEventListener('keydown', autosize);
        
        function autosize(){
        setTimeout(function(){
            textarea.style.cssText = 'height:11.8rem; padding:0';
            textarea.setAttribute("style", `${'height:' + textarea.scrollHeight + 'px'}`);
        },0);
        }
    }

    return(
        <>
            <section className="userProfile">
            <div className="container py-5">
                <div className="userProfile_header col">
                    <h1>Create New Idea</h1>
                </div>
                <div className="row">
                    <div>
                        <Input 
                            id="event"
                            type="text"
                            name="event"
                            label="Event"
                            disabled="disable"
                        />
                    </div>
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            {/* lấy name của event */}
                            <div>
                                <Input 
                                    id="title"
                                    type="text"
                                    name="title"
                                    placeholder="Title"
                                    // onChange={(e) => setFirstClosure(e.target.value)}
                                    label="Title"
                                />
                            </div>
                            {/* fetch data category */}
                            <div className="createFormIdea_Select" style={{ overflow:"hidden" }}>
                            <label className="form-label">Category</label>
                                <div className="mb-3 select">
                                    <select
                                        onChange={(e) => setCateId(e.target.value)}
                                    >
                                        <option value="0" key="0">Please enter category</option>
                                        {categories.map((category) => {
                                        return (
                                            <>
                                            <option value={category.id} key={category.id}>
                                                {category.name}
                                            </option>
                                            </>
                                        );
                                    })}
                                    </select>
                                </div>
                                <div className="">
                                    <label className="form-label">Drop files here or click to upload</label>
                                    <div className="">
                                        <div className="fileUploadInput">
                                            <input type="file" 
                                                // onChange={(e) => setFirstClosure(e.target.value)}
                                            />
                                            <button>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h1>Content</h1>
                                <div className="Content">
                                    <textarea placeholder="Type your content"  className="textArea col-12" style={{ height:"11.7rem", resize:"none" }} onClick={autoHeight}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* <Routes>
                <Route path="/NewsFeed" element={<New />}>
                {" "}
                </Route>
            </Routes> */}
        </>
    )
}

export default CreateIdea;