import { useState, useEffect } from 'react';
import { TrendingUp, DollarSign, Package, Users, Truck, Star, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminStats() {
  const [timeRange, setTimeRange] = useState('week');
  const [stats, setStats] = useState({
    revenue: { current: 45280, previous: 38950, change: 16.2 },
    orders: { current: 1234, previous: 1089, change: 13.3 },
    customers: { current: 856, previous: 798, change: 7.3 },
    drivers: { current: 45, previous: 42, change: 7.1 }
  });

  const revenueData = [
    { date: 'Mon', revenue: 5200, orders: 145 },
    { date: 'Tue', revenue: 6100, orders: 178 },
    { date: 'Wed', revenue: 7300, orders: 203 },
    { date: 'Thu', revenue: 6800, orders: 189 },
    { date: 'Fri', revenue: 8200, orders: 235 },
    { date: 'Sat', revenue: 9100, orders: 267 },
    { date: 'Sun', revenue: 7500, orders: 217 }
  ];

  const categoryData = [
    { name: 'Fast Food', value: 35, color: '#3b82f6' },
    { name: 'Pizza', value: 25, color: '#ef4444' },
    { name: 'Asian', value: 20, color: '#10b981' },
    { name: 'Desserts', value: 12, color: '#f59e0b' },
    { name: 'Others', value: 8, color: '#8b5cf6' }
  ];

  const topProducts = [
    { name: 'Margherita Pizza', orders: 234, revenue: 3042 },
    { name: 'Chicken Burger', orders: 198, revenue: 3168 },
    { name: 'Pad Thai', orders: 176, revenue: 2464 },
    { name: 'Caesar Salad', orders: 145, revenue: 1595 },
    { name: 'Chocolate Cake', orders: 132, revenue: 924 }
  ];

  const driverPerformance = [
    { name: 'Mike Wilson', deliveries: 156, rating: 4.9, earnings: 2340 },
    { name: 'Sarah Davis', deliveries: 148, rating: 4.8, earnings: 2220 },
    { name: 'John Smith', deliveries: 142, rating: 4.7, earnings: 2130 },
    { name: 'Emma Brown', deliveries: 138, rating: 4.9, earnings: 2070 },
    { name: 'Tom Anderson', deliveries: 125, rating: 4.6, earnings: 1875 }
  ];

  const StatCard = ({ icon: Icon, title, value, change, prefix = '' }) => {
    const isPositive = change > 0;
    return (
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {Math.abs(change)}%
          </div>
        </div>
        <div className="text-2xl font-bold text-gray-900">{prefix}{value.toLocaleString()}</div>
        <div className="text-sm text-gray-500">{title}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Analytics Dashboard
            </h1>
            <p className="text-gray-600 mt-1">Track your business performance and metrics</p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            icon={DollarSign}
            title="Total Revenue"
            value={stats.revenue.current}
            change={stats.revenue.change}
            prefix="$"
          />
          <StatCard
            icon={Package}
            title="Total Orders"
            value={stats.orders.current}
            change={stats.orders.change}
          />
          <StatCard
            icon={Users}
            title="Active Customers"
            value={stats.customers.current}
            change={stats.customers.change}
          />
          <StatCard
            icon={Truck}
            title="Active Drivers"
            value={stats.drivers.current}
            change={stats.drivers.change}
          />
        </div>

        {/* Revenue & Orders Chart */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Revenue & Orders Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenue ($)" />
              <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#10b981" strokeWidth={2} name="Orders" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Category Distribution */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Orders by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Top Products */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Top Products</h2>
            <div className="space-y-3">
              {topProducts.map((product, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.orders} orders</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">${product.revenue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Driver Performance */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Driver Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deliveries</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {driverPerformance.map((driver, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        idx === 0 ? 'bg-yellow-100 text-yellow-600' :
                        idx === 1 ? 'bg-gray-100 text-gray-600' :
                        idx === 2 ? 'bg-orange-100 text-orange-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {idx + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{driver.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {driver.deliveries}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-900">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {driver.rating}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${driver.earnings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-500 mb-2">Average Order Value</div>
            <div className="text-3xl font-bold text-gray-900">$36.70</div>
            <div className="text-sm text-green-600 mt-1">↑ 8.2% from last week</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-500 mb-2">Customer Satisfaction</div>
            <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              4.8 <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="text-sm text-green-600 mt-1">↑ 0.3 from last week</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-500 mb-2">Avg Delivery Time</div>
            <div className="text-3xl font-bold text-gray-900">28 min</div>
            <div className="text-sm text-green-600 mt-1">↓ 2 min from last week</div>
          </div>
        </div>
      </div>
    </div>
  );
}