import React, { useState, useEffect } from 'react'; // Added useState
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import { FaTachometerAlt, FaTruck, FaUsers, FaClipboardList, FaChartLine, FaCog, FaSignOutAlt, FaPlus, FaCheckCircle, FaRunning, FaCar, FaTag, FaFileInvoiceDollar, FaDolly } from 'react-icons/fa'; // Added more icons

// Import real admin module components
import ManageCustomers from '../Modules/admin/ManageCustomers';
import ManageOrders from '../Modules/admin/ManageOrders';
import ManageDrivers from '../Modules/admin/ManageDrivers';
import ManageVehicles from '../Modules/admin/ManageVehicles';
import ManageVehicleBookings from '../Modules/admin/ManageVehicleBookings';
import LaundryServices from '../Modules/admin/LaundryServices';
import VehicleBookingForm from '../Modules/Vehicles/VehicleBookingForm';


// --- I. CSS STYLES INJECTION FUNCTION ---
const injectDashboardStyles = () => {
    const styleId = 'admin-dashboard-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
        /* === DASHBOARD COLORS & LAYOUT === */
        :root {
            --primary-blue: #1A237E; /* Deep Blue from image */
            --secondary-yellow: #FFC107; /* Yellow/Gold accent */
            --light-bg: #f4f7f9; /* Light gray background */
            --card-bg: #ffffff;
            --text-dark: #333;
            --text-light: #f8f9fa;
        }

        .dashboard-layout {
            display: flex;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            background-color: var(--light-bg);
        }

        /* === SIDEBAR (Navigation) === */
        .sidebar {
            width: 250px;
            background-color: var(--primary-blue);
            color: var(--text-light);
            padding: 20px 0;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }
        .sidebar-header {
            text-align: center;
            padding: 10px 0 30px;
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--secondary-yellow);
        }
        .sidebar-menu button {
            all: unset; /* Reset default button styles */
            display: flex;
            align-items: center;
            width: 100%;
            padding: 12px 20px;
            color: var(--text-light);
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.2s, color 0.2s;
            font-size: 14px;
            box-sizing: border-box; /* Include padding in the element's total width and height */
        }
        .sidebar-menu button:hover {
            background-color: #2c388e; /* Slightly lighter blue */
            color: var(--secondary-yellow);
        }
        .sidebar-menu button.active {
            background-color: #2c388e;
            border-left: 5px solid var(--secondary-yellow);
            padding-left: 15px;
            color: var(--secondary-yellow);
        }
        .sidebar-menu button svg {
            margin-right: 10px;
            font-size: 16px;
        }

        /* === MAIN CONTENT === */
        .main-content {
            flex-grow: 1;
            padding: 30px;
            overflow-y: auto;
        }
        .main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .main-header h2 {
            font-size: 2rem;
            color: var(--primary-blue);
            margin: 0;
        }
        .action-button {
            background-color: var(--secondary-yellow);
            color: var(--text-dark);
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            font-weight: bold;
            cursor: pointer;
            display: flex;
            align-items: center;
            transition: background-color 0.2s;
        }
        .action-button:hover {
            background-color: #e0ac06;
        }
        .action-button svg {
            margin-right: 8px;
        }

        /* === KPI CARDS (Dashboard Only) === */
        .kpi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }
        .kpi-card {
            background-color: var(--card-bg);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100px;
        }
        .kpi-card-title {
            font-size: 14px;
            color: #777;
            margin-bottom: 5px;
        }
        .kpi-card-value {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-blue);
        }
        .kpi-card-subtext {
            font-size: 12px;
            color: #4CAF50;
            margin-top: 5px;
        }

        /* === CHARTS/WIDGETS AREA (Dashboard Only) === */
        .charts-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 25px;
        }
        .chart-widget {
            background-color: var(--card-bg);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            min-height: 300px;
        }
        .chart-widget h4 {
            margin-top: 0;
            color: var(--primary-blue);
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }

        /* === MANAGEMENT PAGES === */
        .management-page {
            background-color: var(--card-bg);
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            min-height: 70vh;
        }
        .management-page h3 {
            color: var(--primary-blue);
            border-bottom: 2px solid var(--secondary-yellow);
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .dashboard-layout {
                flex-direction: column;
            }
            .sidebar {
                width: 100%;
                padding: 10px 0;
            }
            .sidebar-menu {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            .sidebar-menu button {
                padding: 10px;
                flex-grow: 1;
                justify-content: center;
                border-left: none !important;
                border-bottom: 3px solid transparent;
            }
             .sidebar-menu button.active {
                border-left: none !important;
                border-bottom: 3px solid var(--secondary-yellow);
                padding-bottom: 7px;
            }
            .charts-grid {
                grid-template-columns: 1fr;
            }
        }
    `;

    document.head.appendChild(style);
};


// --- II. REACT COMPONENTS ---

const Sidebar = ({ activeTab, setActiveTab }) => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <div className="sidebar-header">LaundryFlow Pro</div>
            <div className="sidebar-menu">
                <button onClick={() => { setActiveTab('dashboard'); navigate('/admin'); }} className={activeTab === 'dashboard' ? 'active' : ''}>
                    <FaTachometerAlt /> Dashboard
                </button>
                <button onClick={() => { setActiveTab('orders'); navigate('/admin/orders'); }} className={activeTab === 'orders' ? 'active' : ''}>
                    <FaClipboardList /> Manage Orders
                </button>
                <button onClick={() => { setActiveTab('customers'); navigate('/admin/customers'); }} className={activeTab === 'customers' ? 'active' : ''}>
                    <FaUsers /> Manage Customers
                </button>
                <button onClick={() => { setActiveTab('drivers'); navigate('/admin/drivers'); }} className={activeTab === 'drivers' ? 'active' : ''}>
                    <FaRunning /> Manage Drivers
                </button>
                <button onClick={() => { setActiveTab('vehicles'); navigate('/admin/vehicles'); }} className={activeTab === 'vehicles' ? 'active' : ''}>
                    <FaCar /> Manage Vehicles
                </button>
                <button onClick={() => { setActiveTab('bookings'); navigate('/admin/vehicles/bookings'); }} className={activeTab === 'bookings' ? 'active' : ''}>
                    <FaDolly /> Manage Bookings
                </button>
                <button onClick={() => { setActiveTab('services'); navigate('/admin/services'); }} className={activeTab === 'services' ? 'active' : ''}>
                    <FaTag /> Laundry Services
                </button>

                <hr style={{ margin: '20px 20px', borderTop: '1px solid #2c388e' }} />
                <button onClick={() => { setActiveTab('settings'); /* navigate to settings if route exists */ }} className={activeTab === 'settings' ? 'active' : ''}>
                    <FaCog /> Settings
                </button>
                <button onClick={() => { console.log('Logging out...'); navigate('/login'); }} style={{ color: '#FFEB3B' }}>
                    <FaSignOutAlt /> Log Out
                </button>
            </div>
        </div>
    );
};

const KPICard = ({ title, value, subtext, change }) => (
    <div className="kpi-card">
        <div className="kpi-card-title">{title}</div>
        <div className="kpi-card-value">{value}</div>
        <div className="kpi-card-subtext" style={{ color: change > 0 ? '#4CAF50' : '#F44336' }}>
            {change > 0 ? '▲' : '▼'} {Math.abs(change)}% vs last month
        </div>
    </div>
);

// --- Component to Render the Default Dashboard View ---
const DashboardContent = ({ kpiData }) => (
    <>
        <div className="main-header">
            <h2>Dashboard Overview</h2>
            <button className="action-button">
                <FaPlus /> New Order
            </button>
        </div>

        {/* KPI Section */}
        <div className="kpi-grid">
            {kpiData.map((kpi, index) => (
                <KPICard key={index} {...kpi} />
            ))}
        </div>

        {/* Charts and Widgets Section */}
        <div className="charts-grid">
            {/* Primary Chart: Monthly Revenue/Orders */}
            <div className="chart-widget">
                <h4>Monthly Performance</h4>
                <div style={{ height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#999' }}>
                    [Placeholder: Monthly Revenue/Orders Chart]
                </div>
            </div>

            {/* Secondary Widget: Delivery/Pickup Status */}
            <div className="chart-widget">
                <h4>Live Status</h4>
                <div style={{ padding: '10px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                        <span><FaCheckCircle style={{ color: '#4CAF50', marginRight: '5px' }} /> Deliveries Completed</span>
                        <strong>85</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                        <span><FaTruck style={{ color: '#FFC107', marginRight: '5px' }} /> Pickups Scheduled</span>
                        <strong>12</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
                        <span><FaUsers style={{ color: '#1A237E', marginRight: '5px' }} /> New Customers Today</span>
                        <strong>3</strong>
                    </div>
                </div>
                <h4 style={{ marginTop: '20px' }}>Recent Activity</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px' }}>
                    <li style={{ marginBottom: '5px', color: '#666' }}>11:30 AM: Order #1045 placed (New Customer)</li>
                    <li style={{ marginBottom: '5px', color: '#666' }}>11:15 AM: Driver 3 completed Route A</li>
                    <li style={{ marginBottom: '5px', color: '#666' }}>10:50 AM: Route B optimization triggered</li>
                </ul>
            </div>
        </div>
    </>
);

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard'); // State to control the active view
    const location = useLocation();

    // Inject styles on mount
    useEffect(() => {
        injectDashboardStyles();
    }, []);

    // Sync activeTab with current pathname (handle /admin root as 'dashboard')
    useEffect(() => {
        const path = location.pathname;
        if (path === '/admin' || path === '/admin/') {
            setActiveTab('dashboard');
            return;
        }
        const parts = path.split('/').filter(Boolean); // remove empty
        const last = parts.length ? parts[parts.length - 1] : 'dashboard';
        setActiveTab(last);
    }, [location]);

    // Placeholder data
    const kpiData = [
        { title: "Total Orders (Today)", value: "325", subtext: "Total Revenue", change: 12.5 },
        { title: "Pending Pickups", value: "48", subtext: "In Transit", change: -5.1 },
        { title: "Revenue (MTD)", value: "$25,480", subtext: "Revenue Goal", change: 8.9 },
        { title: "Active Drivers", value: "12", subtext: "Total Fleet", change: 0 },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'customers':
                return <ManageCustomers />;
            case 'orders':
                return <ManageOrders />;
            case 'drivers':
                return <ManageDrivers />;
            case 'vehicles':
                return <ManageVehicles />;
            case 'bookings':
                return <ManageVehicleBookings />;
            case 'services':
                return <LaundryServices />;
            // Add cases for 'settings', 'reports' if needed
            default:
                return <DashboardContent kpiData={kpiData} />;
        }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="main-content">
                <Routes>
                    <Route index element={<DashboardContent kpiData={kpiData} />} />
                    <Route path="orders" element={<ManageOrders />} />
                    <Route path="customers" element={<ManageCustomers />} />
                    <Route path="drivers" element={<ManageDrivers />} />
                    <Route path="vehicles" element={<ManageVehicles />} />
                    <Route path="vehicles/bookings" element={<ManageVehicleBookings />} />
                    <Route path="vehicles/book" element={<VehicleBookingForm />} />
                    <Route path="services" element={<LaundryServices />} />
                    {/* Add more nested admin routes as needed */}
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
