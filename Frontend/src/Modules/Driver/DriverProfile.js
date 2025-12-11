import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Calendar, Star, Package, DollarSign, Clock, Edit, Save, X, Truck, Award, TrendingUp } from 'lucide-react';

export default function ManageDriverProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [driverData, setDriverData] = useState({
    name: 'Mike Johnson',
    email: 'mike.johnson@laundry.com',
    phone: '+1 234-567-8901',
    address: '123 Main Street, Downtown',
    joinDate: 'Jan 15, 2023',
    licenseNumber: 'DL-123456',
    vehicleAssigned: 'VAN-001',
    status: 'Active',
  });

  const stats = [
    { label: 'Total Trips', value: '145', icon: Package, color: 'bg-blue-500' },
    { label: 'Rating', value: '4.8', icon: Star, color: 'bg-yellow-500' },
    { label: 'Total Earnings', value: '$3,240', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Hours Worked', value: '320h', icon: Clock, color: 'bg-purple-500' },
  ];

  const recentTrips = [
    { id: 'BK-1001', customer: 'John Doe', date: '2024-12-10', amount: '$45', status: 'Completed', rating: 5 },
    { id: 'BK-1002', customer: 'Sarah Smith', date: '2024-12-10', amount: '$65', status: 'Completed', rating: 5 },
    { id: 'BK-1003', customer: 'Tom Brown', date: '2024-12-09', amount: '$55', status: 'Completed', rating: 4 },
    { id: 'BK-1004', customer: 'Emily Davis', date: '2024-12-09', amount: '$72', status: 'Completed', rating: 5 },
  ];

  const performance = [
    { month: 'Aug', trips: 42, earnings: 2800 },
    { month: 'Sep', trips: 48, earnings: 3100 },
    { month: 'Oct', trips: 51, earnings: 3350 },
    { month: 'Nov', trips: 45, earnings: 2950 },
    { month: 'Dec', trips: 38, earnings: 2640 },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Driver Profile</h1>
          <p className="text-gray-600">View and manage driver information</p>
        </div>
        <div className="flex gap-3">
          <Link
            to="/driver"
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            <Truck className="w-4 h-4" />
            <span>Driver Dashboard</span>
          </Link>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Edit className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                {driverData.name.split(' ').map(n => n[0]).join('')}
              </div>
              {isEditing ? (
                <input
                  type="text"
                  value={driverData.name}
                  onChange={(e) => setDriverData({...driverData, name: e.target.value})}
                  className="text-xl font-bold text-gray-800 text-center border rounded px-2 py-1 mb-2"
                />
              ) : (
                <h2 className="text-xl font-bold text-gray-800 mb-2">{driverData.name}</h2>
              )}
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                {driverData.status}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5" />
                {isEditing ? (
                  <input
                    type="email"
                    value={driverData.email}
                    onChange={(e) => setDriverData({...driverData, email: e.target.value})}
                    className="flex-1 border rounded px-2 py-1 text-sm"
                  />
                ) : (
                  <span className="text-sm">{driverData.email}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5" />
                {isEditing ? (
                  <input
                    type="tel"
                    value={driverData.phone}
                    onChange={(e) => setDriverData({...driverData, phone: e.target.value})}
                    className="flex-1 border rounded px-2 py-1 text-sm"
                  />
                ) : (
                  <span className="text-sm">{driverData.phone}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5" />
                {isEditing ? (
                  <input
                    type="text"
                    value={driverData.address}
                    onChange={(e) => setDriverData({...driverData, address: e.target.value})}
                    className="flex-1 border rounded px-2 py-1 text-sm"
                  />
                ) : (
                  <span className="text-sm">{driverData.address}</span>
                )}
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">Joined {driverData.joinDate}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Award className="w-5 h-5" />
                <span className="text-sm">License: {driverData.licenseNumber}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="w-5 h-5" />
                <span className="text-sm">Vehicle: {driverData.vehicleAssigned}</span>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`${stat.color} p-2 rounded-lg`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-gray-600">{stat.label}</span>
                  </div>
                  <span className="text-lg font-bold text-gray-800">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Performance & Trips */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Chart */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Performance Trend</h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="space-y-4">
              {performance.map((month, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{month.month}</span>
                    <span className="text-sm font-medium text-gray-900">{month.trips} trips • ${month.earnings}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(month.trips / 60) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trips */}
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Recent Trips</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recentTrips.map((trip) => (
                    <tr key={trip.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{trip.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{trip.customer}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{trip.date}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{trip.amount}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium">{trip.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          {trip.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}