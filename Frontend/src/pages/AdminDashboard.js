import React, { useState } from 'react';
import { Package, Truck, Users, Calendar, DollarSign, Settings, Menu, X, Bell, Search, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: 'Total Bookings', value: '156', icon: Calendar, color: 'bg-blue-500', trend: '+12%' },
    { label: 'Active Drivers', value: '24', icon: Truck, color: 'bg-green-500', trend: '+5%' },
    { label: 'Total Customers', value: '892', icon: Users, color: 'bg-purple-500', trend: '+18%' },
    { label: 'Revenue (Month)', value: '$45,290', icon: DollarSign, color: 'bg-orange-500', trend: '+23%' },
  ];

  const recentBookings = [
    { id: 'BK-001', customer: 'John Doe', driver: 'Mike Johnson', status: 'In Progress', date: '2024-12-10', amount: '$45' },
    { id: 'BK-002', customer: 'Sarah Smith', driver: 'Anna Lee', status: 'Completed', date: '2024-12-10', amount: '$65' },
    { id: 'BK-003', customer: 'Tom Brown', driver: 'David Chen', status: 'Pending', date: '2024-12-10', amount: '$55' },
    { id: 'BK-004', customer: 'Emily Davis', driver: 'Mike Johnson', status: 'In Progress', date: '2024-12-09', amount: '$72' },
    { id: 'BK-005', customer: 'James Wilson', driver: 'Anna Lee', status: 'Completed', date: '2024-12-09', amount: '$38' },
  ];

  const topDrivers = [
    { name: 'Mike Johnson', trips: 45, rating: 4.9, earnings: '$3,240' },
    { name: 'Anna Lee', trips: 42, rating: 4.8, earnings: '$3,080' },
    { name: 'David Chen', trips: 38, rating: 4.7, earnings: '$2,850' },
  ];

  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800',
    'Cancelled': 'bg-red-100 text-red-800',
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white border-r transition-all duration-300 overflow-hidden`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Package className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">LaundryPro</span>
          </div>
          
          <nav className="space-y-1">
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Main</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600">
              <Package className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>
            
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-6">Management</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <Truck className="w-5 h-5" />
              <span className="font-medium">Manage Drivers</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <Users className="w-5 h-5" />
              <span className="font-medium">Manage Employees</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Manage Bookings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <Users className="w-5 h-5" />
              <span className="font-medium">Manage Customers</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <Truck className="w-5 h-5" />
              <span className="font-medium">Manage Vehicles</span>
            </button>
            
            <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase mt-6">System</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 pl-4 border-l">
                <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <div className="text-sm font-medium">Admin User</div>
                  <div className="text-xs text-gray-500">admin@laundry.com</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    {stat.trend}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Bookings */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">Recent Bookings</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50 cursor-pointer">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{booking.customer}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{booking.driver}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[booking.status]}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Drivers */}
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Top Drivers</h2>
              </div>
              <div className="p-6 space-y-4">
                {topDrivers.map((driver, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {driver.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{driver.name}</div>
                        <div className="text-xs text-gray-500">{driver.trips} trips • ⭐ {driver.rating}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">{driver.earnings}</div>
                      <div className="text-xs text-gray-500">This month</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <div className="text-sm font-medium text-gray-700">New Booking</div>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <div className="text-sm font-medium text-gray-700">Add Driver</div>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <div className="text-sm font-medium text-gray-700">Add Customer</div>
              </button>
              <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition text-center">
                <Package className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <div className="text-sm font-medium text-gray-700">Add Vehicle</div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}