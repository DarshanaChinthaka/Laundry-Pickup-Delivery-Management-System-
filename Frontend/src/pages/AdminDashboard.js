import React, { useState, useEffect } from 'react';
import { Package, Truck, Users, Calendar, DollarSign, Settings } from 'lucide-react';
import bg from '../background.png';

export default function AdminDashboard() {
  const [sidebarOpen] = useState(true);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);


  const tiles = [
    { id: 'patients', title: 'Patients', subtitle: 'Manage all patients', icon: Users },
    { id: 'doctors', title: 'Doctors', subtitle: 'Manage doctors', icon: Users },
    { id: 'rooms', title: 'Rooms', subtitle: 'Room availability', icon: Package },
    { id: 'nurses', title: 'Nurses', subtitle: 'Manage nursing staff', icon: Calendar },
    { id: 'ambulance', title: 'Ambulance', subtitle: 'Manage services', icon: Truck },
    { id: 'salary', title: 'Salary', subtitle: 'Salary reports & payouts', icon: DollarSign },
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
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-900 text-white border-r transition-all duration-300 overflow-hidden`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <Package className="w-8 h-8 text-white" />
            <span className="text-xl font-bold">Admin Panel</span>
          </div>

          <nav className="space-y-1">
            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Main</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-700 text-white">
              <Package className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>

            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase mt-6">Management</div>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800">
              <Truck className="w-5 h-5" />
              <span className="font-medium">Manage Patients</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800">
              <Users className="w-5 h-5" />
              <span className="font-medium">Manage Doctors</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header (blue topbar) */}
        <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">{now.toLocaleString()}</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">A</div>
                <div className="text-sm">Welcome, John Doe</div>
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Logout</button>
            </div>
          </div>
        </header>

        {/* Dashboard Content with background image */}
        <main className="flex-1 overflow-y-auto relative">
          <div
            className="absolute inset-0 bg-center bg-cover opacity-90"
            style={{ backgroundImage: `url(${bg})` }}
            aria-hidden="true"
          />

          <div className="relative z-10 h-full p-8">
            <div className="max-w-6xl mx-auto">
              {/* Grid of large cards (3 columns x 2 rows on desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tiles.map((t) => (
                  <button
                    key={t.id}
                    className="flex flex-col items-center justify-center h-40 rounded-xl bg-gradient-to-br from-blue-500 to-blue-400 text-white shadow-lg hover:scale-102 transform transition focus:outline-none focus:ring-4 focus:ring-blue-300"
                    aria-label={`${t.title}: ${t.subtitle}`}>
                    <t.icon className="w-12 h-12 mb-3 opacity-90" />
                    <div className="text-xl font-semibold">{t.title}</div>
                    <div className="text-sm opacity-90">{t.subtitle}</div>
                  </button>
                ))}
              </div>

              {/* Bottom-left logo like the screenshot */}
              <div className="mt-8 flex items-start">
                <img src={require('../laundry-logo.png')} alt="logo" className="w-56 opacity-90" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}