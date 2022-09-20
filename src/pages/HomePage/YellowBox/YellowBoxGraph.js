import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


function YellowBoxGraph() {

  const labelOneObjetivos = 'Armados';
  const labelTwoObjetivos = 'Pendientes';
  const dataOneObjetivos = 52.3;
  const dataTwoObjetivos = 47.;

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
    labels: [`${labelOneObjetivos} ${dataOneObjetivos} % `, `${labelTwoObjetivos} ${dataTwoObjetivos} %`],
    datasets: [
      {
        data: [dataOneObjetivos, dataTwoObjetivos],
        backgroundColor: [
          '#f8c146',
          '#d78e01',
        ],
        borderColor: [
          '#f8c146',
          '#d78e01',
        ],
        borderWidth: 1,

      },
    ],
  };
  return <Doughnut data={data} options={options} />
}

export default YellowBoxGraph