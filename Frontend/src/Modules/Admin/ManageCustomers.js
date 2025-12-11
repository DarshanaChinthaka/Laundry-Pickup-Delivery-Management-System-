import React from 'react';
import { FaUserPlus, FaSearch } from 'react-icons/fa';

const ManageCustomers = () => {
  return (
    <div className="management-page">
      <h3>Customer Management</h3>
      <div className="main-header" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" placeholder="Search customers..." style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px', width: '300px' }} />
            <button className="action-button" style={{ backgroundColor: '#f0f0f0', color: '#333' }}><FaSearch /></button>
        </div>
        <button className="action-button">
          <FaUserPlus /> Add New Customer
        </button>
      </div>

      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
        <p style={{ color: '#555' }}>List of customers will be displayed here, showing contact info, service history, and last order date.</p>
        {/* Placeholder for Data Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
                <tr style={{ backgroundColor: '#f9f9f9' }}>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>ID</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Name</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Email</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Status</th>
                    <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr><td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>Customer Data Table Placeholder</td></tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCustomers;