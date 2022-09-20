import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetPeople() {

  const labelOne = 'Individuos';
  const labelTwo = 'Empresas';
  const dataOne = 63.7;
  const dataTwo = 36.3;

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
    labels: [`${labelOne}: ${dataOne} %`, `${labelTwo}: ${dataTwo} %`],
    datasets: [
      {
        data: [dataOne, dataTwo],
        backgroundColor: [
          '#70ad47',
          '#b7d78d',
        ],
        borderColor: [
          '#70ad47',
          '#b7d78d',
        ],
        borderWidth: 1,
      },
    ],

  };
  return <Doughnut data={data} options={options} />
}

export default BudgetPeople