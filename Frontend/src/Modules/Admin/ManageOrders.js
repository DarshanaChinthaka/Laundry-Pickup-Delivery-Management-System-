import React from 'react';
import { FaFilter, FaRedoAlt } from 'react-icons/fa';

const ManageOrders = () => {
  return (
    <div className="management-page">
      <h3>Order Management</h3>
      <div className="main-header" style={{ marginBottom: '20px' }}>
        <p style={{ color: '#555', margin: 0 }}>Track and update the status of all laundry orders.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button className="action-button" style={{ backgroundColor: '#f0f0f0', color: '#333' }}>
              <FaFilter /> Filter
            </button>
            <button className="action-button">
              <FaRedoAlt /> Refresh
            </button>
        </div>
      </div>

      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ borderBottom: '3px solid #FFC107', padding: '10px 20px', cursor: 'pointer' }}>Pending Pickup (15)</div>
            <div style={{ borderBottom: '3px solid #ddd', padding: '10px 20px', cursor: 'pointer' }}>In Progress (45)</div>
            <div style={{ borderBottom: '3px solid #ddd', padding: '10px 20px', cursor: 'pointer' }}>Ready for Delivery (20)</div>
            <div style={{ borderBottom: '3px solid #ddd', padding: '10px 20px', cursor: 'pointer' }}>Completed (250)</div>
        </div>
        <p style={{ color: '#999', textAlign: 'center' }}>Order Listing Table Placeholder (Order ID, Customer, Status, Action)</p>
      </div>
    </div>
  );
};

export default ManageOrders;