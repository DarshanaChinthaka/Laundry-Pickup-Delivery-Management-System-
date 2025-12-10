import React, { useState } from 'react';
import { DollarSign, Download, Calendar, TrendingUp, Users, Calculator, FileText, Search } from 'lucide-react';

export default function ManageDriversSalary() {
  const [selectedMonth, setSelectedMonth] = useState('december-2024');
  const [selectedDriver, setSelectedDriver] = useState('all');

  const salaryData = [
    { id: 1, driver: 'Mike Johnson', baseSalary: 2500, trips: 145, earnings: 3240, bonus: 300, deductions: 100, netSalary: 3440, status: 'Paid' },
    { id: 2, driver: 'Anna Lee', baseSalary: 2500, trips: 132, earnings: 3080, bonus: 250, deductions: 80, netSalary: 3250, status: 'Paid' },
    { id: 3, driver: 'David Chen', baseSalary: 2500, trips: 128, earnings: 2850, bonus: 200, deductions: 75, netSalary: 2975, status: 'Pending' },
    { id: 4, driver: 'Sarah Wilson', baseSalary: 2500, trips: 118, earnings: 2640, bonus: 180, deductions: 70, netSalary: 2750, status: 'Pending' },
    { id: 5, driver: 'Tom Brown', baseSalary: 2500, trips: 95, earnings: 2110, bonus: 100, deductions: 60, netSalary: 2150, status: 'Pending' },
  ];

  const summaryStats = [
    { label: 'Total Payroll', value: '$14,565', icon: DollarSign, color: 'bg-blue-500', change: '+8.5%' },
    { label: 'Total Drivers', value: '5', icon: Users, color: 'bg-green-500', change: '+0%' },
    { label: 'Avg. Per Driver', value: '$2,913', icon: Calculator, color: 'bg-purple-500', change: '+12%' },
    { label: 'Total Trips', value: '618', icon: TrendingUp, color: 'bg-orange-500', change: '+15%' },
  ];

  const statusColors = {
    'Paid': 'bg-green-100 text-green-800',
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Processing': 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Driver Salary Management</h1>
          <p className="text-gray-600">Manage driver payments and earnings</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-green-600 font-medium">{stat.change}</div>
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
              placeholder="Search drivers..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="december-2024">December 2024</option>
            <option value="november-2024">November 2024</option>
            <option value="october-2024">October 2024</option>
            <option value="september-2024">September 2024</option>
          </select>
          <select
            value={selectedDriver}
            onChange={(e) => setSelectedDriver(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Drivers</option>
            <option value="mike">Mike Johnson</option>
            <option value="anna">Anna Lee</option>
            <option value="david">David Chen</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <FileText className="w-4 h-4" />
            <span>Generate Payslips</span>
          </button>
        </div>
      </div>

      {/* Salary Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Base Salary</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Trips</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Trip Earnings</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Bonus</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Deductions</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Net Salary</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {salaryData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {record.driver.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-medium text-gray-900">{record.driver}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900">${record.baseSalary}</td>
                  <td className="px-6 py-4 text-gray-900">{record.trips}</td>
                  <td className="px-6 py-4 text-gray-900">${record.earnings}</td>
                  <td className="px-6 py-4 text-green-600 font-medium">+${record.bonus}</td>
                  <td className="px-6 py-4 text-red-600 font-medium">-${record.deductions}</td>
                  <td className="px-6 py-4">
                    <div className="text-lg font-bold text-gray-900">${record.netSalary}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColors[record.status]}`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                        View Details
                      </button>
                      {record.status === 'Pending' && (
                        <button className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded hover:bg-green-100">
                          Process
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t">
              <tr>
                <td className="px-6 py-4 font-bold text-gray-900">TOTAL</td>
                <td className="px-6 py-4 font-bold text-gray-900">$12,500</td>
                <td className="px-6 py-4 font-bold text-gray-900">618</td>
                <td className="px-6 py-4 font-bold text-gray-900">$13,920</td>
                <td className="px-6 py-4 font-bold text-green-600">+$1,030</td>
                <td className="px-6 py-4 font-bold text-red-600">-$385</td>
                <td className="px-6 py-4 font-bold text-gray-900 text-lg">$14,565</td>
                <td colSpan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Payment Schedule */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Schedule</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
            <div className="text-sm text-gray-600 mb-1">Next Payment Date</div>
            <div className="text-xl font-bold text-gray-900">Dec 15, 2024</div>
          </div>
          <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
            <div className="text-sm text-gray-600 mb-1">Pending Amount</div>
            <div className="text-xl font-bold text-gray-900">$8,875</div>
          </div>
          <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded">
            <div className="text-sm text-gray-600 mb-1">Paid This Month</div>
            <div className="text-xl font-bold text-gray-900">$5,690</div>
          </div>
        </div>
      </div>
    </div>
  );
}