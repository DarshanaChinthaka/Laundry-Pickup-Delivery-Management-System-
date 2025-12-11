import React from 'react';
import { FaUser, FaIdCard, FaCarSide, FaEnvelope } from 'react-icons/fa';

const DriverProfileView = () => {
    return (
        <>
            <div className="lt-card">
                <h3 style={{ color: 'var(--lt-primary-blue)', borderBottom: '1px solid var(--lt-accent-yellow)', paddingBottom: '10px' }}>
                    <FaUser /> Personal Information
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Name:</p><p style={{ margin: '0' }}>John M. Doe</p></div>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Driver ID:</p><p style={{ margin: '0' }}>DRV-0045</p></div>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Contact:</p><p style={{ margin: '0' }}>+1 (555) 123-4567</p></div>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Email:</p><p style={{ margin: '0' }}><FaEnvelope style={{ marginRight: '5px' }} />john.doe@linentech.com</p></div>
                </div>
            </div>

            <div className="lt-card">
                <h3 style={{ color: 'var(--lt-primary-blue)', borderBottom: '1px solid var(--lt-accent-yellow)', paddingBottom: '10px' }}>
                    <FaCarSide /> Assigned Vehicle
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Vehicle Type:</p><p style={{ margin: '0' }}>Sprinter Van</p></div>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>License Plate:</p><p style={{ margin: '0' }}>TX-1G4Z-99</p></div>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Capacity:</p><p style={{ margin: '0' }}>1,500 lbs</p></div>
                    <div><p style={{ fontWeight: 'bold', margin: '0' }}>Maintenance Due:</p><p style={{ margin: '0', color: 'var(--lt-success-green)' }}>2025-05-30</p></div>
                </div>
            </div>
        </>
    );
};

export default DriverProfileView;