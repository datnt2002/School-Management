import DashCountCate from "../../components/DashBoard/HeaderDash/DashCountCate";
import DashCountEvent from "../../components/DashBoard/HeaderDash/DashCountEvent";
import DashCountIdea from "../../components/DashBoard/HeaderDash/DashCountIdea";
import DashCountUser from "../../components/DashBoard/HeaderDash/DashCountUser";
import React from "react";
import { apiCount, apiIdeaPerCate } from "../../api/Api";
import Style from "./dashBoard.module.css";
import { useEffect, useState } from "react";
import DashIdeaPerDepart from "../../components/DashBoard/Charts/DashIdeaPerDepart";
import DashContributes from "../../components/DashBoard/Charts/DashContributes";
import DashIdeaPerCate from "../../components/DashBoard/Charts/DashIdeaPerCate";
import BarChart from "../../components/DashBoard/Charts/BarChart";
import DoughNutChart from "../../components/DashBoard/Charts/DoughNutChart";
import { Skeleton } from "antd";

function DashBoard({ token }) {
  const Chart_colors = [
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
    "rgb(255, 99, 132)",
    "rgb(54, 162, 235)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(255, 159, 64)",
  ];

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
  }, [token]);

  const dataToTest = [
    {
      id: 1,
      year: 2016,
      ideas: 500,
      department: "IT",
    },
    {
      id: 2,
      year: 2017,
      ideas: 600,
      department: "Business",
    },
    {
      id: 3,
      year: 2018,
      ideas: 700,
      department: "Design",
    },
  ];

  const [barChart, setBarChart] = useState({
    labels: [2016, 2017, 2018],
    datasets: [
      {
        label: "Ideas",
        data: dataToTest.map((data) => {
          return data.ideas;
        }),
        backgroundColor: ["red", "Blue", "green"],
        borderColor: "yellow",
      },
    ],
  });

  const [ideaPerCate, setIdeaPerCate] = useState();
  const [doughNutChart, setDoughNutChart] = useState();

  useEffect(() => {
    fetch(apiIdeaPerCate, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIdeaPerCate(data);
      })
      .catch(() => console.log("api ideaPerCate"));
  }, [token]);

  useEffect(() => {
    if (ideaPerCate) {
      setDoughNutChart({
        labels: ideaPerCate.map((data) => {
          return data.cateName;
        }),
        datasets: [
          {
            label: "cate",
            data: ideaPerCate.map((data) => {
              return data.ideas;
            }),
            backgroundColor: Chart_colors.slice(0, ideaPerCate.length),
          },
        ],
      });
    }
  }, [ideaPerCate]);

  return (
    <div className="dashBoard">
      <div className={`${Style.dash_board} container-fluid mt-5 `}>
        <div className="row">
          <div className="col-3">
            <div className="mb-3">
              <DashCountUser numberOf={numberOf} />
            </div>
            <div className="mb-3">
              <DashCountEvent numberOf={numberOf} />
            </div>
            <div className="mb-3">
              <DashCountCate numberOf={numberOf} />
            </div>
            <div className="mb-3">
              <DashCountIdea numberOf={numberOf} />
            </div>
          </div>
          <div className="col-9">
            <div className="col-6 card">
              {/* <DashIdeaPerDepart /> */}
              <BarChart chartData={barChart} />
            </div>
            <div className="col-6 card">
              {/* <DashContributes /> */}
              {doughNutChart ? (
                <DoughNutChart chartData={doughNutChart} />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
