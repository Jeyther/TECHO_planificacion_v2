import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetTerritory() {

  const labelOneTerritory = 'Territorio';
  const labelTwoTerritory = 'Administrativos';
  const dataOneTerritory = 52.3;
  const dataTwoTerritory = 47.7;

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          boxWidth: 10,
          usePointStyle: 'true',
          pointStyle: 'circle',
        }
      }
    }
  };

  const data = {
    labels: [`${labelOneTerritory}: ${dataOneTerritory} %`, `${labelTwoTerritory}: ${dataTwoTerritory} %`],
    datasets: [
      {
        data: [dataOneTerritory, dataTwoTerritory],
        backgroundColor: [
          '#ea6d4f',
          '#ffb4a3',
        ],
        borderColor: [
          '#ea6d4f',
          '#ffb4a3',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} options={options} />
}

export default BudgetTerritory