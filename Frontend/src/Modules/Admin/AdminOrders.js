import { useState, useEffect } from 'react';
import { Package, Search, Filter, Eye, CheckCircle, XCircle, Clock, Truck } from 'lucide-react';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    // Simulate fetching orders
    const mockOrders = [
      {
        id: 'ORD001',
        customer: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        items: [
          { name: 'Pizza Margherita', quantity: 2, price: 12.99 },
          { name: 'Coke', quantity: 2, price: 2.50 }
        ],
        total: 30.98,
        status: 'pending',
        driver: null,
        address: '123 Main St, City',
        orderDate: '2024-12-10 14:30',
        estimatedDelivery: '15:15'
      },
      {
        id: 'ORD002',
        customer: 'Jane Smith',
        email: 'jane@example.com',
        phone: '+1234567891',
        items: [
          { name: 'Burger Deluxe', quantity: 1, price: 15.99 },
          { name: 'Fries', quantity: 1, price: 4.99 }
        ],
        total: 20.98,
        status: 'in-progress',
        driver: 'Mike Wilson',
        address: '456 Oak Ave, City',
        orderDate: '2024-12-10 14:15',
        estimatedDelivery: '15:00'
      },
      {
        id: 'ORD003',
        customer: 'Bob Johnson',
        email: 'bob@example.com',
        phone: '+1234567892',
        items: [
          { name: 'Pasta Carbonara', quantity: 1, price: 14.99 }
        ],
        total: 14.99,
        status: 'delivered',
        driver: 'Sarah Davis',
        address: '789 Pine Rd, City',
        orderDate: '2024-12-10 13:45',
        estimatedDelivery: '14:30'
      },
      {
        id: 'ORD004',
        customer: 'Alice Brown',
        email: 'alice@example.com',
        phone: '+1234567893',
        items: [
          { name: 'Sushi Roll', quantity: 3, price: 18.99 }
        ],
        total: 56.97,
        status: 'cancelled',
        driver: null,
        address: '321 Elm St, City',
        orderDate: '2024-12-10 13:30',
        estimatedDelivery: '-'
      }
    ];
    setOrders(mockOrders);
    setFilteredOrders(mockOrders);
  }, []);

  useEffect(() => {
    let filtered = orders;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredOrders(filtered);
  }, [searchTerm, statusFilter, orders]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'in-progress': return <Truck className="w-4 h-4" />;
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const assignDriver = (orderId, driverName) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, driver: driverName, status: 'in-progress' } : order
    ));
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, driver: driverName, status: 'in-progress' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Package className="w-8 h-8 text-blue-600" />
            Order Management
          </h1>
          <p className="text-gray-600 mt-1">View and manage all customer orders</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Total Orders</div>
            <div className="text-2xl font-bold text-gray-900">{orders.length}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Pending</div>
            <div className="text-2xl font-bold text-yellow-600">
              {orders.filter(o => o.status === 'pending').length}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">In Progress</div>
            <div className="text-2xl font-bold text-blue-600">
              {orders.filter(o => o.status === 'in-progress').length}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-600">Delivered</div>
            <div className="text-2xl font-bold text-green-600">
              {orders.filter(o => o.status === 'delivered').length}
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
                placeholder="Search by order ID, customer, or email..."
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
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.orderDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${order.total.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.driver || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => setSelectedOrder(order)}
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

        {/* Order Detail Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Order ID</div>
                      <div className="font-medium">{selectedOrder.id}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Status</div>
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedOrder.status)}`}>
                        {getStatusIcon(selectedOrder.status)}
                        {selectedOrder.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Customer</div>
                    <div className="font-medium">{selectedOrder.customer}</div>
                    <div className="text-sm text-gray-600">{selectedOrder.email}</div>
                    <div className="text-sm text-gray-600">{selectedOrder.phone}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Delivery Address</div>
                    <div className="font-medium">{selectedOrder.address}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500 mb-2">Order Items</div>
                    <div className="border rounded-lg divide-y">
                      {selectedOrder.items.map((item, idx) => (
                        <div key={idx} className="p-3 flex justify-between">
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                          </div>
                          <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      ))}
                      <div className="p-3 flex justify-between font-bold">
                        <div>Total</div>
                        <div>${selectedOrder.total.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Assigned Driver</div>
                    <div className="font-medium">{selectedOrder.driver || 'Not assigned'}</div>
                  </div>

                  {selectedOrder.status === 'pending' && (
                    <div className="space-y-2">
                      <button
                        onClick={() => assignDriver(selectedOrder.id, 'Mike Wilson')}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                      >
                        Assign to Driver
                      </button>
                      <button
                        onClick={() => updateOrderStatus(selectedOrder.id, 'cancelled')}
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                      >
                        Cancel Order
                      </button>
                    </div>
                  )}

                  {selectedOrder.status === 'in-progress' && (
                    <button
                      onClick={() => updateOrderStatus(selectedOrder.id, 'delivered')}
                      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                    >
                      Mark as Delivered
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}