import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { apiCategory, apiIdea } from "../../api/Api";
import Input from "../../components/Tags/Input";
import Event from "../Event/Event";

function CreateIdea(){
    const [categories, setCategories] = useState([]);

    const [cateId, setCateId] = useState(0);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState("");

    console.log(cateId);
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

    return(
        <>
            <div className="container createIdea">
                <div className="modalIdea">
                    <div className="createFormIdea">
                        <div className="createFormIdea_Header">
                            <h1>Create New Idea</h1>
                            <div className="createFormIdea_Event">
                                <label className="form-label">Event</label>
                                <input className="form-control" disabled/>
                            </div>
                        </div>
                        <form className="createFormIdea_Input">
                            <div className="mb-5">
                                <Input
                                label="Title"
                                className="form-control"
                                onSetState={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3 mt-5">
                                <textarea
                                    label="Description"
                                    className="form-control"
                                    onSetState={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <div className="mt-3 mb-3 createFormIdea_Select" style={{ overflow:"hidden" }}>
                                <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-control"
                                    onChange={(e) => setCateId(e.target.value)}
                                >
                                    <option value="0" key="0">---Please enter category---</option>
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
                                        <label className="form-label">Closure date</label>
                                    <div className="">
                                    <input
                                        type="file"
                                        // onChange={(e) => setFirstClosure(e.target.value)}
                                    ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="btnForm d-flex justify-content-evenly">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    // onClick={handleCreateIdea}
                                >
                                    Submit
                                </button>

                                <Link className="btn btn-danger"
                                //  to="/Event"
                                 >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <Routes>
                <Route path="/NewsFeed" element={<New />}>
                {" "}
                </Route>
            </Routes> */}
        </>
    )
}

export default CreateIdea;