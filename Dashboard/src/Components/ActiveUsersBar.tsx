import { Bar } from 'react-chartjs-2';
import { ActiveUsersData } from './FakeData';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
       } from 'chart.js';

    ChartJS.register(
            CategoryScale,
            LinearScale,
            BarElement,
            Title,
            Tooltip,
            Legend,
            );




 const ActiveUsersBar = () => {
    const options = {}

    return <div className='w-[400px] h-[300px]'><Bar options={options} data={ActiveUsersData} /></div>
 }

 export default ActiveUsersBar;