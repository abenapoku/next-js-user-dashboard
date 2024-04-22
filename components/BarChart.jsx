import React, {useState, useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import {
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() =>{
        setChartData({
            labels: ['Mon', 'Tues', 'Wed','Thurs','Fri','Sat','Sun'],
            datasets: [{
                label: 'Sales $',
                data: [16384, 25729, 17927, 26483, 16403, 16628, 24335],
                borderColor: 'rgb(255,219,88)',
                backgroundColor: 'rgb(255, 219, 99, 0.4)'
        },
    ]
        })
        setChartOptions({
            plugins:{
                legend: {
                    position: 'top',
                },
                title: {
                        display: true,
                        text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    },[])

    return (
       <>
       <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions}/>
       </div>
       </>
    );
};

export default BarChart;
