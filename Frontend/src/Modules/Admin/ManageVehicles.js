import React from 'react';
import { FaCarSide, FaPlus } from 'react-icons/fa';

const ManageVehicles = () => {
  return (
    <div className="management-page">
      <h3>Vehicle Management</h3>
      <div className="main-header" style={{ marginBottom: '20px' }}>
        <p style={{ color: '#555', margin: 0 }}>Maintain the fleet inventory and maintenance logs.</p>
        <button className="action-button">
          <FaPlus /> Add New Vehicle
        </button>
      </div>

      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
        <h4 style={{ color: '#1A237E' }}>Fleet Overview</h4>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px', textAlign: 'center' }}>
            <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Total Vehicles</p>
                <strong style={{ fontSize: '1.5rem', color: '#1A237E' }}>15</strong>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Available</p>
                <strong style={{ fontSize: '1.5rem', color: '#4CAF50' }}>10</strong>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#fce4ec', borderRadius: '4px' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>In Maintenance</p>
                <strong style={{ fontSize: '1.5rem', color: '#E91E63' }}>2</strong>
            </div>
        </div>
        <p style={{ marginTop: '30px', color: '#999', textAlign: 'center' }}>Vehicle Listing Table Placeholder (License Plate, Status, Last Service Date)</p>
      </div>
    </div>
  );
};

export default ManageVehicles;