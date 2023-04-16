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

  //Stacked bar chart
  const [ideaPerYear, setIdeaPerYear] = useState();
  const [barChart, setBarChart] = useState();

  useEffect(() => {
    fetch(apiIdeaPerYear, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setIdeaPerYear(data);
      })
      .catch(() => console.log("chet ở idea per year"));
  }, [token]);

  useEffect(() => {
    if (ideaPerYear) {
      const datasets = ideaPerYear[0].iderPerDeps.map((dep, index) => {
        const backgroundColor = Chart_colors[index];

        return {
          label: dep.depName,
          data: ideaPerYear.map((yearData) => {
            return yearData.iderPerDeps[index].ideas;
          }),
          backgroundColor: backgroundColor,
        };
      });

      setBarChart({
        labels: ideaPerYear.map((data) => {
          return data.year;
        }),
        datasets: datasets,
      });
    }
  }, [ideaPerYear]);

  //Doughnut chart
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
              {barChart ? (
                <BarChart chartData={barChart} />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}
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
