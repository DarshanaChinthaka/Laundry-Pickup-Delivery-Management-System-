import React, { useState, useEffect } from 'react';
import { ShoppingCart, Users, Truck, Droplet, Package, CreditCard, Menu, LayoutDashboard, Settings } from 'lucide-react';

export default function LaundryAdminDashboard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { label: 'Total Orders', value: 342, icon: ShoppingCart, color: 'bg-blue-500' },
    { label: 'Active Drivers', value: 18, icon: Truck, color: 'bg-green-500' },
    { label: 'Total Customers', value: 1247, icon: Users, color: 'bg-cyan-500' },
    { label: 'Revenue (Month)', value: '$28,450', icon: CreditCard, color: 'bg-amber-500' },
  ];

  const tiles = [
    { id: 'customers', title: 'Customers', subtitle: 'Manage all customers', icon: Users, color: 'text-blue-600' },
    { id: 'orders', title: 'Orders', subtitle: 'Track all orders', icon: ShoppingCart, color: 'text-purple-600' },
    { id: 'drivers', title: 'Drivers', subtitle: 'Manage delivery fleet', icon: Truck, color: 'text-green-600' },
    { id: 'services', title: 'Services', subtitle: 'Laundry services', icon: Droplet, color: 'text-cyan-600' },
    { id: 'inventory', title: 'Inventory', subtitle: 'Supplies & stock', icon: Package, color: 'text-orange-600' },
    { id: 'payments', title: 'Payments', subtitle: 'Billing & payouts', icon: CreditCard, color: 'text-pink-600' },
  ];

  const recentOrders = [
    { id: 'ORD-1024', customer: 'Alice Johnson', driver: 'Mike R.', status: 'Pickup Scheduled', amount: '$32' },
    { id: 'ORD-1025', customer: 'Bob Smith', driver: 'Sarah L.', status: 'In Process', amount: '$48' },
    { id: 'ORD-1026', customer: 'Carol White', driver: 'Tom K.', status: 'Out for Delivery', amount: '$25' },
    { id: 'ORD-1027', customer: 'David Brown', driver: 'Emma D.', status: 'Completed', amount: '$56' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pickup Scheduled': return 'bg-blue-100 text-blue-800';
      case 'In Process': return 'bg-amber-100 text-amber-800';
      case 'Out for Delivery': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTileActivate = (tileId) => {
    // placeholder: navigate or open modal in the real app
    // Keep behavior limited to a console log so functionality isn't changed
    // Developers can replace this with real navigation later
    // eslint-disable-next-line no-console
    console.log('Activate tile', tileId);
    alert(`Open ${tileId}`);
  };

  const onKeyActivate = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleTileActivate(id);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Skip link for keyboard users */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded shadow">Skip to content</a>

      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-6 flex flex-col" role="navigation" aria-label="Admin sidebar">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">L</div>
          <h1 className="text-xl font-bold">Laundry Admin</h1>
        </div>

        <div className="space-y-6 flex-1">
          <div>
            <p className="text-xs text-purple-200 mb-3 font-semibold">MAIN</p>
            <nav className="space-y-2" aria-label="Main navigation">
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition" aria-current="page">
                <LayoutDashboard size={20} aria-hidden="true" />
                <span>Dashboard</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Users size={20} aria-hidden="true" />
                <span>Manage Customers</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <ShoppingCart size={20} aria-hidden="true" />
                <span>Manage Orders</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Truck size={20} aria-hidden="true" />
                <span>Manage Drivers</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Droplet size={20} aria-hidden="true" />
                <span>Laundry Services</span>
              </button>
            </nav>
          </div>

          <div>
            <p className="text-xs text-purple-200 mb-3 font-semibold">SYSTEM</p>
            <nav className="space-y-2" aria-label="System navigation">
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Package size={20} aria-hidden="true" />
                <span>Inventory</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <CreditCard size={20} aria-hidden="true" />
                <span>Payments</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Settings size={20} aria-hidden="true" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu size={24} className="text-gray-600" aria-hidden="true" />
            <p className="text-sm text-gray-500">{now.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-700">Welcome, Admin</p>
            <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold" aria-hidden="true">A</div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">Logout</button>
          </div>
        </header>

        {/* Main Dashboard */}
        <main id="main" className="flex-1 p-6 overflow-auto" tabIndex={-1}>
          {/* Stats Grid */}
          <section aria-labelledby="stats-heading" className="mb-6">
            <h2 id="stats-heading" className="sr-only">Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center gap-4">
                    <div className={`${stat.color} p-3 rounded-lg text-white`}>
                      <stat.icon size={32} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Action Tiles */}
          <section aria-labelledby="tiles-heading" className="mb-6">
            <h2 id="tiles-heading" className="sr-only">Management Tiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {tiles.map((tile) => (
                <button
                  key={tile.id}
                  onClick={() => handleTileActivate(tile.id)}
                  onKeyDown={(e) => onKeyActivate(e, tile.id)}
                  aria-label={`${tile.title} - ${tile.subtitle}`}
                  className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-purple-300"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <tile.icon size={48} className={`${tile.color}`} aria-hidden="true" />
                    <h3 className="text-lg font-bold text-gray-800">{tile.title}</h3>
                    <p className="text-sm text-gray-500">{tile.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Orders & Quick Actions */}
          <section aria-labelledby="recent-heading">
            <h2 id="recent-heading" className="sr-only">Recent Orders</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Orders Table */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                  <table className="w-full" role="table">
                    <thead>
                      <tr className="border-b">
                        <th scope="col" className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                        <th scope="col" className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                        <th scope="col" className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Driver</th>
                        <th scope="col" className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th scope="col" className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm text-gray-800">{order.id}</td>
                          <td className="py-3 px-4 text-sm text-gray-800">{order.customer}</td>
                          <td className="py-3 px-4 text-sm text-gray-800">{order.driver}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`} aria-live="polite">
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm font-semibold text-gray-800">{order.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Quick Actions</h2>
                <p className="text-sm text-gray-500 mb-6">Common admin shortcuts</p>
                <div className="space-y-3">
                  <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">Create Order</button>
                  <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition">Assign Driver</button>
                  <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition">View Reports</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}