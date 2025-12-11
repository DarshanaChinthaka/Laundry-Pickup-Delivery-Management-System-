import React from 'react';
import { FaUserTie, FaRoute } from 'react-icons/fa';

const ManageDrivers = () => {
  return (
    <div className="management-page">
      <h3>Driver Management</h3>
      <div className="main-header" style={{ marginBottom: '20px' }}>
        <p style={{ color: '#555', margin: 0 }}>Oversee driver assignments and daily routes.</p>
        <button className="action-button">
          <FaUserTie /> Add New Driver
        </button>
      </div>

      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
        <h4 style={{ color: '#1A237E' }}>Driver Status Summary</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginTop: '15px', textAlign: 'center' }}>
            <div style={{ padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '4px' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>On Route</p>
                <strong style={{ fontSize: '1.5rem', color: '#4CAF50' }}>6</strong>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#fff3e0', borderRadius: '4px' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Available</p>
                <strong style={{ fontSize: '1.5rem', color: '#FFC107' }}>4</strong>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '4px' }}>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>Offline</p>
                <strong style={{ fontSize: '1.5rem', color: '#1A237E' }}>2</strong>
            </div>
        </div>
        <button className="action-button" style={{ width: '100%', marginTop: '20px', backgroundColor: '#3b5998', color: 'white' }}>
            <FaRoute /> View Real-time Map
        </button>
      </div>
    </div>
  );
};

export default ManageDrivers;