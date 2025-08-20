import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
       } from 'chart.js'

         ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
       );

       const CryptoLine = () => {
       const [prices, setPrices] = useState<number[]>([]);
       const [labels, setLabels] = useState<string[]>([]);

        
        useEffect(() => {
            fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7")
        .then((res) => res.json())
        .then((data) => {
            const priceData = data.prices((p: [number, number]) => p[1]);
            const dataLabels = data.prices((p: [number, number]) => 
            new Date(p[0]).toLocaleDateString()
        );

        setPrices(priceData);
        setLabels(dataLabels);
        });
        }, []);

        const chartData = {
            labels,
            datasets: [
                {
                    label: "Bitcoin (USD)",
                    data: prices,
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgb(75, 192, 192)",
                },
            ],
        };

        const options = {
            responsive: true,
            plugins: {
                legend: {
                    position: "top" as const,
                },
                title: {
                    display: true,
                    text: "Bitcoin Price (Last 7 Days)",
                },
            },
        };



        return <Line options={options} data={chartData}  />
       };

       export default CryptoLine;