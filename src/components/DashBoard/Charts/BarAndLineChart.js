import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarAndLineChart({ chartData }) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return <div className="card" id="line_chart"><Bar data={chartData} options={options}/>;</div>
}

export default BarAndLineChart;
