import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);


function BlueBoxGraph() {

const labelOneTerritory = 'voluntarios en oficinas';
const labelTwoTerritory = 'voluntarios en comunidades';
const dataOneTerritory = 15;
const dataTwoTerritory = 30;

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
        labels: [`${dataOneTerritory} ${labelOneTerritory} ` , `${dataTwoTerritory} ${labelTwoTerritory}`],
        datasets: [
          {
            data: [dataOneTerritory, dataTwoTerritory],
            backgroundColor: [
              '#0092dd',
              '#68c7ff',             
            ],
            borderColor: [
              '#0092dd',
              '#68c7ff',              
            ],
            borderWidth: 1,
          },
        ],
      };
    return <Doughnut data={data} options={options}/>   
}

export default BlueBoxGraph