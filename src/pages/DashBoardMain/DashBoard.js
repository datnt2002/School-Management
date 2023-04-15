import DashCountCate from "../../components/DashBoard/HeaderDash/DashCountCate";
import DashCountEvent from "../../components/DashBoard/HeaderDash/DashCountEvent";
import DashCountIdea from "../../components/DashBoard/HeaderDash/DashCountIdea";
import DashCountUser from "../../components/DashBoard/HeaderDash/DashCountUser";
import React from "react";
import { apiCount, apiIdeaPerCate, apiIdeaPerYear } from "../../api/Api";
import Style from "./dashBoard.module.css";
import { useEffect, useState } from "react";

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

  // 
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

  // 
  // const dataToTest = [
  //   {
  //     id: 1,
  //     year: 2016,
  //     ideas: 500,
  //     department: "IT",
  //   },
  //   {
  //     id: 2,
  //     year: 2017,
  //     ideas: 600,
  //     department: "Business",
  //   },
  //   {
  //     id: 3,
  //     year: 2018,
  //     ideas: 700,
  //     department: "Design",
  //   },
  // ];
  const [ideaPerYear, setIdeaPerYear] = useState();

  useEffect(() => {
    fetch(apiIdeaPerYear, {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then((res) => res.json())
      .then((data) => {
        setIdeaPerYear(data);
      })
      .catch(() => console.log("chet ở idea per year"));
  }, [token]);

  const [barChart, setBarChart] = useState({
    labels: [],
    datasets: [
      {
        label: "Ideas",
        data: [],
        backgroundColor: Chart_colors.slice(0, apiIdeaPerYear.length),
        borderColor: "yellow",
      },
    ],
  });

  useEffect(() => {
    if (ideaPerYear) {
      setBarChart((prevChart) => ({
        ...prevChart,
        labels: ideaPerYear.map((data) => data.year),
        datasets: [
          {
            ...prevChart.datasets[0],
            label: ideaPerYear.map((data) => data.iderPerDeps.map((dep) => dep.depName)),
            data: ideaPerYear.map((data) => {
              return data.iderPerDeps.map((dep) => {
                return dep.ideas;
              });
            })
          },
        ],
      }));
    }
  }, [ideaPerYear]);


  
  // const [barChart, setBarChart] = useState();

  
  // useEffect(() => {
  //   if (ideaPerYear) {
  //     setBarChart({
  //       labels: ideaPerYear.map((data) => {
  //         return data.year;
  //       }),
  //       datasets: [
  //         {
  //           label: "Ideas",
  //           data: ideaPerYear.map((data) => {
  //             return data.iderPerDeps.map((dep) => {
  //               return dep.ideas;
  //             });
  //           }),
  //           backgroundColor: ["red", "Blue", "green"],
  //           borderColor: "yellow",
  //         },
  //       ],
  //     });
  //   }
  // }, [ideaPerYear])
  

  // 
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
            label: "Idea",
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
