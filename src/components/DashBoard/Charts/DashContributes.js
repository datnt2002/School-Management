import React, { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Style from "./dashContributes.module.css"

Chart.register(BarElement, BarController, CategoryScale, LinearScale);


function DashContributes() {
  const chartRef2 = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef2.current.getContext('2d');
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['IT', 'Marketing', 'Gì đấy'],
        datasets: [
          {
            // label: 'Department A',
            data: [10, 20, 30, 40, 45],
            backgroundColor: '#FF6384',
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
  }, []);

  return (
    <div>
      <canvas ref={chartRef2} className={Style.chart1}/>
    </div>
  );
};

export default DashContributes;
