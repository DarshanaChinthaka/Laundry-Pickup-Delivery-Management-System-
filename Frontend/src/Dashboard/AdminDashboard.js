import React, { useState, useEffect } from 'react';
import { ShoppingCart, Users, Truck, Droplet, Package, CreditCard, Menu, LayoutDashboard, Settings, Car, Plus, Edit, Trash2, X } from 'lucide-react';

export default function LaundryAdminDashboard() {
  const [now, setNow] = useState(new Date());
  const [currentView, setCurrentView] = useState('dashboard');
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [vehicles, setVehicles] = useState([
    { id: 'VH-001', type: 'Van', plateNumber: 'ABC-1234', driver: 'Mike R.', status: 'Active', capacity: '150 kg' },
    { id: 'VH-002', type: 'Truck', plateNumber: 'XYZ-5678', driver: 'Sarah L.', status: 'Active', capacity: '300 kg' },
    { id: 'VH-003', type: 'Van', plateNumber: 'DEF-9012', driver: 'Tom K.', status: 'Maintenance', capacity: '150 kg' },
    { id: 'VH-004', type: 'Bike', plateNumber: 'GHI-3456', driver: 'Emma D.', status: 'Active', capacity: '50 kg' },
  ]);

  const [formData, setFormData] = useState({
    type: '',
    plateNumber: '',
    driver: '',
    status: 'Active',
    capacity: ''
  });

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { label: 'Total Orders', value: 342, icon: ShoppingCart, color: 'bg-blue-500' },
    { label: 'Active Vehicles', value: vehicles.filter(v => v.status === 'Active').length, icon: Car, color: 'bg-green-500' },
    { label: 'Total Customers', value: 1247, icon: Users, color: 'bg-cyan-500' },
    { label: 'Revenue (Month)', value: '$28,450', icon: CreditCard, color: 'bg-amber-500' },
  ];

  const tiles = [
    { id: 'customers', title: 'Customers', subtitle: 'Manage all customers', icon: Users, color: 'text-blue-600' },
    { id: 'orders', title: 'Orders', subtitle: 'Track all orders', icon: ShoppingCart, color: 'text-purple-600' },
    { id: 'drivers', title: 'Drivers', subtitle: 'Manage delivery fleet', icon: Truck, color: 'text-green-600' },
    { id: 'vehicles', title: 'Vehicles', subtitle: 'Fleet management', icon: Car, color: 'text-red-600' },
    { id: 'services', title: 'Services', subtitle: 'Laundry services', icon: Droplet, color: 'text-cyan-600' },
    { id: 'inventory', title: 'Inventory', subtitle: 'Supplies & stock', icon: Package, color: 'text-orange-600' },
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
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Maintenance': return 'bg-orange-100 text-orange-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTileClick = (tileId) => {
    setCurrentView(tileId);
  };

  const openVehicleModal = (vehicle = null) => {
    if (vehicle) {
      setEditingVehicle(vehicle);
      setFormData({
        type: vehicle.type,
        plateNumber: vehicle.plateNumber,
        driver: vehicle.driver,
        status: vehicle.status,
        capacity: vehicle.capacity
      });
    } else {
      setEditingVehicle(null);
      setFormData({ type: '', plateNumber: '', driver: '', status: 'Active', capacity: '' });
    }
    setShowVehicleModal(true);
  };

  const closeVehicleModal = () => {
    setShowVehicleModal(false);
    setEditingVehicle(null);
    setFormData({ type: '', plateNumber: '', driver: '', status: 'Active', capacity: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingVehicle) {
      setVehicles(vehicles.map(v => v.id === editingVehicle.id ? { ...editingVehicle, ...formData } : v));
    } else {
      const newVehicle = {
        id: `VH-${String(vehicles.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setVehicles([...vehicles, newVehicle]);
    }
    closeVehicleModal();
  };

  const deleteVehicle = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      setVehicles(vehicles.filter(v => v.id !== id));
    }
  };

  const renderDashboard = () => (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-4">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon size={32} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            onClick={() => handleTileClick(tile.id)}
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <tile.icon size={48} className={tile.color} />
              <h3 className="text-lg font-bold text-gray-800">{tile.title}</h3>
              <p className="text-sm text-gray-500">{tile.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Driver</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-800">{order.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{order.customer}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{order.driver}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
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

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Quick Actions</h2>
          <p className="text-sm text-gray-500 mb-6">Common admin shortcuts</p>
          <div className="space-y-3">
            <button className="w-full py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
              Create Order
            </button>
            <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition">
              Assign Driver
            </button>
            <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </>
  );

  const renderVehicleManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Vehicle Management</h2>
          <p className="text-gray-500 mt-1">Manage your delivery fleet</p>
        </div>
        <button
          onClick={() => openVehicleModal()}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          <Plus size={20} />
          Add Vehicle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg text-white">
              <Car size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Active').length}</p>
              <p className="text-sm text-gray-500">Active Vehicles</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500 p-3 rounded-lg text-white">
              <Settings size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{vehicles.filter(v => v.status === 'Maintenance').length}</p>
              <p className="text-sm text-gray-500">In Maintenance</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 p-3 rounded-lg text-white">
              <Truck size={32} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{vehicles.length}</p>
              <p className="text-sm text-gray-500">Total Fleet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">All Vehicles</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Vehicle ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Plate Number</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Driver</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Capacity</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm font-medium text-gray-800">{vehicle.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{vehicle.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{vehicle.plateNumber}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{vehicle.driver}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{vehicle.capacity}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => openVehicleModal(vehicle)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => deleteVehicle(vehicle.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-72 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">
            L
          </div>
          <h1 className="text-xl font-bold">Laundry Admin</h1>
        </div>

        <div className="space-y-6 flex-1">
          <div>
            <p className="text-xs text-purple-200 mb-3 font-semibold">MAIN</p>
            <nav className="space-y-2">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  currentView === 'dashboard' ? 'bg-white/20' : 'text-purple-100 hover:bg-white/10'
                }`}
              >
                <LayoutDashboard size={20} />
                <span>Dashboard</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Users size={20} />
                <span>Manage Customers</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <ShoppingCart size={20} />
                <span>Manage Orders</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Truck size={20} />
                <span>Manage Drivers</span>
              </button>
              <button
                onClick={() => setCurrentView('vehicles')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  currentView === 'vehicles' ? 'bg-white/20' : 'text-purple-100 hover:bg-white/10'
                }`}
              >
                <Car size={20} />
                <span>Manage Vehicles</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Droplet size={20} />
                <span>Laundry Services</span>
              </button>
            </nav>
          </div>

          <div>
            <p className="text-xs text-purple-200 mb-3 font-semibold">SYSTEM</p>
            <nav className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Package size={20} />
                <span>Inventory</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <CreditCard size={20} />
                <span>Payments</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-purple-100 hover:bg-white/10 transition">
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu size={24} className="text-gray-600" />
            <p className="text-sm text-gray-500">{now.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-700">Welcome, Admin</p>
            <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">
              Logout
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-auto">
          {currentView === 'dashboard' && renderDashboard()}
          {currentView === 'vehicles' && renderVehicleManagement()}
        </div>
      </div>

      {showVehicleModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">
                {editingVehicle ? 'Edit Vehicle' : 'Add New Vehicle'}
              </h3>
              <button onClick={closeVehicleModal} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Van">Van</option>
                  <option value="Truck">Truck</option>
                  <option value="Bike">Bike</option>
                  <option value="Car">Car</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plate Number</label>
                <input
                  type="text"
                  value={formData.plateNumber}
                  onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="ABC-1234"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assigned Driver</label>
                <input
                  type="text"
                  value={formData.driver}
                  onChange={(e) => setFormData({ ...formData, driver: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Driver Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
                <input
                  type="text"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., 150 kg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeVehicleModal}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  {editingVehicle ? 'Update' : 'Add'} Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}