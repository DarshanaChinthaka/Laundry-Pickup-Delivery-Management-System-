import React, { useState, useEffect } from 'react';
import { IoMdSpeedometer } from 'react-icons/io';
import { FaClipboardList, FaMoneyBillWave, FaRoute, FaUser, FaSignOutAlt, FaTruck } from 'react-icons/fa';
// Import the specific view components
import DriverTasksView from '../Modules/Driver/DriverTasks';
import DriverEarningsView from '../Modules/Driver/DriverEarnings';
import DriverProfileView from '../Modules/Driver/DriverProfile';

// --- I. GLOBAL CSS STYLES ---
const injectLinenTechDriverStyles = () => {
    const styleId = 'lt-driver-portal-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        :root {
            --lt-primary-blue: #1A237E; /* Deep Blue */
            --lt-accent-yellow: #FFC107; /* Bright Yellow/Gold accent */
            --lt-success-green: #4CAF50;
            --lt-info-cyan: #00BCD4;
            --lt-light-bg: #f8f9fa;
            --lt-card-bg: #ffffff;
            --lt-text-dark: #333;
        }

        .lt-driver-layout {
            display: flex;
            min-height: 100vh;
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: var(--lt-light-bg);
        }

        /* --- SIDEBAR --- */
        .lt-sidebar {
            width: 250px;
            background-color: var(--lt-primary-blue);
            color: var(--lt-card-bg);
            padding: 20px 0;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
        }
        .lt-logo {
            padding: 0 20px 20px 20px;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--lt-accent-yellow);
            border-bottom: 1px solid #2c388e;
            margin-bottom: 20px;
        }
        .lt-nav-item {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            color: inherit;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .lt-nav-item:hover, .lt-nav-item.active {
            background-color: #2c388e;
            border-left: 5px solid var(--lt-accent-yellow);
            padding-left: 15px;
        }
        .lt-nav-item svg {
            margin-right: 10px;
            font-size: 1.1rem;
        }

        /* --- MAIN CONTENT STYLES --- */
        .lt-main-content {
            flex-grow: 1;
            padding: 30px;
            overflow-y: auto;
        }
        .lt-main-header {
            font-size: 2rem;
            color: var(--lt-primary-blue);
            margin-bottom: 30px;
            font-weight: 600;
        }
        .lt-card {
            background-color: var(--lt-card-bg);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            margin-bottom: 20px;
        }
        .lt-alert {
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-weight: bold;
            display: flex;
            align-items: center;
        }
        .lt-alert-info { background-color: #e3f2fd; color: #1e88e5; }
        .lt-alert-warning { background-color: #fff8e1; color: #ff9800; }
        .lt-alert svg { margin-right: 10px; }

        /* Styles for Summary Card (used in Dashboard/TasksView) */
        .lt-summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .lt-summary-card {
            background-color: var(--lt-card-bg);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
        }
        .lt-card-icon {
            font-size: 2.5rem;
            padding: 15px;
            border-radius: 50%;
            margin-right: 15px;
            color: white;
        }
        .lt-card-content h3 {
            margin: 0 0 5px 0;
            font-size: 1.5rem;
            color: var(--lt-primary-blue);
        }
        .lt-card-content p {
            margin: 0;
            font-size: 0.9rem;
            color: #666;
            font-weight: 500;
        }
        .icon-yellow { background-color: var(--lt-accent-yellow); }
        .icon-cyan { background-color: var(--lt-info-cyan); }
        .icon-green { background-color: var(--lt-success-green); }
    `;
    document.head.appendChild(style);
};

// --- II. NAVIGATION & LAYOUT COMPONENTS ---

const Sidebar = ({ activeTab, setActiveTab }) => (
    <div className="lt-sidebar">
        <div className="lt-logo">LinenTech Driver</div>
        <nav style={{ flexGrow: 1 }}>
            <a
                className={`lt-nav-item ${activeTab === 'Dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('Dashboard')}
            >
                <IoMdSpeedometer /> Dashboard
            </a>
            <a
                className={`lt-nav-item ${activeTab === 'Tasks' ? 'active' : ''}`}
                onClick={() => setActiveTab('Tasks')}
            >
                <FaClipboardList /> Daily Tasks
            </a>
            <a
                className={`lt-nav-item ${activeTab === 'Route' ? 'active' : ''}`}
                onClick={() => setActiveTab('Route')}
            >
                <FaRoute /> My Route
            </a>
            <a
                className={`lt-nav-item ${activeTab === 'Earnings' ? 'active' : ''}`}
                onClick={() => setActiveTab('Earnings')}
            >
                <FaMoneyBillWave /> Earnings
            </a>
            <a
                className={`lt-nav-item ${activeTab === 'Profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('Profile')}
            >
                <FaUser /> Profile
            </a>
        </nav>
        <div style={{ padding: '20px 0', borderTop: '1px solid #2c388e' }}>
            <a className="lt-nav-item" href="#logout">
                <FaSignOutAlt /> Log Out
            </a>
        </div>
    </div>
);

// --- III. MAIN DRIVER DASHBOARD COMPONENT ---

const DriverDashboard = () => {
    // State to manage which view is currently active, simulating routing
    const [activeTab, setActiveTab] = useState('Tasks');

    useEffect(() => {
        injectLinenTechDriverStyles();
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
            case 'Tasks':
                return <DriverTasksView />; // Combines tasks and summary cards
            case 'Route':
                return (
                    <div className="lt-card" style={{ minHeight: '70vh', textAlign: 'center' }}>
                        <FaRoute style={{ fontSize: '4rem', color: '#9e9e9e', marginBottom: '20px' }} />
                        <h3 style={{ color: 'var(--lt-primary-blue)' }}>Live Route & GPS Tracking</h3>
                        <p style={{ color: '#777' }}> This area integrates the live map view showing optimized routes and traffic updates.</p>
                        <div className="lt-alert lt-alert-info">
                            <FaTruck /> Route A-12 is currently active. Next stop: 1.5 miles.
                        </div>
                    </div>
                );
            case 'Earnings':
                return <DriverEarningsView />;
            case 'Profile':
                return <DriverProfileView />;
            default:
                return <div>Select a navigation item from the sidebar.</div>;
        }
    };

    return (
        <div className="lt-driver-layout">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="lt-main-content">
                <h1 className="lt-main-header">{activeTab}</h1>
                {renderContent()}
            </div>
        </div>
    );
};

export default DriverDashboard;