"use client"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({accounts}:DoughnutChartProps) {
    const data = {
        datasets:[
{
label:'Banks',
data:[1234,1231,3111],
backgroundColor:['#023','#000','#2f91fa']

}
        ],
        labels:['Bank 1', 'Bank 2', 'Bank 3']
    }
  return <Doughnut data={data}
  options={
    {
        cutout:'60%',
        plugins:{
            legend: {
                display:false
                }
        }
    }
  }
  /> 
}