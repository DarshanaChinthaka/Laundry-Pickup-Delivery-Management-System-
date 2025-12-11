import React from 'react';
import { FaClipboardList, FaMoneyBillWave, FaTruck, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

// Component for the Small Summary Cards
const SummaryCard = ({ icon, colorClass, title, value, detail }) => (
    <div className="lt-summary-card">
        <div className={`lt-card-icon ${colorClass}`}>{icon}</div>
        <div className="lt-card-content">
            <h3>{value}</h3>
            <p>{title}</p>
            <p style={{ fontSize: '0.75rem', color: '#999' }}>{detail}</p>
        </div>
    </div>
);

// Component for a single Pickup/Delivery Task
const TaskItem = ({ type, title, address, time, status }) => {
    const isCompleted = status === 'Completed';
    const cardClass = type === 'Pickup' ? 'pickup' : 'delivery';
    const actionText = type === 'Pickup' ? 'Scan & Collect' : 'Confirm Delivery';

    return (
        <div className={`lt-task-item ${cardClass} ${isCompleted ? 'completed' : ''}`}>
            <div className="lt-task-details">
                <h4>{type}: {title}</h4>
                <span><FaMapMarkerAlt /> {address}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '0.8rem', color: isCompleted ? 'var(--lt-success-green)' : 'var(--lt-text-dark)' }}>
                    {isCompleted ? <FaCheckCircle style={{ marginRight: '5px' }} /> : <FaClock style={{ marginRight: '5px' }} />}{isCompleted ? 'Completed' : time}
                </span>
                {!isCompleted && (
                    <button className="lt-task-button">{actionText}</button>
                )}
            </div>
        </div>
    );
};

const DriverTasksView = () => {
    // Placeholder Data for Summary
    const summaryData = [
        { icon: <FaClipboardList />, colorClass: 'icon-cyan', title: 'Pending Stops', value: '8', detail: '4 Pickups, 4 Deliveries' },
        { icon: <FaTruck />, colorClass: 'icon-yellow', title: 'Current Route Time', value: '2.5 hrs', detail: 'Estimated completion' },
        { icon: <FaMoneyBillWave />, colorClass: 'icon-green', title: 'Total Collected Lbs', value: '450 lbs', detail: 'Today\'s total weight' },
        { icon: <FaExclamationTriangle />, colorClass: 'icon-red', title: 'Late Deliveries', value: '0', detail: 'Route is on schedule' },
    ];

    // Placeholder Data for Tasks
    const tasks = [
        { type: 'Pickup', title: 'The Grand Hotel', address: '1601 Oak St, SC 29577', time: '11:30 AM', status: 'Pending' },
        { type: 'Delivery', title: 'Ocean View Resort', address: '2200 Main St, SC 29577', time: '12:15 PM', status: 'Pending' },
        { type: 'Pickup', title: 'Clean Suites Laundry', address: '300 Pine Ave, SC 29577', time: '1:00 PM', status: 'Pending' },
        { type: 'Delivery', title: 'The Corner Cafe', address: '45 Elm Ln, SC 29577', time: '1:45 PM', status: 'Pending' },
        { type: 'Pickup', title: 'St. Mary\'s Hospital', address: '500 Center Rd, SC 29577', time: '10:00 AM', status: 'Completed' },
        { type: 'Delivery', title: 'Residential Customer 1', address: '123 Cherry Ln, SC 29577', time: '9:30 AM', status: 'Completed' },
    ];

    const pendingTasks = tasks.filter(t => t.status === 'Pending');
    const completedTasks = tasks.filter(t => t.status === 'Completed');

    return (
        <>
            <div className="lt-summary-grid">
                {summaryData.map((card, index) => (
                    <SummaryCard key={index} {...card} />
                ))}
            </div>

            <div className="lt-card">
                <h2 style={{ color: 'var(--lt-primary-blue)', borderBottom: '2px solid var(--lt-accent-yellow)', paddingBottom: '10px' }}>
                    Next Tasks ({pendingTasks.length})
                </h2>
                {pendingTasks.map((task, index) => (
                    <TaskItem key={`p-${index}`} {...task} />
                ))}
            </div>

            <div className="lt-card" style={{ marginTop: '20px' }}>
                <h2 style={{ color: '#666', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    History ({completedTasks.length})
                </h2>
                {completedTasks.map((task, index) => (
                    <TaskItem key={`c-${index}`} {...task} />
                ))}
                {completedTasks.length === 0 && <p style={{ color: '#999' }}>No tasks completed yet.</p>}
            </div>
        </>
    );
};

export default DriverTasksView;