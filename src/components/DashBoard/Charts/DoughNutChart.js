import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughNutChart({ chartData }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: { font: { size: 18 } },
      },
      title: {
        display: true,
        text: "Idea per Category Chart",
        font: { size: 26 },
      },
    },
  };

  return <div className="card" id="dough_nut"><Doughnut data={chartData} options={options} /></div>
}

export default DoughNutChart;
