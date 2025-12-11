import React from 'react';

export default function EmployeesDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Employees Dashboard</h1>
        <p className="text-gray-600">Overview of employee tasks and bookings.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold">Today's Tasks</h3>
          <p className="text-sm text-gray-500">No tasks yet — this is a placeholder.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold">Pending Bookings</h3>
          <p className="text-sm text-gray-500">No pending bookings.</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold">Quick Actions</h3>
          <p className="text-sm text-gray-500">Placeholder actions for employees.</p>
        </div>
      </div>
    </div>
  );
}
