import { RavenueData } from './FakeData';

import { Line } from 'react-chartjs-2';
import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
       } from 'chart.js';


       ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
       );



const  RavenueLine = () => {

    const options = {}
 
  return <div className='w-[400px] h-[300px]'><Line options={options} data={RavenueData}/></div>
};

export default RavenueLine;