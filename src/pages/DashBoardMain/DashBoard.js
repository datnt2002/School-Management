import DashCountCate from "../../components/DashBoard/HeaderDash/DashCountCate";
import DashCountEvent from "../../components/DashBoard/HeaderDash/DashCountEvent";
import DashCountIdea from "../../components/DashBoard/HeaderDash/DashCountIdea";
import DashCountUser from "../../components/DashBoard/HeaderDash/DashCountUser";
import React from 'react';
import { apiCount } from "../../api/Api";
import Style from "./dashBoard.module.css"
import { useEffect, useState } from "react";
import DashIdeaPerDepart from "../../components/DashBoard/Charts/DashIdeaPerDepart";
import DashContributes from "../../components/DashBoard/Charts/DashContributes";

function DashBoard({token}) {
    const [numberOf, setNumberOf] = useState([]);
    useEffect(() => {
        fetch(apiCount, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
            return res.json();
        })
        .then((number) => {
            setNumberOf(number);
        })
        .catch(() => console.log("Hoc toan ngu"));
    }, [token])

    return(
        <>
            <div className={`${Style.dash_board} container-fluid mt-5`}>
                <div className="row">
                    <div className="col-3">
                        <DashCountUser numberOf={numberOf}/>
                    </div>
                    <div className="col-3">
                        <DashCountEvent numberOf={numberOf}/>
                    </div>
                    <div className="col-3">
                        <DashCountCate numberOf={numberOf}/>
                    </div>
                    <div className="col-3">
                        <DashCountIdea numberOf={numberOf}/>
                    </div>
                </div>
            </div>
            <div className={`${Style.dash_board} container-fluid mt-5`}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <DashIdeaPerDepart/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${Style.dash_board} container-fluid mt-5`}>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <DashContributes/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DashBoard;