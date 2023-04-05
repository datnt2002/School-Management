import React, { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Style from "./dashIdeaPerDepart.module.css"


Chart.register(BarElement, BarController, CategoryScale, LinearScale);


function DashIdeaPerDepart() {
  const chartRef1 = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef1.current.getContext('2d');
    let chart1 = new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['2020', '2021', '2022', '2023'],
        datasets: [
          {
            label: 'Department A',
            data: [10, 20, 30, 40, 45],
            backgroundColor: '#FF6384',
          },
          {
            label: 'Department B',
            data: [15, 25, 35, 45, 50],
            backgroundColor: '#36A2EB',
          },
          {
            label: 'Department C',
            data: [20, 30, 40, 50, 55],
            backgroundColor: 'red',
          },
          {
            label: 'Department D',
            data: [25, 35, 45, 55, 60],
            backgroundColor: 'green',
          },
        ],
      },
      options: {
        scales: {
          y: {
                beginAtZero: true,
            },
        },
      },
    });
    return () => {
      chart1.destroy();
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef1} className={Style.chart1}/>
    </div>
  );
};

export default DashIdeaPerDepart;
