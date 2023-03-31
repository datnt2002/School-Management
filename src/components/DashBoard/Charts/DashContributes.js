import React, { useRef, useEffect } from 'react';
import { Chart, LineElement, LineController, PointElement, LinearScale, Title } from 'chart.js';
import Style from "./dashContributes.module.css"

Chart.register( LineElement, LineController, PointElement, LinearScale, Title );


function DashContributes() {
  const chartRef2 = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef2.current.getContext('2d');
    let chart2 = new Chart(myChartRef, {
      type: 'line',
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
          x: {
            type: 'category',
            labels: ['IT', 'Marketing', 'Gì đấy']
          },
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'My Chart Title'
          }
        }
      },
    });
    return () => {
      chart2.destroy();
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef2} className={Style.chart1}/>
    </div>
  );
};

export default DashContributes;
