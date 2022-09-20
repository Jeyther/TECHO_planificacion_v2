import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import { CircularProgress } from '@material-ui/core';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {

  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        pointStyle: 'circle',
        usePointStyle: true,
      },
    },
  },
};

const labels = ['Aprobación J.D', 'Aprobación P.E.R.S'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Aprobados',
      data: [68, 68],
      borderColor: '#d78e01',
      backgroundColor: '#d78e01',
    },
    {
      label: 'Pendientes',
      data: [32, 32],
      borderColor: '#f8c146',
      backgroundColor: '#f8c146',
    },
  ],
};

function YellowBoxBarId() {
  return <Bar options={options} data={data} />;
}

export default YellowBoxBarId
