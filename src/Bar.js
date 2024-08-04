
import React from 'react';
import './Bar.css';

const Bar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li>Inventory</li>
                <li>Orders</li>
                <li>Returns</li>
                <li>Customers</li>
                <li>Shipping</li>
                <li>Channel</li>
                <li>Integrations</li>
                <li>Calculations</li>
                <li>Reports</li>
                <li>Account</li>
            </ul>
        </div>
    );
};

export default Bar;
