import { useState, useEffect } from 'react';
import { Users, Search, Filter, Eye, Mail, Phone, MapPin, ShoppingBag, Star, Ban, CheckCircle, XCircle } from 'lucide-react';

export default function ManageCustomers() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    // Simulate fetching customers
    const mockCustomers = [
      {
        id: 'CUST001',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        address: '123 Main St, New York, NY 10001',
        joinDate: '2024-01-15',
        totalOrders: 45,
        totalSpent: 1245.50,
        avgOrderValue: 27.68,
        status: 'active',
        rating: 4.8,
        lastOrder: '2024-12-08',
        favoriteCategories: ['Pizza', 'Fast Food'],
        orderHistory: [
          { id: 'ORD045', date: '2024-12-08', items: 3, total: 42.50, status: 'delivered' },
          { id: 'ORD038', date: '2024-12-05', items: 2, total: 28.99, status: 'delivered' },
          { id: 'ORD032', date: '2024-12-01', items: 4, total: 56.20, status: 'delivered' }
        ]
      },
      {
        id: 'CUST002',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 (555) 234-5678',
        address: '456 Oak Ave, Los Angeles, CA 90001',
        joinDate: '2024-02-20',
        totalOrders: 32,
        totalSpent: 896.30,
        avgOrderValue: 28.01,
        status: 'active',
        rating: 4.9,
        lastOrder: '2024-12-09',
        favoriteCategories: ['Asian', 'Healthy'],
        orderHistory: [
          { id: 'ORD052', date: '2024-12-09', items: 2, total: 35.99, status: 'delivered' },
          { id: 'ORD048', date: '2024-12-07', items: 3, total: 45.50, status: 'delivered' }
        ]
      },
      {
        id: 'CUST003',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        phone: '+1 (555) 345-6789',
        address: '789 Pine Rd, Chicago, IL 60601',
        joinDate: '2024-03-10',
        totalOrders: 28,
        totalSpent: 734.80,
        avgOrderValue: 26.24,
        status: 'active',
        rating: 4.6,
        lastOrder: '2024-12-06',
        favoriteCategories: ['Burgers', 'Pizza'],
        orderHistory: [
          { id: 'ORD041', date: '2024-12-06', items: 2, total: 32.50, status: 'delivered' }
        ]
      },
      {
        id: 'CUST004',
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        phone: '+1 (555) 456-7890',
        address: '321 Elm St, Miami, FL 33101',
        joinDate: '2024-04-05',
        totalOrders: 15,
        totalSpent: 425.60,
        avgOrderValue: 28.37,
        status: 'inactive',
        rating: 4.3,
        lastOrder: '2024-11-15',
        favoriteCategories: ['Sushi', 'Asian'],
        orderHistory: []
      },
      {
        id: 'CUST005',
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        phone: '+1 (555) 567-8901',
        address: '654 Maple Dr, Seattle, WA 98101',
        joinDate: '2024-05-12',
        totalOrders: 8,
        totalSpent: 198.40,
        avgOrderValue: 24.80,
        status: 'banned',
        rating: 2.1,
        lastOrder: '2024-10-20',
        favoriteCategories: [],
        orderHistory: []
      },
      {
        id: 'CUST006',
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        phone: '+1 (555) 678-9012',
        address: '987 Cedar Ln, Boston, MA 02101',
        joinDate: '2024-06-18',
        totalOrders: 52,
        totalSpent: 1456.90,
        avgOrderValue: 28.02,
        status: 'active',
        rating: 4.9,
        lastOrder: '2024-12-10',
        favoriteCategories: ['Italian', 'Desserts'],
        orderHistory: [
          { id: 'ORD055', date: '2024-12-10', items: 4, total: 62.50, status: 'in-progress' },
          { id: 'ORD051', date: '2024-12-09', items: 2, total: 38.99, status: 'delivered' }
        ]
      }
    ];
    setCustomers(mockCustomers);
    setFilteredCustomers(mockCustomers);
  }, []);

  useEffect(() => {
    let filtered = customers;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(customer => customer.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
      );
    }

    setFilteredCustomers(filtered);
  }, [searchTerm, statusFilter, customers]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-yellow-100 text-yellow-800';
      case 'banned': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'inactive': return <XCircle className="w-4 h-4" />;
      case 'banned': return <Ban className="w-4 h-4" />;
      default: return null;
    }
  };

  const updateCustomerStatus = (customerId, newStatus) => {
    setCustomers(customers.map(customer =>
      customer.id === customerId ? { ...customer, status: newStatus } : customer
    ));
    if (selectedCustomer?.id === customerId) {
      setSelectedCustomer({ ...selectedCustomer, status: newStatus });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-600" />
            Customer Management
          </h1>
          <p className="text-gray-600 mt-1">View and manage all registered customers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Total Customers</div>
            <div className="text-2xl font-bold text-gray-900">{customers.length}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Active</div>
            <div className="text-2xl font-bold text-green-600">
              {customers.filter(c => c.status === 'active').length}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Inactive</div>
            <div className="text-2xl font-bold text-yellow-600">
              {customers.filter(c => c.status === 'inactive').length}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Total Revenue</div>
            <div className="text-2xl font-bold text-blue-600">
              ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email, ID, or phone..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="banned">Banned</option>
              </select>
            </div>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 flex items-center gap-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        {customer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{customer.totalOrders}</div>
                      <div className="text-sm text-gray-500">${customer.avgOrderValue.toFixed(2)} avg</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${customer.totalSpent.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm text-gray-900">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {customer.rating}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {getStatusIcon(customer.status)}
                        {customer.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedCustomer(customer)}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Detail Modal */}
        {selectedCustomer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xl">
                        {selectedCustomer.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{selectedCustomer.name}</h2>
                      <p className="text-gray-600">{selectedCustomer.id}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Contact Information</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <span>{selectedCustomer.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span>{selectedCustomer.phone}</span>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                          <span>{selectedCustomer.address}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500 mb-1">Status</div>
                      <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(selectedCustomer.status)}`}>
                        {getStatusIcon(selectedCustomer.status)}
                        {selectedCustomer.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 mb-2">Order Statistics</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Total Orders:</span>
                          <span className="font-semibold">{selectedCustomer.totalOrders}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Total Spent:</span>
                          <span className="font-semibold">${selectedCustomer.totalSpent.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Avg Order Value:</span>
                          <span className="font-semibold">${selectedCustomer.avgOrderValue.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Rating:</span>
                          <span className="font-semibold flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {selectedCustomer.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500 mb-1">Favorite Categories</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCustomer.favoriteCategories.length > 0 ? (
                          selectedCustomer.favoriteCategories.map((cat, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              {cat}
                            </span>
                          ))
                        ) : (
                          <span className="text-sm text-gray-400">No favorite categories yet</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Recent Orders
                  </h3>
                  {selectedCustomer.orderHistory.length > 0 ? (
                    <div className="space-y-2">
                      {selectedCustomer.orderHistory.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{order.id}</div>
                            <div className="text-sm text-gray-500">{order.date} • {order.items} items</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${order.total.toFixed(2)}</div>
                            <div className={`text-xs ${order.status === 'delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                              {order.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <ShoppingBag className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No recent orders</p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {selectedCustomer.status === 'active' && (
                    <>
                      <button
                        onClick={() => updateCustomerStatus(selectedCustomer.id, 'banned')}
                        className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 flex items-center justify-center gap-2"
                      >
                        <Ban className="w-4 h-4" />
                        Ban Customer
                      </button>
                    </>
                  )}
                  {selectedCustomer.status === 'banned' && (
                    <button
                      onClick={() => updateCustomerStatus(selectedCustomer.id, 'active')}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Unban Customer
                    </button>
                  )}
                  {selectedCustomer.status === 'inactive' && (
                    <button
                      onClick={() => updateCustomerStatus(selectedCustomer.id, 'active')}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Activate Customer
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}