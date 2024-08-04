
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import './Dashboard.css';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const Dashboard = () => {
    const lineData = {
        labels: ['6/30/2024', '7/7/2024', '7/21/2024'],
        datasets: [
            {
                label: 'Orders',
                data: [1.6, 1.2, 0.8],
                borderColor: 'orange',
                fill: false,
            },
            {
                label: 'Sales',
                data: [1.0, 0.8, 0.6],
                borderColor: 'blue',
                fill: false,
            },
        ],
    };

    const pieData = {
        labels: ['WooCommerce Store', 'Shopify Store'],
        datasets: [
            {
                data: [62.7, 37.3],
                backgroundColor: ['#ff6384', '#36a2eb'],
            },
        ],
    };

    return (
        <div className="dashboard">
            <h2>Sales vs Orders</h2>
            <Line data={lineData} />

            <h2>Portion of Sales</h2>
            <Pie data={pieData} />
        </div>
    );
};

export default Dashboard;
