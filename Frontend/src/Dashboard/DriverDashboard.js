import React, { useState } from 'react';
import { Truck, Plus, Search, Filter, MoreVertical, MapPin, Star, Phone, Mail, Clock, DollarSign, Package } from 'lucide-react';

export default function ManageDriversDashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const driverStats = [
    { label: 'Total Drivers', value: '24', color: 'bg-blue-500', icon: Truck },
    { label: 'Active Now', value: '18', color: 'bg-green-500', icon: Clock },
    { label: 'On Break', value: '4', color: 'bg-yellow-500', icon: Clock },
    { label: 'Offline', value: '2', color: 'bg-gray-500', icon: Clock },
  ];

  const drivers = [
    { id: 1, name: 'Mike Johnson', phone: '+1 234-567-8901', email: 'mike@example.com', status: 'Active', rating: 4.8, trips: 145, earnings: '$3,240', location: 'Downtown', vehicle: 'VAN-001' },
    { id: 2, name: 'Anna Lee', phone: '+1 234-567-8902', email: 'anna@example.com', status: 'Active', rating: 4.9, trips: 132, earnings: '$3,080', location: 'Westside', vehicle: 'VAN-002' },
    { id: 3, name: 'David Chen', phone: '+1 234-567-8903', email: 'david@example.com', status: 'On Break', rating: 4.7, trips: 128, earnings: '$2,850', location: 'Central Hub', vehicle: 'VAN-003' },
    { id: 4, name: 'Sarah Wilson', phone: '+1 234-567-8904', email: 'sarah@example.com', status: 'Active', rating: 4.8, trips: 118, earnings: '$2,640', location: 'Eastside', vehicle: 'VAN-004' },
    { id: 5, name: 'Tom Brown', phone: '+1 234-567-8905', email: 'tom@example.com', status: 'Offline', rating: 4.6, trips: 95, earnings: '$2,110', location: 'N/A', vehicle: 'VAN-005' },
  ];

  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'On Break': 'bg-yellow-100 text-yellow-800',
    'Offline': 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Manage Drivers</h1>
        <p className="text-gray-600">Monitor and manage your delivery drivers</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {driverStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search drivers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              <span>Add Driver</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drivers List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Trips</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Earnings</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {drivers.map((driver) => (
                <tr key={driver.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {driver.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{driver.name}</div>
                        <div className="text-sm text-gray-500">{driver.vehicle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 flex items-center gap-1">
                      <Phone className="w-4 h-4 text-gray-400" />
                      {driver.phone}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Mail className="w-4 h-4 text-gray-400" />
                      {driver.email}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[driver.status]}`}>
                      {driver.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium text-gray-900">{driver.rating}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-900">
                      <Package className="w-4 h-4 text-gray-400" />
                      {driver.trips}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-medium text-gray-900">
                      <DollarSign className="w-4 h-4 text-green-500" />
                      {driver.earnings}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {driver.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>
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