import React, { useState } from 'react';
import { Calendar, Search, Filter, MapPin, Clock, User, Package, DollarSign } from 'lucide-react';

export default function ManageDriversBookings() {
  const [selectedDriver, setSelectedDriver] = useState('all');
  const [dateFilter, setDateFilter] = useState('today');

  const drivers = ['All Drivers', 'Mike Johnson', 'Anna Lee', 'David Chen', 'Sarah Wilson', 'Tom Brown'];

  const bookings = [
    { id: 'BK-1001', driver: 'Mike Johnson', customer: 'John Doe', pickup: '123 Main St', delivery: '456 Oak Ave', time: '09:30 AM', status: 'Completed', amount: '$45', items: 8 },
    { id: 'BK-1002', driver: 'Mike Johnson', customer: 'Sarah Smith', pickup: '789 Pine Rd', delivery: '321 Elm St', time: '11:00 AM', status: 'In Progress', amount: '$65', items: 12 },
    { id: 'BK-1003', driver: 'Anna Lee', customer: 'Tom Brown', pickup: '654 Maple Dr', delivery: '987 Cedar Ln', time: '10:15 AM', status: 'Completed', amount: '$55', items: 10 },
    { id: 'BK-1004', driver: 'Anna Lee', customer: 'Emily Davis', pickup: '147 Birch Way', delivery: '258 Willow Ct', time: '01:30 PM', status: 'Scheduled', amount: '$72', items: 15 },
    { id: 'BK-1005', driver: 'David Chen', customer: 'James Wilson', pickup: '369 Spruce Ave', delivery: '741 Ash Blvd', time: '02:45 PM', status: 'Scheduled', amount: '$38', items: 6 },
    { id: 'BK-1006', driver: 'Sarah Wilson', customer: 'Lisa Anderson', pickup: '852 Poplar St', delivery: '963 Fir Rd', time: '08:00 AM', status: 'Completed', amount: '$82', items: 18 },
  ];

  const statusColors = {
    'Scheduled': 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Completed': 'bg-green-100 text-green-800',
    'Cancelled': 'bg-red-100 text-red-800',
  };

  const stats = [
    { label: 'Total Bookings', value: '45', color: 'bg-blue-500' },
    { label: 'In Progress', value: '8', color: 'bg-yellow-500' },
    { label: 'Completed', value: '32', color: 'bg-green-500' },
    { label: 'Scheduled', value: '5', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Driver Bookings</h1>
        <p className="text-gray-600">View and manage all driver assignments</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bookings..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {drivers.map((driver, idx) => (
              <option key={idx} value={driver.toLowerCase()}>{driver}</option>
            ))}
          </select>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="all">All Time</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Route</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{booking.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {booking.driver.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-gray-900">{booking.driver}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-900">
                      <User className="w-4 h-4 text-gray-400" />
                      {booking.customer}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div className="flex items-center gap-1 text-gray-900 mb-1">
                        <MapPin className="w-3 h-3 text-green-500" />
                        <span className="text-xs">{booking.pickup}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-3 h-3 text-red-500" />
                        <span className="text-xs">{booking.delivery}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {booking.time}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-900">
                      <Package className="w-4 h-4 text-gray-400" />
                      {booking.items}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-medium text-gray-900">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      {booking.amount}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}