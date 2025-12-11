import React from 'react';
import { FaMoneyBillWave, FaCalendarAlt, FaHistory } from 'react-icons/fa';

const EarningsTable = ({ data }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
        <thead>
            <tr style={{ backgroundColor: '#eee', color: 'var(--lt-primary-blue)' }}>
                <th style={tableHeaderStyle}>Period</th>
                <th style={tableHeaderStyle}>Base Pay</th>
                <th style={tableHeaderStyle}>Bonus/Incentive</th>
                <th style={tableHeaderStyle}>Total Payout</th>
                <th style={tableHeaderStyle}>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={tableCellStyle}>{row.period}</td>
                    <td style={tableCellStyle}>{row.base}</td>
                    <td style={tableCellStyle}>{row.bonus}</td>
                    <td style={{ ...tableCellStyle, fontWeight: 'bold', color: 'var(--lt-success-green)' }}>{row.total}</td>
                    <td style={tableCellStyle}>
                        <span style={getStatusStyle(row.status)}>{row.status}</span>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const tableHeaderStyle = { padding: '10px', textAlign: 'left', fontWeight: '600' };
const tableCellStyle = { padding: '10px', textAlign: 'left', fontSize: '0.9rem' };

const getStatusStyle = (status) => {
    switch (status) {
        case 'Paid': return { backgroundColor: '#e8f5e9', color: '#388e3c', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' };
        case 'Pending': return { backgroundColor: '#fff3e0', color: '#f57c00', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' };
        default: return {};
    }
};

const DriverEarningsView = () => {
    const payoutData = [
        { period: 'Nov 1 - Nov 15', base: '$1,200.00', bonus: '$150.00', total: '$1,350.00', status: 'Paid' },
        { period: 'Oct 16 - Oct 31', base: '$1,180.00', bonus: '$120.00', total: '$1,300.00', status: 'Paid' },
        { period: 'Nov 16 - Nov 30', base: '$1,250.00', bonus: '$180.00', total: '$1,430.00', status: 'Pending' },
    ];

    return (
        <>
            <div className="lt-card">
                <h3 style={{ color: 'var(--lt-primary-blue)' }}>Current Pay Period Status</h3>
                <div className="lt-alert lt-alert-warning">
                    <FaCalendarAlt /> Next Payout Date: **December 2nd**. (Pending: $1,430.00)
                </div>
            </div>

            <div className="lt-card">
                <h3 style={{ color: 'var(--lt-primary-blue)', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <FaHistory /> Payout History
                </h3>
                <EarningsTable data={payoutData} />
            </div>
        </>
    );
};

export default DriverEarningsView;